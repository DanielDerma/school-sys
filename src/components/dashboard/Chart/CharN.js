import React from "react";
import { Grid, IconButton, Paper, Typography, Skeleton } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const CharN = ({ data, loading }) => {
  console.log(data);
  return (
    <Paper
      sx={{
        p: 2,
        height: "100%",
        position: "relative",
      }}
    >
      <Typography component="h2">
        {data.name ? "Maestro: " + data.name : <Skeleton />}
      </Typography>
      <Typography component="h2">
        {data.number ? "Teléfono: " + data.number : <Skeleton />}
      </Typography>
      <IconButton
        sx={{ position: "absolute", top: 15, right: 15 }}
        onClick={() => (window.location = "mailto:yourmail@gmail.com")}
      >
        {loading ? <></> : <AlternateEmailIcon />}
      </IconButton>
    </Paper>
  );
};

export default CharN;
