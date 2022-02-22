// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from "../../../../firebase/admin";
import { student } from "./data";

export default async function handler(req, res) {
  const addStudent = await Promise.all(
    student.map(async (stud) => {
      const studentadd = await firestore
        .collection("user")
        .doc(stud.email)
        .set({
          age: stud.age,
          contact_add: stud.contact_add,
          email: stud.email,
          fname: stud.first_name,
          lname: stud.last_name,
          role: stud.role,
        });

      const addStudent = await Promise.all(
        stud.course.map(async (cour) => {
          const courseadd = await firestore
            .collection("user")
            .doc(stud.email)
            .collection("course")
            .doc(cour.docName)
            .set({
              ranks: cour.ranks,
            });
        })
      );
    })
  );

  res.status(200).json({ message: "update db" });
}
