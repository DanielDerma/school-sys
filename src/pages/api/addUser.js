import { auth } from "../../services/admin";

export default async function handler(req, res) {
  const { email, lname, fname, initialPassword, role } = req.body;

  if (req.method !== "POST") {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
  try {
    const { uid } = await auth.createUser({
      email,
      password: initialPassword,
      disabled: false,
      displayName: fname + " " + lname,
    });

    await auth.setCustomUserClaims(uid, { role });

    res.status(200).json({
      message: "User created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}
