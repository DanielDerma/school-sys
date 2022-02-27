import { useState, useEffect } from "react";
import Head from "next/head";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/AuthContext";
import { DataTable, AppLayout } from "../../../components";
import { getCollectionUser } from "../../../utils/firebaseStorage";

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
    if (currentUser) {
      handleData("student");
    }
  }, [currentUser]);

  const handleData = async (type) => {
    console.log("type", type);
    setLoading(true);
    try {
      const response = await getCollectionUser(type);
      setLoading(false);
      setData(response);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  console.log(data);
  return (
    <Grid container spacing={3}>
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid item xs={12}>
        <DataTable
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
