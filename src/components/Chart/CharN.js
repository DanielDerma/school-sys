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
      }}
    >
      <Typography sx={{ display: "inline" }} component="h2">
        {data.name ? "Maestra: " + data.name : <Skeleton />}
      </Typography>
      <IconButton
        sx={{ display: "inline", ml: 16 }}
        onClick={() => (window.location = "mailto:yourmail@gmail.com")}
      >
        {loading ? <></> : <AlternateEmailIcon />}
      </IconButton>
      <Typography sx={{ display: "inline" }} component="h2">
        {data.number ? "Teléfono: " + data.number : <Skeleton />}
      </Typography>
    </Paper>
  );
};

export default CharN;
