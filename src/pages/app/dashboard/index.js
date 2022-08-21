import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid, Paper, Skeleton } from "@mui/material";
import { dataFormatted } from "../../../utils/dashboardFormat";

import { useAuth } from "../../../contexts/AuthContext";
import { getCollectionClass } from "../../../utils/firebaseStorage";

import {
  AppLayout,
  ChartBar,
  ChartNumbers,
  ChartBarControls,
  ChartRadar,
  ChartRadarControls,
  CharN,
} from "../../../components";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [data, setData] = useState([]);
  const [dataTeacher, setDataTeacher] = useState({});
  const [radarParams, setRadarParams] = useState([]);

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }, [currentUser, router]);

  useEffect(() => {
    console.log({ q });
    if (q && currentUser) {
      handleData(q);
    }
  }, [q, currentUser]);

  const handleData = async (type) => {
    setLoading(true);
    try {
      const data = await getCollectionClass(type);
      console.log({ data });
      setLoading(false);
      setData(data.resultSort);
      setDataTeacher(data.teacher);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  if (!loading && Object.keys(data).length > 0) {
    return null;
  }
  const chart = dataFormatted(data, radarParams);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={4} sx={{ p: 0, m: 0 }}>
        <CharN data={dataTeacher} loading={loading} />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <ChartNumbers loading={loading} meanFormatted={chart.mean} />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <ChartBarControls
          fetchDashboard={(e) => {
            setQ(e);
          }}
        />
      </Grid>
      {/* //fix */}
      <Grid item xs={12} md={4} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 450,
          }}
        >
          {loading ? (
            <Skeleton sx={{ height: "100%" }} />
          ) : (
            <ChartBar data={chart.filterDataBar} />
          )}
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
            loading={loading}
            data={chart.list}
            changeRadarParams={(response) => setRadarParams(response)}
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
          {loading ? (
            <Skeleton sx={{ width: "50%" }} />
          ) : (
            <ChartRadar data={chart.polarUser} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

Dashboard.Layout = AppLayout;
