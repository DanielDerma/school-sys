import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ChartNumbers = () => (
  <Box sx={{ textAlign: "center", maxHeight: "168px" }}>
    <Typography>Porcentaje Aprobatorio</Typography>
    <Typography sx={{ fontSize: "100px", color: "#94BFE5" }}>67%</Typography>
  </Box>
);

export default ChartNumbers;
