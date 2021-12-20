import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Layout from "../../../components/AppLayout";
import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useAuth } from "../../../contexts/AuthContext";

import TableSet from "../../../components/Table";
import { useRouter } from "next/router";
function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const Account = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  console.log(currentUser);

  useEffect(() => {
    !currentUser && router.replace("/log/login");
  }),
    [currentUser];
  const handleSignOut = () => {
    logout();
  };

  return (
    <>
      <Grid container spacing={3}>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                width: 208,
                height: 208,
                fontSize: 160,
              }}
            >
              N
            </Avatar>
          </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <TableSet rows={rows} />
        </Grid>
        <Button onClick={handleSignOut} color="error" variant="contained">
          Sign Out
        </Button>
      </Grid>
    </>
  );
};

Account.Layout = Layout;

export default Account;
