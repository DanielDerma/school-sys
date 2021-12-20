import Grid from "@mui/material/Grid";

function Main() {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    ></Grid>
  );
}

export default Main;
