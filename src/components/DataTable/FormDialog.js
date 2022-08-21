import { Button, Toolbar } from "@mui/material";

export default function FormDialog({ handleClickOpenEditor }) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        display: "flex",
        flexDirection: "row-reverse",
        bc: "white",
      }}
    >
      <div>
        <Button variant="outlined" onClick={() => handleClickOpenEditor(false)}>
          {" "}
          {/* //avoid SyntheticBaseEvent  */}
          Agregar Elementos
        </Button>
      </div>
    </Toolbar>
  );
}
