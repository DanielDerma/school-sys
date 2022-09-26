// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from "../../../services/admin";

const course = [
  {
    courseInfo: "AGO-DIC-2021_electromechanical_physical_1_A",
    ranks: {
      u1: 6,
      u2: 6,
      u3: 6,
      u4: 6,
      u5: 6,
      u6: 6,
      u7: 6,
    },
  },
];

const student = {
  email: "estudiant@estudiant.com",
};

export default async function handler(req, res) {
  try {
    const courses = course.map(async (elem) => {
      await firestore
        .collection("user")
        .doc(student.email)
        .collection("course")
        .doc(elem.courseInfo)
        .set({
          ranks: elem.ranks,
        });
    });

    await Promise.all(courses);

    res.status(200).json({ message: "update db" });
  } catch (error) {
    res.status(400).json({ messageError: error });
  }
}
