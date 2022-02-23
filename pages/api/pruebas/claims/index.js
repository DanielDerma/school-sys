// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { auth } from "../../../../firebase/admin";

export default async function handler(req, res) {
  const getUser = await auth.getUser("GsPlWsiNHqbB1JeFXjIvCQXVNqu1");

  res.status(200).json({ getUser });
}
