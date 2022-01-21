import { useEffect } from "react";
import Layout from "../../../components/AppLayout";
import Head from "next/head";

import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import DataTable from "../../../components/DataTable";
import { Grid, Typography } from "@mui/material";

const tabsAdmin = [
  {
    title: "Admin",
    hash: "admin",
  },
  {
    title: "profes",
    hash: "instructor",
  },
  {
    title: "alum",
    hash: "student",
  },
];

export default function Admin() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }, [currentUser, router]);

  return (
    <Grid container spacing={3}>
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid item xs={12}>
        <DataTable />
      </Grid>
    </Grid>
  );
}

Admin.Layout = Layout;
