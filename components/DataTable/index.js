import { useEffect, useState } from "react";
import { Box, Button, Paper, Toolbar } from "@mui/material";
import Table from "./Table";
import Search from "./Search";
import { students, infoPropsStudent } from "../../lib/DataTest";

import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";

export default function Index() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    !currentUser && router.replace("/log/login");
    if (currentUser) {
      handleData("admin");
    }
  }, [currentUser, router]);

  const handleData = async (type) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/${type}`);
      const data = await response.json();
      setLoading(false);
      setData(data);
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
        <Search />
        <Button variant="outlined" onClick={() => setLoading(!loading)}>
          Agregar Elementos
        </Button>
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
