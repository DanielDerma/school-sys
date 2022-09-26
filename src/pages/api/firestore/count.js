import { firestore } from "../../../services/admin";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
  try {
    const posts = await firestore
      .collection("posts")
      .doc("utils")
      .get();

    const postsCount = posts.data().count;

    res.status(200).json({
      posts: postsCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}
