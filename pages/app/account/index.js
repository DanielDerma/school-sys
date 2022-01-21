import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Layout from "../../../components/AppLayout";
import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useAuth } from "../../../contexts/AuthContext";
import TableSet from "../../../components/Table";
import { useRouter } from "next/router";

const Account = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const labelsAccount = [
    "ID",
    "Primer Nombre",
    "Apellidos",
    "Genero",
    "Edad",
    "Número",
    "Correo",
    "Contraseña",
  ];

  const fetchRows = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/only-student");
      const data = await response.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    !currentUser && router.replace("/log/login");
    if (currentUser) {
      fetchRows();
    }
  }, [currentUser, router]);

  function handleSignOut() {
    logout();
  }

  function goHome() {
    router.push("/home");
  }
  return (
    <Grid container spacing={3} justifyContent="center">
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              width: 208,
              height: 208,
              fontSize: 160,
            }}
          >
            N
          </Avatar>
        </Paper>
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <TableSet loading={loading} data={data} labels={labelsAccount} />
      </Grid>
      <Button
        color="secondary"
        variant="contained"
        onClick={goHome}
        sx={{ mt: 4 }}
      >
        Ir a Pagina Principal
      </Button>
      <Button
        onClick={handleSignOut}
        color="error"
        variant="contained"
        sx={{ mt: 4, ml: 2 }}
      >
        Cerrar Sesion
      </Button>
    </Grid>
  );
};

Account.Layout = Layout;

export default Account;
