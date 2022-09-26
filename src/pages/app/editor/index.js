import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { getPostFeed } from "../../../utils/firebaseStorage";
import useAuthPage from "../../../hooks/useAuthPage";
import {
  AppLayout,
  FakeData,
  FeaturedPost,
  DialogEditor,
} from "../../../components";

const Media = ({ loading, data, handleEdition }) => {
  if (loading) {
    return <FakeData />;
  }

  return (
    <>
      {data.map((post, id) => (
        <FeaturedPost key={id} post={post} editPost={handleEdition} />
      ))}
    </>
  );
};

export default function Editor() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editPost, setEditPost] = useState();

  const { currentUser, pageLoading } = useAuthPage("Editor");

  useEffect(() => {
    if (currentUser) {
      fetchPost();
    }
  }, [currentUser]);

  const fetchPost = () => {
    setLoading(true);
    getPostFeed()
      .then((response) => {
        setLoading(false);
        setData(response);
      })
      .catch(() => {
        setLoading(false);
        console.error(error);
      });
  };

  const handleClickOpen = () => {
    setEditPost(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdition = (post) => {
    handleClickOpen();
    setEditPost(post);
    console.log({ post });
  };

  if (pageLoading) {
    return null;
  }

  return (
    <Grid container spacing={3}>
      {/* Posts */}
      <Media
        data={data}
        loading={loading}
        open={open}
        handleEdition={handleEdition}
      />
      {/* button */}
      <DialogEditor
        fetchPost={fetchPost}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        editPost={editPost}
      />
    </Grid>
  );
}

Editor.Layout = AppLayout;
