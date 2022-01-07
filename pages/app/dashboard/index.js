import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Table from "../../../components/DataTable";
import Layout from "../../../components/AppLayout";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";
import ChartBar from "../../../components/Chart/ChartBar";
import ChartNumbers from "../../../components/Chart/ChartNumbers";
import ChartBarControls from "../../../components/Chart/ChartBarControls";
import ChartRadarControls from "../../../components/Chart/ChartRadarControls";
import ChartRadar from "../../../components/Chart/ChartRadar";

export default function Dasboard() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }),
    [currentUser];

  const MedicionX = () => {
    return (
      <>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              // height: 600,
            }}
          >
            <ChartNumbers />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              // height: 600,
            }}
          >
            <ChartNumbers />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              // height: 600,
            }}
          >
            <ChartBarControls />
          </Paper>
        </Grid>
      </>
    );
  };

  return (
    <Grid container spacing={3}>
      <MedicionX />
      <Grid item xs={12} md={4} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 450,
          }}
        >
          <ChartBar />
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 600,
          }}
        >
          <ChartRadarControls />
        </Paper>
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={8}>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 600,
            mx: "auto",
          }}
        >
          <ChartRadar />
        </Paper>
      </Grid>
    </Grid>
  );
}
Dasboard.Layout = Layout;
