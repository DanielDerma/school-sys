import { Button, Toolbar } from "@mui/material";
import { FilterSIIMain } from "../";

export default function FormDialog({ handleClickOpenEditor }) {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bc: "white",
      }}
    >
      <Button variant="outlined" onClick={() => handleClickOpenEditor(false)}>
        Agregar Elementos
      </Button>
    </Toolbar>
  );
}
