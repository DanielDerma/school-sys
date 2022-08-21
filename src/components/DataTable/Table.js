import { useState } from "react";
import PropTypes from "prop-types";

import {
  Button,
  Skeleton,
  TableFooter,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Checkbox,
} from "@mui/material";

import { visuallyHidden } from "@mui/utils";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    infoProps,
    loading,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const { headId, headLabels } = infoProps;

  const headCells = headId.map((cell, index) => {
    const labels = headLabels[index];
    const info = {
      id: cell,
      numeric: cell === "actions" ? true : false,
      disablePadding: cell === "id" ? true : false,
      label: labels,
    };

    return info;
  });
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
            disabled={loading}
          />
          {/* <Skeleton variant="text" /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {/* <Skeleton variant="text" /> */}

            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,

  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const DataLoader = ({ isSiiMain }) => {
  const data3 = [[], [], [], [], [], []];
  return data3.map((elem, index) => (
    <TableRow key={index}>
      <TableCell padding="checkbox">
        <Checkbox disabled={false} />
      </TableCell>
      <TableCell component="th" scope="row" padding="none">
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>

      {!isSiiMain ? (
        <TableCell align="center">
          <Button>
            <Skeleton variant="text" sx={{ width: "30px" }} />
          </Button>
          <Button color="secondary">
            <Skeleton variant="text" sx={{ width: "30px" }} />
          </Button>
        </TableCell>
      ) : (
        <TableCell align="left">
          <Button>
            <Skeleton variant="text" />
          </Button>
        </TableCell>
      )}
    </TableRow>
  ));
};

export default function EnhancedTable({
  data,
  infoProps,
  isSiiMain,
  loading,
  change,
  handleClickOpenDelete,
  handleClickOpenEditor,
}) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <TableContainer>
      <Table
        sx={{ minWidth: "100%" }}
        aria-labelledby="tableTitle"
        size="medium"
      >
        <EnhancedTableHead
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={data.length}
          infoProps={infoProps}
          loading={loading}
        />
        <TableBody>
          {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
          {!loading ? (
            stableSort(data, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) => handleClick(event, row.id)}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row">
                      {row.fname}
                    </TableCell>
                    <TableCell>{row.lname}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.contact_add}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    {!isSiiMain ? (
                      <TableCell align="center">
                        <Button onClick={() => handleClickOpenEditor(row)}>
                          <EditOutlinedIcon fontSize="small" />
                        </Button>
                        <Button
                          color="secondary"
                          onClick={() => handleClickOpenDelete(row)}
                        >
                          <CloseOutlinedIcon fontSize="small" />
                        </Button>
                      </TableCell>
                    ) : (
                      <TableCell align="left" sx={{ pl: 4.5 }}>
                        <Button>
                          <SchoolOutlinedIcon fontSize="medium" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })
          ) : (
            <DataLoader isSiiMain={isSiiMain} loading={loading} />
          )}
          {emptyRows > 0 && (
            <TableRow
              style={{
                height: 53 * emptyRows,
              }}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            {!loading && (
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            )}
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
