// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let admin = require("firebase-admin");

import { firestore, auth } from "../../../services/admin";
import { data } from "./test";

const course = [
  {
    courseInfo: "AGO-DIC-2021_electromechanical_physical_1_A",
    account: {
      age: 23,
      contact_add: 6391154067,
      email: "nose@estudiant.com",
      fname: "estudiante",
      lname: "estudiante",
      role: "student",
    },
    ranks: {
      u1: 6,
      u2: 6,
      u3: 6,
      u4: 6,
      u5: 6,
      u6: 1,
      u7: 6,
    },
  },
];

export default async function handler(req, res) {
  try {
    const adding = data.map(async (elem) => {
      // await firestore
      //   .collection("user")
      //   .doc(elem.account.email)
      //   .set(elem.account);

      // await firestore
      //   .collection("user")
      //   .doc(elem.account.email)
      //   .collection("course")
      //   .doc(elem.courseInfo)
      //   .set({
      //     ranks: elem.ranks,
      //   });

      // await firestore
      //   .collection("subject")
      //   .doc(elem.courseInfo)
      //   .update({
      //     student: admin.firestore.FieldValue.arrayUnion(elem.account.email),
      //   });

      //auth
      const { uid } = await auth.createUser({
        email: elem.account.email,
        password: elem.account.initialPassword,
        disabled: false,
        displayName: elem.account.fname + " " + elem.account.lname,
      });
      // auth custom claims
      await auth.setCustomUserClaims(uid, { role: elem.account.role });
    });

    await Promise.all(adding);

    res.status(200).json({ message: "update db" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ messageError: error });
  }
}
