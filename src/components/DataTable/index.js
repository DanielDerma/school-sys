// import { useState } from "react";
// import { Box, Paper } from "@mui/material";

// import Table from "./Table";
// import { infoPropsInstructor, infoPropsStudent } from "../../lib/DataTest";
// import FormDialog from "./FormDialog";
// import EnhancedTableTabs from "./EnhancedTableTabs";

// import AddOrEdit from "../admin/Dialog/AddOrEdit";
// import Delete from "../Dialog/Delete";

// export default function DataTable({
//   tabsAdmin,
//   data,
//   nUnit,
//   loading,
//   change,
//   isSIIMain = true,
// }) {
//   const [query, setQuery] = useState(isSIIMain ? tabsAdmin[0].hash : "student");
//   const [openEditor, setOpenEditor] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [preview, setPreview] = useState(undefined);

//   const [openSchool, setOpenSchool] = useState(false);
//   const [previewSchool, setPreviewSchool] = useState(undefined);

//   const handleClickOpenEditor = (p) => {
//     setOpenEditor(true);
//     setPreview(p);
//   };

//   const handleCloseEditor = () => {
//     setPreview(undefined);
//     setOpenEditor(false);
//   };

//   const handleClickOpenDelete = (p) => {
//     setOpenDelete(true);
//     setPreview(p);
//   };

//   const handleCloseDelete = () => {
//     setOpenDelete(false);
//   };

//   const handleClickOpenRanks = (p) => {
//     setOpenSchool(true);
//     setPreviewSchool(p);
//   };

//   const handleCloseRanks = () => {
//     setOpenSchool(false);
//     setPreviewSchool(undefined);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <AddOrEdit
//         nUnit={nUnit}
//         isSIIMain={isSIIMain}
//         open={openEditor}
//         handleClose={handleCloseEditor}
//         query={query}
//         preview={preview}
//         change={change}
//       />
//       <Delete
//         isSIIMain={isSIIMain}
//         query={query}
//         change={change}
//         open={openDelete}
//         handleClose={handleCloseDelete}
//         preview={preview}
//       />

//       <FormDialog handleClickOpenEditor={handleClickOpenEditor} />
//       <Paper sx={{ width: "100%", mb: 2 }}>
//         <EnhancedTableTabs
//           query={query}
//           tabsAdmin={tabsAdmin}
//           changeQuery={(value) => setQuery(value)}
//           change={change}
//         />
//         <Table
//           handleClickOpenEditor={handleClickOpenEditor}
//           handleClickOpenDelete={handleClickOpenDelete}
//           handleClickOpenRanks={handleClickOpenRanks}
//           infoProps={isSIIMain ? infoPropsInstructor : infoPropsStudent}
//           isSIIMain={isSIIMain}
//           change={change}
//           data={data}
//         />
//       </Paper>
//     </Box>
//   );
// }
