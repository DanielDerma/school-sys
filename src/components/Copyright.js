import { Link, Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ pb: 0, mb: 0 }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://industryconect.com.mx/"
        target="_blank"
      >
        Industry Conect
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
