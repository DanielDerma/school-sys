import { useState, useEffect } from "react";
import Head from "next/head";
import { Grid } from "@mui/material";
import { DataTable, AppLayout } from "../../../components";
import { getCollectionUser } from "../../../utils/firebaseStorage";
import useAuthPage from "../../../hooks/useAuthPage";

const tabsAdmin = [
  {
    hash: "admin",
    title: "Administrador",
  },
  {
    hash: "director",
    title: "Director",
  },
  {
    hash: "editor",
    title: "Editor",
  },
  {
    hash: "instructor",
    title: "Profesor",
  },
  {
    hash: "student",
    title: "Estudiante",
  },
];

export default function Admin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleData = async (type) => {
    setLoading(true);
    try {
      const response = await getCollectionUser(type);
      setLoading(false);
      setData(response);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const user = useAuthPage();

  useEffect(() => {
    if (user) {
      handleData("student");
    }
  }, [user]);

  return (
    <Grid container spacing={3}>
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid item xs={12}>
        <DataTable
          admin
          tabsAdmin={tabsAdmin}
          data={data}
          loading={loading}
          change={(e) => handleData(e)}
        />
      </Grid>
    </Grid>
  );
}

Admin.Layout = AppLayout;
