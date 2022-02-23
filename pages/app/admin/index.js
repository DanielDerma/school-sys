import { useEffect } from "react";
import Head from "next/head";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";
import { DataTable, AppLayout } from "../../../components";

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

Admin.Layout = AppLayout;
