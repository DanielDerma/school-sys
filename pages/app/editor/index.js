import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";
import { featuredPosts } from "../../../lib/Posts/data"; //fake
import { Grid, Pagination } from "@mui/material";

import { AppLayout, FeaturedPost, DEditor } from "../../../components";

const Media = () => {
  // loading prop FeaturedPost
  return (
    <>
      {featuredPosts.map((post, id) => (
        <FeaturedPost key={id} post={post} />
      ))}
      <Pagination count={10} sx={{ pt: 4, mx: "auto" }} />
    </>
  );
};

export default function Editor() {
  const { currentUser } = useAuth();
  const [uriImg, setUriImg] = useState("");
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }, [currentUser, router]);

  return (
    <Grid container spacing={3}>
      {/* Posts */}
      <Media />
      {/* button */}
      <DEditor />
    </Grid>
  );
}
// changeInfo={(info) => setInfo(info)}
Editor.Layout = AppLayout;
