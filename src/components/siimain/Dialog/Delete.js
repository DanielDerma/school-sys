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
import { deleteCourse } from "../../../utils/firebaseStorage";

export default function TableDelete({
  open,
  handleClose,
  preview,
  change,
  query,
}) {
  const [confirm, setConfirm] = useState(true);

  const handleConfirm = (e) => {
    if (e === "eliminar") {
      setConfirm(false);
    } else {
      setConfirm(true);
    }
  };

  const handleSubmit = () => {
    deleteCourse(preview.email, query).then(() => {
      setConfirm(true);
      handleClose();
      change(query);
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Confirma escribiendo <strong>&quot;eliminar&quot;</strong> en el
            siguiente campo
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Confirmar"
            type="text"
            fullWidth
            variant="standard"
            error={Boolean(confirm)}
            onChange={(e) => handleConfirm(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={confirm} variant="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
