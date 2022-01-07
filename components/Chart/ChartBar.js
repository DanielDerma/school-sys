import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    name: 3001,
    uv: 70,
  },
  {
    name: 3001,
    uv: 70,
  },
  {
    name: 3001,
    uv: 70,
  },
  {
    name: 3001,
    uv: 70,
  },
  {
    name: 3001,
    uv: 70,
  },
  {
    name: 3001,
    uv: 70,
  },
  {
    name: 3001,
    uv: 70,
  },
  {
    name: 3001,
    uv: 40,
  },
];

export default function App() {
  return (
    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.uv > 60 ? "#94BFE5" : "#C983BB"}
            ></Cell>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
