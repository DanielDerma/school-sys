// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 3,
    first_name: "Elset",
    last_name: "Pockett",
    gender: "F",
    age: 19,
    contact_add: "639-115-10-67",
    email: "epockett2@bandcamp.com",
    pass: "PNMPNDwhE",
    math: 10,
    chinese: 9,
    english: 6,
    geography: 7,
    physics: 6,
    history: 2,
  });
}
