// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      first_name: "Johnson",
      last_name: "Sultan",
      gender: "M",
      age: 35,
      contact_add: "639 113 32 43",
      email: "rsultan0@phoca.cz",
      pass: "h4RmmdG",
    },
    {
      id: 2,
      first_name: "Molly",
      last_name: "Penvarden",
      gender: "F",
      age: 33,
      contact_add: "639 113 32 43",
      email: "mpenvarden1@usa.gov",
      pass: "BVmtq7oIXFu3",
    },
  ]);
}
