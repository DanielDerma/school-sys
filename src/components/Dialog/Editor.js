import { useState, forwardRef, useEffect } from "react";
import {
  Grid,
  TextField,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Fab,
  Box,
  Button,
} from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import RichEditor from "../RichEditor/index";
import ImgDropzone from "../Dropzone";
import ImgPreview from "../Editor/ImgPreview";
import { createOrEditPost, deletePost } from "../../utils/firebaseStorage";
import { LoadingButton } from "@mui/lab";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditorRN({
  fetchPost,
  handleClickOpen,
  handleClose,
  open,
  editPost,
}) {
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [uid, setUid] = useState("");

  useEffect(() => {
    if (editPost && open) {
      const { uid, ...preview } = editPost;
      setUid(uid);
      formik.setValues(preview, false);
    }
  }, [editPost, open]); // eslint-disable-line react-hooks/exhaustive-deps

  const formik = useFormik({
    initialValues: {
      title: "",
      img: "",
      content: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Required"),
      img: Yup.mixed().required("Required"),
      content: Yup.string()
        .min(10)
        .max(2000)
        .required("Required"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      createOrEditPost({ ...values, uid }, Boolean(editPost))
        .then(() => {
          fetchPost();
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          handleCloseWithResetForm();
          setLoading(false);
        });
    },
  });

  const handleCloseWithResetForm = () => {
    formik.resetForm();
    handleClose();
  };

  const handleDelete = () => {
    setLoadingDelete(true);
    console.log(editPost.uid);
    deletePost(editPost.uid)
      .then(() => {
        fetchPost();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        handleCloseWithResetForm();
        setLoadingDelete(false);
      });
  };

  return (
    <div>
      <Box>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: "3rem",
            right: "3rem",
          }}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Box>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        onClose={handleCloseWithResetForm}
      >
        <form onSubmit={formik.handleSubmit}>
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseWithResetForm}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>

              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Editor
              </Typography>
              {editPost && (
                <LoadingButton
                  color="inherit"
                  onClick={handleDelete}
                  loading={loadingDelete}
                >
                  Eliminar
                </LoadingButton>
              )}
              <LoadingButton color="inherit" type="submit" loading={loading}>
                save
              </LoadingButton>
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
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                {...formik.getFieldProps("title")}
              />

              <ImgDropzone
                getImage={(val) => formik.setFieldValue("img", val)}
                error={formik.touched.img && formik.errors.img}
              />
              <ImgPreview
                error={formik.touched.content && formik.errors.content}
                img={formik.values.img}
              />
            </Grid>
            <Grid item xs={8} sx={{}}>
              <RichEditor
                setFieldValue={(val) => formik.setFieldValue("content", val)}
                value={formik.values.content}
              />
            </Grid>
          </Grid>
        </form>
      </Dialog>
    </div>
  );
}
