import { useEffect } from "react";
import Layout from "../../../components/AppLayout";
import FeaturedPost from "../../../components/FeaturedPost";
import Dialog from "../../../components/Dialog";
import { Grid } from "@mui/material";
import { featuredPosts } from "../../../lib/Posts/data";

import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";

const Media = () => {
  return (
    <>
      {featuredPosts.map((post) => (
        <FeaturedPost key={post.title} post={post} />
      ))}
    </>
  );
};

const Posts = () => {
  return (
    <Grid container spacing={3}>
      {/* Posts */}
      <Media />
      {/* button */}
      <Dialog />
    </Grid>
  );
};

export default function Editor() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }, [currentUser]);

  return (
    <>
      <Posts />
    </>
  );
}
Editor.Layout = Layout;
