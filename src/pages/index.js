import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <div></div>;
}
