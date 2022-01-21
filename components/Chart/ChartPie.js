import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useState } from "react";

const data = [
  {
    name: "Group A",
    value: 400,
    math: 8,
    chinese: 10,
    english: 7,
    geography: 6,
    physics: 7,
    history: 8,
  },
  { name: "Group B", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function GraphPie() {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

const ChartPie = ({ title }) => (
  <Box sx={{ textAlign: "center", height: "168px" }}>
    {/* <Typography>{title}</Typography> */}
    <GraphPie />
  </Box>
);

export default ChartPie;
