import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import {
  getCollectionUser,
  getCollectionClass,
  getInfoAccount,
} from "../../../utils/firebaseStorage";
import { AppLayout } from "../../../components";
import DataTable from "../../../components/siimain";
import useAuthPage from "../../../hooks/useAuthPage";

export default function SiiMain() {
  const [data, setData] = useState([]);
  const [tabsAdmin, setTabsAdmin] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      handleData(currentUser.email);
    }
  }, [currentUser]);

  const { currentUser, pageLoading } = useAuthPage("SIIMain");

  const handleData = async (type) => {
    setLoading(true);
    try {
      const { refSubject } = await getInfoAccount(type);
      console.log({ refSubject });
      const { resultSort, tabsAdmin } = await getCollectionClass(refSubject[0]);
      setData(resultSort);
      setTabsAdmin(refSubject);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  if (data.length === 0 || pageLoading) {
    return null;
  }

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
