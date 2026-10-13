import jwt from "jsonwebtoken";
import "dotenv/config";
import { compare } from "bcryptjs";
import { client } from "../../database";
import { AppError } from "../../error";
import { TLoginRequest, TLoginResponse } from "../../interfaces/login.interfaces";

const createSessionService = async (payload: TLoginRequest): Promise<TLoginResponse> => {
  const result = await client.query(
    "SELECT id, password, active FROM users WHERE email = $1 LIMIT 1",
    [payload.email]
  );
  const user = result.rows[0];
  if (!user || user.active !== true || !(await compare(payload.password, user.password))) {
    throw new AppError("Wrong email/password", 401);
  }
  const secret = process.env.SECRET_KEY;
  if (!secret) throw new AppError("Authentication unavailable", 503);
  const token = jwt.sign({}, secret, { expiresIn: "24h", subject: String(user.id) });
  return { token };
};
export default createSessionService;
