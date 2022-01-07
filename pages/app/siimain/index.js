import { useEffect } from "react";
import Layout from "../../../components/AppLayout";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";
import DataTable from "../../../components/DataTable";

export default function SiiMain() {
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    !currentUser && router.replace("/log/login");
  });
  return (
    <>
      <DataTable />
    </>
  );
}
SiiMain.Layout = Layout;
