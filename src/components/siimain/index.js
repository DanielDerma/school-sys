import { useState } from "react";
import { Box, Button, Paper, TableCell } from "@mui/material";

import Table from "../DataTable/Table";
import { infoPropsInstructor } from "../../lib/DataTest";
import FormDialog from "../DataTable/FormDialog";
import EnhancedTableTabs from "../DataTable/EnhancedTableTabs";

import AddOrEdit from "./Dialog/AddOrEdit";
import Delete from "./Dialog/Delete";

import React from "react";

export default function DataTable({ tabsAdmin, data, change, nUnit, loading }) {
  const [query, setQuery] = useState(tabsAdmin[0].hash);
  const [openEditor, setOpenEditor] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [preview, setPreview] = useState(undefined);

  const handleClickOpenEditor = (p) => {
    setOpenEditor(true);
    setPreview(p);
  };

  const handleCloseEditor = () => {
    setPreview(undefined);
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
      {!loading && (
        <>
          <AddOrEdit
            open={openEditor}
            nUnit={nUnit}
            handleClose={handleCloseEditor}
            query={query}
            preview={preview}
            change={change}
          />
          <Delete
            query={query}
            change={change}
            open={openDelete}
            handleClose={handleCloseDelete}
            preview={preview}
          />
        </>
      )}

      <FormDialog handleClickOpenEditor={handleClickOpenEditor} />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableTabs
          query={query}
          tabsAdmin={tabsAdmin}
          changeQuery={(value) => setQuery(value)}
          change={change}
        />
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Table
            handleClickOpenEditor={handleClickOpenEditor}
            handleClickOpenDelete={handleClickOpenDelete}
            infoProps={infoPropsInstructor}
            change={change}
            data={data}
            isSIIMain={true}
          />
        )}
      </Paper>
    </Box>
  );
}
