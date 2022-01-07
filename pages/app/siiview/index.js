import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/AppLayout";
import { useAuth } from "../../../contexts/AuthContext";
import { Grid } from "@mui/material";
import TableSet from "../../../components/Table";

export default function SiiView() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }),
    [currentUser];
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={9}>
        <TableSet />
      </Grid>
    </Grid>
  );
}
SiiView.Layout = Layout;
