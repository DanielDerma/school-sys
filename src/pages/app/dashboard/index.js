import { useMemo, useState } from "react";
import { Grid, Paper, Skeleton } from "@mui/material";
import { dataFormatted, dataForRadar } from "../../../utils/dashboardFormat";
import { GridController } from "../../../components";
import useAuthPage from "../../../hooks/useAuthPage";
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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataTeacher, setDataTeacher] = useState({});
  const [radarParams, setRadarParams] = useState([]);

  const { currentUser, pageLoading } = useAuthPage("Dashboard");

  const handleData = async (type) => {
    setLoading(true);
    try {
      if (currentUser) {
        const data = await getCollectionClass(type);
        console.log({ data });
        setData(data.resultSort);
        setDataTeacher(data.teacher);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const chart = useMemo(() => dataFormatted(data), [data]);
  const radar = useMemo(() => dataForRadar(data, radarParams), [radarParams]); // eslint-disable-line react-hooks/exhaustive-deps

  if (pageLoading) {
    return <></>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={4} sx={{ p: 0, m: 0 }}>
        <CharN data={dataTeacher} loading={loading} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <ChartNumbers loading={loading} meanFormatted={chart?.mean} />
      </Grid>
      <GridController item xs={12} lg={4}>
        <ChartBarControls handleData={handleData} />
      </GridController>
      {/* //fix */}
      <Grid item xs={12} lg={12}>
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

      <Grid item xs={12} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
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
      <Grid item xs={12} lg={8}>
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
            <ChartRadar data={radar.polarUser} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

Dashboard.Layout = AppLayout;
