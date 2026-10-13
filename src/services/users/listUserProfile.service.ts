import { client } from "../../database";
import { AppError } from "../../error";
import { TUserResponse } from "../../interfaces/user.interfaces";

const listUserProfileService = async (userId: number): Promise<TUserResponse> => {
  const result = await client.query<TUserResponse>(
    "SELECT id, name, email, admin, active FROM users WHERE id = $1 LIMIT 1",
    [userId]
  );
  if (!result.rows[0]) throw new AppError("User not found", 404);
  return result.rows[0];
};
export default listUserProfileService;
