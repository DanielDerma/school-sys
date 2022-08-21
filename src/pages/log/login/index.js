import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import Link from "next/link";
import Layout from "../../../components/LogLayout";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      await login(data.get("email").toLowerCase(), data.get("password"));
      router.push("/app/account");
    } catch {
      setError("Failed to log in");
    }
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/home" variant="body2" passHref>
                <Button variant="outlined" color="secondary" size="small">
                  Ir a Inicio
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                onClick={() => alert("hola")}
              >
                aspirantes
              </Button>
            </Grid>
          </Grid>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Usuario o Contraseña incorrecta
            </Alert>
          )}
          <Alert severity="info" sx={{ mt: 2 }}>
            Acude a Dpto. Desarrollo Académico por tu correo de acceso y
            contraseña.
          </Alert>

          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Grid>
  );
}
Login.Layout = Layout;
