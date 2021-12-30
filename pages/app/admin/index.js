import { useEffect } from "react";
import Layout from "../../../components/AppLayout";
import Head from "next/head";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import Table from "../../../components/DataTable";
import { Button } from "@mui/material";

import {
  students,
  directs,
  instructors,
  admins,
  infoPropsStudent,
  infoPropsInstructor,
} from "../../../lib/DataTest";

export default function Admin() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }, [currentUser]);

  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Table data={students} infoProps={infoPropsStudent} isSiiMain={false} />
    </>
  );
}

Admin.Layout = Layout;
