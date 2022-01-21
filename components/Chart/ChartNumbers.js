import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ChartNumbers = ({ title, meanFormatted }) => {
  return (
    <Box sx={{ textAlign: "center", maxHeight: "168px" }}>
      <Typography>{title}</Typography>
      <Typography sx={{ fontSize: "100px", color: "#94BFE5" }}>
        {meanFormatted}
      </Typography>
    </Box>
  );
};

export default ChartNumbers;
