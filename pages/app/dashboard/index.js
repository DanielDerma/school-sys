import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Layout from "../../../components/AppLayout";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";
import ChartBar from "../../../components/Chart/ChartBar";
import ChartNumbers from "../../../components/Chart/ChartNumbers";
import ChartBarControls from "../../../components/Chart/ChartBarControls";
import ChartRadarControls from "../../../components/Chart/ChartRadarControls";
import ChartRadar from "../../../components/Chart/ChartRadar";
import { Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import IconButton from "@mui/material/IconButton";

const SectionRatio = ({ meanFormatted }) => {
  return (
    <>
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            height: "100%",
          }}
        >
          <Typography component="h2">
            Maestra: Rocio Catalina Nevarez Gonzalez
          </Typography>
          <Typography component="h2">Número: 639 115 10 67</Typography>
          <IconButton>
            <AlternateEmailIcon />
          </IconButton>
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
          <ChartNumbers
            title={"Promedio del Grupo"}
            meanFormatted={meanFormatted}
          />
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
    console.count();
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
    const filterDataBar = data.map((e) => {
      const prom =
        Math.floor(
          ((e.math +
            e.chinese +
            e.english +
            e.geography +
            e.history +
            e.physics) /
            6) *
            100
        ) / 100;

      return {
        // name: e.id,
        name: e.first_name + " " + e.last_name,
        Promedio: prom,
      };
    });

    const mean = Object.keys(filterDataBar).reduce(function (previous, key) {
      return previous + filterDataBar[key].Promedio;
    }, 0);
    const meanFormatted = Math.floor((mean / filterDataBar.length) * 100) / 100;

    const list = data.map((e) => {
      return {
        id: e.id,
        name: `${e.first_name} ${e.last_name}`,
      };
    });

    const newUser = Object.keys(data[7]).splice(8, 13);

    const PolarUser = newUser.map((e) => {
      if (radarParms.length > 0) {
        return {
          subject: e,
          A: radarParms[0] ? data[radarParms[0] - 1][e] : null,
          B: radarParms[1] ? data[radarParms[1] - 1][e] : null,
          fullMark: 100,
        };
      } else {
        return null;
      }
    });

    const radarNameParams = [
      {
        name: data[radarParms[0] - 1]
          ? data[radarParms[0] - 1].first_name +
            " " +
            data[radarParms[0] - 1].last_name
          : null,
      },
      {
        name: data[radarParms[1] - 1]
          ? data[radarParms[1] - 1].first_name +
            " " +
            data[radarParms[1] - 1].last_name
          : null,
      },
    ];

    return (
      <Grid container spacing={3}>
        <SectionRatio meanFormatted={meanFormatted} />
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
            <ChartBar data={filterDataBar} />
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
              data={list}
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
            <ChartRadar data={PolarUser} nameParams={radarNameParams} />
          </Paper>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
}

Dasboard.Layout = Layout;
