import format from "pg-format";
import { hash } from "bcryptjs";
import { client } from "../../database";
import { AppError } from "../../error";
import { TUserResponse, TUserUpdateRequest } from "../../interfaces/user.interfaces";
import { responseUserSchema } from "../../schemas/users.schemas";

/** The schema restricts fields, and SQL values always remain parameters. */
const updateUsersService = async (
  userId: number,
  payload: TUserUpdateRequest
): Promise<TUserResponse> => {
  const entries = Object.entries(payload).filter(([, value]) => value !== undefined);
  if (entries.length === 0) throw new AppError("No fields to update", 400);
  const allowed = new Set(["name", "email", "password"]);
  if (entries.some(([field]) => !allowed.has(field))) throw new AppError("Invalid update field", 400);

  const fields = await Promise.all(entries.map(async ([name, value]) => [
    name,
    name === "password" ? await hash(String(value), 10) : value,
  ] as const));
  const setters = fields.map(([name], index) => format("%I = $%s", name, index + 1)).join(", ");
  const result = await client.query(
    `UPDATE users SET ${setters} WHERE id = $${fields.length + 1} RETURNING *`,
    [...fields.map(([, value]) => value), userId]
  );
  if (!result.rows[0]) throw new AppError("User not found", 404);
  return responseUserSchema.parse(result.rows[0]);
};
export default updateUsersService;
