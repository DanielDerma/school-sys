import {
  Skeleton,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

const FakeData = () => (
  <>
    <Grid item xs={12} md={6}>
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
    <Grid item xs={12} md={6}>
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
    <Grid item xs={12} md={6}>
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
    <Grid item xs={12} md={6}>
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
  </>
);
export default FakeData;
