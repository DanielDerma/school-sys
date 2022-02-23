import PropTypes from "prop-types";

import {
  Skeleton,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

function FeaturedPost(props) {
  const { post, loading } = props;
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {loading ? <Skeleton /> : post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {loading ? <Skeleton width="10%" /> : post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {loading ? <Skeleton /> : post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {loading ? <Skeleton width="50%" /> : "Continue reading..."}
            </Typography>
          </CardContent>
          {loading ? (
            <Skeleton
              sx={{
                height: 190,
                width: 160,
                display: { xs: "none", sm: "block" },
              }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: "none", sm: "block" } }}
              image={post.image}
              alt={post.imageLabel}
            />
          )}
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
