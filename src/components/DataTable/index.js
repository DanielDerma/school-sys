import { useState } from "react";
import { Box, Paper } from "@mui/material";

import Table from "./Table";
import { infoPropsStudent } from "../../lib/DataTest";
import FormDialog from "./FormDialog";
import EnhancedTableTabs from "./EnhancedTableTabs";
import { DETable, DTable } from "../";

export default function DataTable({ tabsAdmin, data, loading, change }) {
  const [query, setQuery] = useState("student");
  const [openEditor, setOpenEditor] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [preview, setPreview] = useState(undefined);

  const handleClickOpenEditor = (p) => {
    setOpenEditor(true);
    setPreview(p);
  };

  const handleCloseEditor = () => {
    setOpenEditor(false);
  };

  const handleClickOpenDelete = (p) => {
    setOpenDelete(true);
    setPreview(p);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormDialog handleClickOpenEditor={handleClickOpenEditor} />
      <DTable
        open={openEditor}
        handleClose={handleCloseEditor}
        query={query}
        preview={preview}
        change={change}
      />
      <DETable
        query={query}
        change={change}
        open={openDelete}
        handleClose={handleCloseDelete}
        preview={preview}
      />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableTabs
          query={query}
          tabsAdmin={tabsAdmin}
          changeQuery={(value) => setQuery(value)}
          change={change}
        />
        <Table
          handleClickOpenEditor={handleClickOpenEditor}
          handleClickOpenDelete={handleClickOpenDelete}
          infoProps={infoPropsStudent}
          isSiiMain={false}
          loading={loading}
          change={change}
          data={data}
        />
      </Paper>
    </Box>
  );
}
