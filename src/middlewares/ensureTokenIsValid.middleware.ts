import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import jwt, { JwtPayload } from "jsonwebtoken";
import { client } from "../database";
import { AppError } from "../error";

/**
 * Authentication is checked against the current database state, not just
 * claims recorded in a still-unexpired JWT.
 */
const ensureTokenIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const header = req.headers.authorization;
  if (!header) {
    throw new AppError("Missing Bearer Token", 401);
  }
  const parts = header.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer" || !parts[1]) {
    throw new AppError("Invalid Bearer Token", 401);
  }

  const secret = process.env.SECRET_KEY;
  if (!secret) {
    throw new AppError("Authentication unavailable", 503);
  }

  let payload: JwtPayload;
  try {
    const decoded = jwt.verify(parts[1], secret);
    if (typeof decoded === "string") throw new Error("Invalid payload");
    payload = decoded;
  } catch {
    throw new AppError("Invalid or expired token", 401);
  }

  const subject = Number(payload.sub);
  if (!Number.isSafeInteger(subject) || subject <= 0) {
    throw new AppError("Invalid token subject", 401);
  }

  const result = await client.query<{ id: number; admin: boolean }>(
    "SELECT id, admin FROM users WHERE id = $1 AND active = true LIMIT 1",
    [subject]
  );
  const account = result.rows[0];
  if (!account) {
    throw new AppError("Account inactive or unavailable", 401);
  }
  res.locals.id = account.id;
  res.locals.admin = account.admin;
  next();
};

export default ensureTokenIsValidMiddleware;
