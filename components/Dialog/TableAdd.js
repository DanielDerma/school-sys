import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function TableAdd({
  open,
  handleClose,
  handleClickOpen,
  preview = {},
}) {
  // liffter up
  console.log(preview, "preview");
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Moditficar Usuario</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={preview.fname ? preview.fname : ""}
          />
          <TextField
            margin="dense"
            id="name"
            label="Apellido"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={preview.lname ? preview.lname : ""}
          />
          <TextField
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={preview.email ? preview.email : ""}
          />
          <TextField
            margin="dense"
            id="name"
            label="Numero"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={preview.contact_add ? preview.contact_add : ""}
          />

          <TextField
            margin="dense"
            id="name"
            label="Edad"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={preview.age ? preview.age : ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
