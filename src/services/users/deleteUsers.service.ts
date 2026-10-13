import { client } from "../../database";
import { AppError } from "../../error";

/** Ownership/admin permission is validated by the route before this service. */
const deleteUsersService = async (userId: number): Promise<void> => {
  const result = await client.query(
    "UPDATE users SET active = false WHERE id = $1 AND active = true RETURNING id",
    [userId]
  );
  if (!result.rows[0]) {
    throw new AppError("User not found or already inactive", 404);
  }
};
export default deleteUsersService;
