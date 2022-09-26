import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const GridController = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    order: "-1",
  },
}));

export default GridController;
