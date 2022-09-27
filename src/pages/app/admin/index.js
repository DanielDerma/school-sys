import { useState, useEffect } from "react";
import Head from "next/head";
import { AppLayout } from "../../../components";
import { getCollectionUser } from "../../../utils/firebaseStorage";
import useAuthPage from "../../../hooks/useAuthPage";
import DataTable from "../../../components/admin";

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

  const { currentUser, pageLoading } = useAuthPage("Admin");

  useEffect(() => {
    if (currentUser) {
      handleData(tabsAdmin[0].hash);
    }
  }, [currentUser]);

  if (pageLoading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DataTable
        tabsAdmin={tabsAdmin}
        data={data}
        loading={loading}
        change={(e) => handleData(e)}
        isSIIMain={false}
      />
    </>
  );
}

Admin.Layout = AppLayout;
