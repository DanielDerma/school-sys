import { Divider, Typography } from "@mui/material";
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
    >
      <Typography variant="h6" gutterBottom>
        Start
      </Typography>
      <Divider />
    </Grid>
  );
}

export default Main;
