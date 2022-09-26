import {
  Skeleton,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";

const FakeData = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post) => (
        <Grid item xs={12} md={6} key={post}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  <Skeleton />
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  <Skeleton width="10%" />
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  <Skeleton />
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  <Skeleton width="50%" />
                </Typography>
              </CardContent>
              <Skeleton
                sx={{
                  height: 190,
                  width: 160,
                  display: { xs: "none", sm: "block" },
                }}
                animation="wave"
                variant="rectangular"
              />
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </>
  );
};
export default FakeData;
