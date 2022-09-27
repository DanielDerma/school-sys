import { Grid, Paper, Typography, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ChartNumbers = ({ meanFormatted, loading }) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        // height: 600,
      }}
    >
      <Box sx={{ textAlign: "center", maxHeight: "168px" }}>
        <Typography>{loading ? <Skeleton /> : "Promedio del Grupo"}</Typography>
        <Typography sx={{ fontSize: "100px", color: "#94BFE5" }}>
          {loading ? (
            <Skeleton />
          ) : !isNaN(parseFloat(meanFormatted)) ? (
            meanFormatted
          ) : (
            0
          )}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ChartNumbers;
