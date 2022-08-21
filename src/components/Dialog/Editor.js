import { useState, useEffect, forwardRef } from "react";
import {
  Grid,
  TextField,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Fab,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import RichEditor from "../RichEditor/index";
import Dropzone from "../Dropzone";
import { createPost } from "../../utils/firebaseStorage";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditorRN() {
  const [open, setOpen] = useState(false);
  const [save, setSave] = useState(false);
  const [newPost, setNewPost] = useState({});

  useEffect(() => {
    if (
      save &&
      Object.keys(newPost.rawContent).length > 0 &&
      newPost.title &&
      newPost.img
    ) {
      if (Object.keys(newPost).length !== 0) {
        createPost(newPost);
        console.log("created", newPost.title);
      }
    }
  }, [newPost]);

  const handleClickOpen = () => {
    setSave(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setSave(true);
    setOpen(false);
  };

  return (
    <div>
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
      <Dialog
        fullScreen
        open={open}
        // onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3} sx={{ p: 6 }}>
          <Grid item xs={4} sx={{ p: 4 }}>
            <TextField
              label="Titulo"
              id="standard-size-normal"
              variant="standard"
              fullWidth
              autoComplete="off"
              sx={{ pb: 4 }}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />

            <Dropzone
              getImg={(newImg) => setNewPost({ ...newPost, img: newImg })}
            />
          </Grid>
          <Grid item xs={8} sx={{}}>
            <RichEditor
              addSave={save}
              getRawContent={(rawContent) =>
                setNewPost({ ...newPost, rawContent: rawContent })
              }
            />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
