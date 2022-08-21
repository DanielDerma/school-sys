import React from "react";
import { useRouter } from "next/router";

export default function index({}) {
  return <div>index</div>;
}

export async function getServerSideProps(context) {
  const { params, res } = context;
  const { slug } = params;
}
