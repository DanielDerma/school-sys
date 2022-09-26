import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

function FeaturedPost({ post, editPost }) {
  console.log({ post });
  const handleCardArea = () => {
    editPost(post);
  };

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="button" onClick={handleCardArea}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.rawContent}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              height: 200,
              display: { xs: "none", sm: "block" },
            }}
            image={post.img}
            alt={post.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
