import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";
import { Grid, Pagination } from "@mui/material";
import { getPostFeed } from "../../../utils/firebaseStorage";
import {
  AppLayout,
  FakeData,
  FeaturedPost,
  DEditor,
} from "../../../components";

const Media = ({ loading, data }) => {
  if (loading) {
    return <FakeData />;
  }
  return (
    <>
      {data.map((post, id) => (
        <FeaturedPost key={id} post={post} loading={loading} />
      ))}
    </>
  );
};

export default function Editor() {
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);
  const [error, setError] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
    if (currentUser) {
      fetchPost();
    }
  }, [currentUser, router]);

  const fetchPost = async () => {
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
  return (
    <Grid container spacing={3}>
      {/* Posts */}
      <Media data={data} loading={loading} />
      {/* button */}
      <DEditor />
    </Grid>
  );
}

Editor.Layout = AppLayout;
