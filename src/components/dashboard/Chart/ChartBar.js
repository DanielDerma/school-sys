import { Box } from "@mui/system";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function App({ data }) {
  console.log("app data", data);
  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <ReferenceLine y={0} stroke="#000" />
            <Brush dataKey="name" height={30} stroke="#8884d8" />
            <Bar dataKey="Promedio" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
