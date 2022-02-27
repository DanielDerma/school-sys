import { useEffect, useState } from "react";
import { Box, Button, Paper, Toolbar } from "@mui/material";

import Table from "./Table";
import Search from "./Search";
import { infoPropsStudent } from "../../lib/DataTest";
import { DTable } from "../../components";

export default function DataTable({ tabsAdmin, data, loading, change }) {
  const [focus, setFocus] = useState("");
  const EnhancedTableMenu = () => {
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Search />
        <FormDialog />
      </Toolbar>
    );
  };

  const handleClickTabs = (e) => {
    if (focus !== e) {
      setFocus(e);
      change(e);
    }
  };

  const EnhancedTableTabs = () => {
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        {tabsAdmin.map((tab) => (
          <Button
            variant="outlined"
            onClick={() => handleClickTabs(tab.hash)}
            key={tab.hash}
          >
            {tab.title}
          </Button>
        ))}
      </Toolbar>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableTabs />
        <EnhancedTableMenu />
        <Table
          infoProps={infoPropsStudent}
          isSiiMain={false}
          loading={loading}
          data={data}
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
      <DTable
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
    </div>
  );
}
