import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";
import { Grid } from "@mui/material";
import { getCourses } from "../../../utils/firebaseStorage";
import { AppLayout, Table } from "../../../components";
import useAuthPage from "../../../hooks/useAuthPage";

export default function SiiView() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const labelsAccount = ["Matemática", "Español", "Fisica"];

  const additionalLabels = ["Materia", "U1", "U2", "U3", "U4", "U5", "U6"];

  const user = useAuthPage();

  useEffect(() => {
    if (user) {
      setLoading(true);
      getCourses(user.email)
        .then((data) => {
          setLoading(false);
          setData(data);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  }, [user]);

  if (loading) {
    return null;
  }

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
