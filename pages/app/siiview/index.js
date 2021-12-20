import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/AppLayout";
import { useAuth } from "../../../contexts/AuthContext";

export default function SiiView() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  console.log(currentUser);

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }),
    [currentUser];
  return <>soy SiiViewk itnki</>;
}
SiiView.Layout = Layout;
