import { firebase } from "../../firebase/admin";

export default function handler(req, res) {
  //   const { query } = request;
  //   const { id } = query;
  firebase
    .auth()
    .getUser("fYJlAf6g1HPXBEUbgv6IuFCF3Vr2")
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}
