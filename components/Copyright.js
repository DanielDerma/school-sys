import { Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
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
