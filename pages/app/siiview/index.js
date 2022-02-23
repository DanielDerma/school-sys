import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";
import { Grid } from "@mui/material";

import { AppLayout, Table } from "../../../components";
export default function SiiView() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const labelsAccount = ["Matemática", "Español", "Fisica"];

  const additionalLabels = [
    "Materia",
    "Semestre",
    "U1",
    "U2",
    "U3",
    "U4",
    "U5",
    "U6",
  ];

  const fetchRows = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/report-card");
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

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={9}>
        <Table
          loading={loading}
          labels={labelsAccount}
          additionalLabels={additionalLabels}
          data={data}
          isSiiView
        />
      </Grid>
    </Grid>
  );
}
SiiView.Layout = AppLayout;
