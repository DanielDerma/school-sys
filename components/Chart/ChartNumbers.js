import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ChartNumbers = ({ title, meanFormatted }) => {
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          // height: 600,
        }}
      >
        <Box sx={{ textAlign: "center", maxHeight: "168px" }}>
          <Typography>{title}</Typography>
          <Typography sx={{ fontSize: "100px", color: "#94BFE5" }}>
            {meanFormatted}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ChartNumbers;
