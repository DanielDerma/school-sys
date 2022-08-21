import { firestore } from "../../../firebase/admin";

export default function handler(req, res) {
  const { slug } = req.query;

  firestore
    .collection("posts")
    .doc(slug)
    .get()
    .then((doc) => {
      res.status(200).json({ doc });
    })
    .catch((err) => {
      res.status(200).json({ msg: err });
    });
}
