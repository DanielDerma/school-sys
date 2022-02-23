import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";

import { AppLayout, DataTable } from "../../../components";

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
SiiMain.Layout = AppLayout;
