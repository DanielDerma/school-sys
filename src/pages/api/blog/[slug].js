import { firebase } from "../../../firebase/admin";

export default async function handler(req, res) {
  const { slug } = req.query;
  const rawStudents = await firebase
    .firestore()
    .collectionGroup("course")
    .where("grade", "==", "4")
    .get();
  // if (!rawStudents.empty) {
  //   // const students = rawStudents.docs.map((doc) => doc.data());
  //   res.json({ ...rawStudents });
  // }

  res.json({ ...rawStudents });
}
