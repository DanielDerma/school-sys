import { Paper, Skeleton, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TableSkeleton = () => {
  return (
    <Box>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bc: "white",
        }}
      >
        <Skeleton variant="rectangular" width={200} height={30} />
      </Toolbar>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: "flex", mb: 2 }}>
          <Skeleton
            sx={{ mr: 2 }}
            variant="rectangular"
            width={200}
            height={30}
          />
          <Skeleton variant="rectangular" width={200} height={30} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Skeleton variant="rectangular" width="100%" height={50} />
          <Skeleton variant="rectangular" width="100%" height={50} />
          <Skeleton variant="rectangular" width="100%" height={50} />
          <Skeleton
            sx={{ alignSelf: "end" }}
            variant="rectangular"
            width={300}
            height={30}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default TableSkeleton;
