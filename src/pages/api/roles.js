import { auth } from "../../services/admin";

export default function handler(req, res) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  auth
    .verifyIdToken(authorization, true)
    .then((decodedToken) => {
      res.json(decodedToken);
    })
    .catch((error) => {
      res.status(401).json({
        message: "Unauthorized",
      });
    });

  // if (req.method !== "POST") {
  //   res.status(405).json({
  //     message: "Method not allowed",
  //   });
  // }
}
