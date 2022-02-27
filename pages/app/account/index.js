import { useEffect, useState } from "react";
import { Grid, Paper, Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";
import { getInfoAccount } from "../../../utils/firebaseStorage";
import { Table, AppLayout } from "../../../components";

const Account = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const labelsAccount = ["Nombre", "Apellido", "Edad", "Número", "Correo"];

  useEffect(() => {
    !currentUser && router.replace("/log/login");
    if (currentUser) {
      setLoading(true);
      getInfoAccount(currentUser.uid)
        .then((info) => {
          setLoading(false);
          setData(info);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }, [currentUser, router]);

  function handleSignOut() {
    logout();
  }

  function goHome() {
    router.push("/home");
  }
  console.log(data);
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
              fontSize: 80,
            }}
          >
            DD
          </Avatar>
        </Paper>
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Table loading={loading} data={data} labels={labelsAccount} />
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

Account.Layout = AppLayout;

export default Account;
