import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BackupIcon from "@mui/icons-material/Backup";
import Drop from "./Drop";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          bottom: "3em",
          right: "3em",
        }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth={true}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Box sx={{ height: "400px" }}>Richer Text Editor</Box>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="1">Titulo</Typography>
              <Drop />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
