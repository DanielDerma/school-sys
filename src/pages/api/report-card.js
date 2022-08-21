// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      course: "math",
      semester: "1",
      u1: 8,
      u2: 8,
      u3: 8,
      u4: 8,
      u5: 8,
      u6: 8,
    },
    {
      course: "spanish",
      semester: "1",
      u1: 8,
      u2: 8,
      u3: 8,
      u4: 8,
      u5: 8,
      u6: 8,
    },
    {
      course: "physical",
      semester: "1",
      u1: 8,
      u2: 8,
      u3: 8,
      u4: 8,
      u5: 8,
      u6: 8,
    },
  ]);
}
