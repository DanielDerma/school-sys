import { auth } from "../../services/admin";

export default function handler(req, res) {
  //   const { query } = request;
  //   const { id } = query;
  auth
    .getUser("Hbn7qX13zDZeRk9BP6WawB62uNh2")
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}
