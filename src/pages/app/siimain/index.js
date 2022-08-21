import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import {
  getCollectionUser,
  getCollectionClass,
} from "../../../utils/firebaseStorage";
import { AppLayout, DataTable } from "../../../components";

const tabsAdmin = [
  {
    title: "Matematicas 1",
    hash: "admin",
  },
  {
    title: "Matematicas 2",
    hash: "instructor",
  },
  {
    title: "Matematicas 3",
    hash: "student",
  },
];

export default function SiiMain() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
    if (currentUser) {
      handleData("student");
      getCollectionClass("AGO-DIC-2021_electromechanical_physical_1_A").then();
    }
  }, []);

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

  return (
    <>
      <DataTable
        tabsAdmin={tabsAdmin}
        data={data}
        loading={loading}
        change={(e) => handleData(e)}
        isSIIMain
      />
    </>
  );
}
SiiMain.Layout = AppLayout;
