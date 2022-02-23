import React from "react";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const CharN = (props) => {
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Paper
        sx={{
          p: 2,
          height: "100%",
        }}
      >
        <Typography component="h2">
          Maestra: Rocio Catalina Nevarez Gonzalez
        </Typography>
        <Typography component="h2">Número: 639 115 10 67</Typography>
        <IconButton>
          <AlternateEmailIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
};

export default CharN;
