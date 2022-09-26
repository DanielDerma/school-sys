import { auth } from "../../services/admin";

export default function handler(req, res) {
  //   const { query } = request;
  //   const { id } = query;
  auth
    .getUser("uGiMwPcR6RTTdCAdKzpfVSoQGur1")
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}
