import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Stepper from "./Stepper";
import { useEffect } from "react";
import { getParcialFeed, getPostCount } from "../../utils/firebaseStorage";
import { mainFeaturedPost, sections, sidebar } from "../../lib/Posts/data";
import { dataFormatted } from "../../utils";
import Copyright from "../Copyright";

const theme = createTheme();

export default function Blog() {
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [loadingPost, setLoadingPost] = React.useState(true);

  useEffect(() => {
    handleCount();
  }, []); //  eslint-disable-line react-hooks/exhaustive-deps

  const handleCount = () => {
    setLoading(true);
    getPostCount()
      .then((res) => {
        setCount(res);
        setLoading(false);
        handleParcialPostFeed();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleParcialPostFeed = (typo) => {
    console.log("typo", typo);
    setLoadingPost(true);
    getParcialFeed(typo, data)
      .then((res) => {
        setData(res);
        setLoadingPost(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingPost(false);
      });
  };

  const dataDoc = React.useMemo(
    () =>
      data.map((doc) => {
        const { date: dateForFormatted, ...rest } = doc.data();
        const dateFormatted = dataFormatted(dateForFormatted);

        return { date: dateFormatted, ...rest };
      }),
    [data]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Prepa 7" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {!loading && (
            <>
              <Grid container spacing={4}>
                {dataDoc.map((post) => (
                  <FeaturedPost
                    key={post.title}
                    post={post}
                    loading={loadingPost}
                  />
                ))}
              </Grid>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                <Stepper count={count} handleData={handleParcialPostFeed} />
              </Grid>
            </>
          )}

          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Lorem impsun" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
        <Copyright
          align="center"
          sx={{
            my: 3,
          }}
        />
      </Container>
    </ThemeProvider>
  );
}
