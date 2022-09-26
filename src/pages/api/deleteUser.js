import { auth } from "../../services/admin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
  try {
    const { uid } = await auth.getUserByEmail(req.body);
    await auth.deleteUser(uid);
    res.status(200).json({
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: error,
    });
  }
}
