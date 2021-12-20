import { useEffect } from "react";
import Layout from "../../../components/AppLayout";
import Head from "next/head";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/router";

export default function Admin() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  console.log(currentUser);

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }),
    [currentUser];

  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      soy admin itnki
    </>
  );
}
Admin.Layout = Layout;
