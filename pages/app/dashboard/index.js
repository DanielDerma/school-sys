import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Table from "../../../components/DataTable";
import Layout from "../../../components/AppLayout";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";

export default function Dasboard() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  console.log(currentUser);

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }),
    [currentUser];

  return (
    <>
      <Grid container spacing={3}>
        <Table />
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: "3em",
            right: "3em",
          }}
        >
          <AddIcon />
        </Fab>
      </Grid>
    </>
  );
}
Dasboard.Layout = Layout;
