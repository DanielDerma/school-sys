// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from "../../../../firebase/admin";
import { subject } from "./data";

export default async function handler(req, res) {
  const importUser = await Promise.all(
    subject.map(async (sub) => {
      const studentadd = await firestore
        .collection("subject")
        .doc(sub.docName)
        .set({
          refTeacher: sub.refTeacher,
          nUnit: sub.nUnit,
          student: sub.student,
        });
    })
  );

  res.status(200).json({ message: "update db subjects" });
}
