import { Box, Button, Paper, Toolbar } from "@mui/material";
import Table from "./Table";
import Search from "./Search";

import {
  students,
  directs,
  instructors,
  admins,
  infoPropsStudent,
  infoPropsInstructor,
} from "../../lib/DataTest";

export default function Index() {
  const EnhancedTableMenu = () => {
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Search />
        <Button variant="outlined">Agregar Elementos</Button>
      </Toolbar>
    );
  };

  const EnhancedTableTabs = (props) => {
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Button variant="outlined">Direc</Button>
        <Button variant="outlined">Profes</Button>
        <Button variant="outlined">Alum</Button>
      </Toolbar>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableTabs />
        <EnhancedTableMenu />
        <Table data={students} infoProps={infoPropsStudent} isSiiMain={false} />
      </Paper>
    </Box>
  );
}
