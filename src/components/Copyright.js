import { Link, Typography } from "@mui/material";

export default function Copyright({ sx, align }) {
  return (
    <Typography align={align} variant="body2" color="text.secondary" sx={sx}>
      Copyright ©
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
