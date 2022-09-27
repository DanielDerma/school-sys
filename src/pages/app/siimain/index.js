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
import { courseReadable } from "../../../utils";

export default function SiiMain() {
  const [data, setData] = useState([]);
  const [tabsAdmin, setTabsAdmin] = useState("");
  const [nUnit, setNUnit] = useState(0);
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
      console.log("refSubject:", refSubject);
      const { resultSort, teacher } = await getCollectionClass(refSubject[0]);
      const RefSubjectObj = refSubject.map((elem) => ({
        title: courseReadable(elem),
        hash: elem,
      }));
      setTabsAdmin(RefSubjectObj);
      setData(resultSort);
      setNUnit(teacher.nUnit);
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
        nUnit={nUnit}
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
