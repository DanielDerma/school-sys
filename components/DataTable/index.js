import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ListItem,
  Paper,
  TextField,
  Toolbar,
} from "@mui/material";
import Table from "./Table";
import Search from "./Search";
import { students, infoPropsStudent } from "../../lib/DataTest";

import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import { List } from "immutable";

export default function DataTable() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  console.count("DataTable");
  console.log(data);
  // console.log(data)

  useEffect(() => {
    !currentUser && router.replace("/log/login");
    if (currentUser) {
      handleData("admin");
    }
  }, [currentUser]);

  // useEffect(() => {
  //   console.log(q);
  // }, [q]);

  const handleQ = (type) => {
    console.log(type);
  };

  const handleData = async (type) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/${type}`);
      const result = await response.json();
      setLoading(false);
      setData(result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const EnhancedTableMenu = () => {
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Search changeFilter={(result) => setQ(result)} />
        <FormDialog />
      </Toolbar>
    );
  };

  const EnhancedTableTabs = () => {
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Button variant="outlined" onClick={() => handleData("admin")}>
          admin
        </Button>
        <Button variant="outlined" onClick={() => handleData("instructor")}>
          profes
        </Button>
        <Button variant="outlined" onClick={() => handleData("student")}>
          alum
        </Button>
      </Toolbar>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableTabs />
        <EnhancedTableMenu />
        <Table
          data={data}
          infoProps={infoPropsStudent}
          isSiiMain={false}
          loading={loading}
        />
      </Paper>
    </Box>
  );
}

function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Agregar Elementos
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
