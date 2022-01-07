import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 60,
    B: 60,
    fullMark: 100,
  },
  {
    subject: "Chinese",
    A: 60,
    B: 40,
    fullMark: 100,
  },
  {
    subject: "English",
    A: 86,
    B: 60,
    fullMark: 100,
  },
  {
    subject: "Geography",
    A: 68,
    B: 45,
    fullMark: 100,
  },
  {
    subject: "Physics",
    A: 90,
    B: 40,
    fullMark: 100,
  },
  {
    subject: "History",
    A: 65,
    B: 50,
    fullMark: 100,
  },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
