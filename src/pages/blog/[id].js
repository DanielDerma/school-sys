import { Box, Container, Typography } from "@mui/material";

import MainFeaturedPost from "../../components/home/MainFeaturedPost";
import Header from "../../components/home/Header";
import { sections } from "../../lib/Posts/data";
import { firestore } from "../../services/admin";

export default function Index(props) {
  const { content, ...featuredPost } = props;
  return (
    <Container maxWidth="lg">
      <Header title="Prepa 7" sections={sections} />
      <MainFeaturedPost post={featuredPost} />
      <Typography
        variant="h6"
        gutterBottom
        dangerouslySetInnerHTML={{ __html: content }}
      ></Typography>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  return firestore
    .collection("posts")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      const { date } = data;

      const props = {
        ...data,
        date: +date.toDate(),
      };
      return { props };
    })
    .catch(() => {
      return {
        props: {
          data: {},
        },
      };
    });
}
