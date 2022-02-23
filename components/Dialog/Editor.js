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
import { firestore, storage } from "../../firebase/client";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditorRN() {
  const [open, setOpen] = useState(false);
  const [save, setSave] = useState(false);
  const [newPost, setNewPost] = useState({});
  const [uriImg, setUriImg] = useState("");

  useEffect(() => {
    if (
      save &&
      Object.keys(newPost.rawContent).length > 0 &&
      newPost.title &&
      newPost.img
    ) {
      if (Object.keys(newPost).length !== 0) addnewPost(newPost);
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

  const addnewPost = async (newPost) => {
    const regex = /[^A-Za-z0-9]/g;
    const path = newPost.title.toLowerCase().replace(regex, "-");
    const pathImg = "postImg-" + path;
    const storageRef = ref(storage, pathImg);
    const { entityMap, blocks } = newPost.rawContent;
    const entityMap2 = [entityMap];
    const entityMap3 = Object.values(entityMap2[0]);

    const content = { blocks, entityMap3 }; //
    console.log(content);

    try {
      // add image to the firebase storage
      await uploadBytes(storageRef, newPost.img[0]);
      // get the image url
      const uriImg = await getDownloadURL(storageRef);
      setUriImg(uriImg);
      // add post to the firebase firestore
      await addDoc(collection(firestore, "posts"), {
        img: uriImg,
        content,
        title: newPost.title,
        path: path, // checar si es efciencte
      });
      console.log("post added");
    } catch (e) {
      console.log("ERROR WITH ADD NEW POST: ", e);
    }
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
