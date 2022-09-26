import { useEffect, useState } from "react";
import { getCourses } from "../../../utils/firebaseStorage";
import { AppLayout, Table } from "../../../components";
import useAuthPage from "../../../hooks/useAuthPage";
import { Grid } from "@mui/material";

export default function SiiView() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const labelsAccount = ["Matemática", "Español", "Fisica"];

  const additionalLabels = ["Materia", "U1", "U2", "U3", "U4", "U5", "U6"];

  const { currentUser, pageLoading } = useAuthPage("SIIView");

  useEffect(() => {
    if (currentUser) {
      setLoading(true);
      getCourses(currentUser.email)
        .then((data) => {
          setLoading(false);
          setData(data);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  }, [currentUser]);

  if (pageLoading) {
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
