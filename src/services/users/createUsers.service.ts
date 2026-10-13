import { client } from "../../database";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { responseUserSchema } from "../../schemas/users.schemas";
import { hash } from "bcryptjs";

/** Admin is never accepted from the public create-user request. */
const createUsersService = async (payload: TUserRequest): Promise<TUserResponse> => {
  const passwordHash = await hash(payload.password, 10);
  const result = await client.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [payload.name, payload.email, passwordHash]
  );
  return responseUserSchema.parse(result.rows[0]);
};
export default createUsersService;
