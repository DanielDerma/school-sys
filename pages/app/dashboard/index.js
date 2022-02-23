import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid, Paper } from "@mui/material";
import { dataFormatted } from "../../../utils/dashboardFormat";
import { useAuth } from "../../../contexts/AuthContext";

import {
  AppLayout,
  ChartBar,
  ChartNumbers,
  ChartBarControls,
  ChartRadar,
  ChartRadarControls,
  CharN,
} from "../../../components";

const SectionRatio = ({ meanFormatted }) => {
  return (
    <>
      <CharN />
      <ChartNumbers
        title={"Promedio del Grupo"}
        meanFormatted={meanFormatted}
      />
      <ChartBarControls />
    </>
  );
};

export default function Dasboard() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [radarParms, setRadarParms] = useState([]);
  useEffect(() => {
    !currentUser && router.replace("/log/login");
    if (currentUser) {
      handleData("student");
    }
  }, [currentUser, router]);

  const handleData = async (type) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/${type}`);
      const data = await response.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (!loading && data.length > 0) {
    const chart = dataFormatted(data, radarParms);
    return (
      <Grid container spacing={3}>
        <SectionRatio meanFormatted={chart.meanFormatted} />
        {/* //fix */}
        <Grid item xs={12} md={4} lg={12}>
          <Paper
            sx={{
              pt: 2,
              pr: 2,
              pb: 2,
              pl: 0,
              display: "flex",
              flexDirection: "column",
              height: 450,
            }}
          >
            <ChartBar data={chart.filterDataBar} />
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
            <ChartRadarControls
              data={chart.list}
              changeRadarParms={(radarParms) => setRadarParms(radarParms)}
            />
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
            <ChartRadar
              data={chart.PolarUser}
              nameParams={chart.radarNameParams}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
}

Dasboard.Layout = AppLayout;
