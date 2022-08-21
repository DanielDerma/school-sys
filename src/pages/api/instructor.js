// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      first_name: "asdf",
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
      gender: "F",
      last_name: "Penvarden",
      age: 33,
      contact_add: "639 113 32 43",
      email: "mpenvarden1@usa.gov",
      pass: "BVmtq7oIXFu3",
    },
    {
      id: 3,
      first_name: "Peggie",
      last_name: "Batten",
      gender: "F",
      age: 26,
      contact_add: "639 113 32 43",
      email: "pbatten2@oakley.com",
      pass: "m7kKcQzUIgr",
    },
    {
      id: 4,
      first_name: "Celie",
      last_name: "Harry",
      gender: "F",
      age: 19,
      contact_add: "639 113 32 43",
      email: "charry3@linkedin.com",
      pass: "icUTKIH",
    },
    {
      id: 5,
      first_name: "Menard",
      last_name: "MacCawley",
      gender: "M",
      age: 29,
      contact_add: "639 113 32 43",
      email: "mmaccawley4@mit.edu",
      pass: "hDxXgw3aURP",
    },
  ]);
}
