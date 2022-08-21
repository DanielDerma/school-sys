import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Skeleton } from "@mui/material";

export default function BasicTable({
  loading,
  data,
  labels,
  additionalLabels,
  isSiiView,
}) {
  if (!data) {
    return null;
  }

  const SkeletonData = () => (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" align="center">
        <Skeleton variant="text" />
      </TableCell>
      <TableCell align="center">
        <Skeleton variant="text" />
      </TableCell>
    </TableRow>
  );

  if (isSiiView) {
    return (
      <TableContainer component={Paper} width="80%">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {additionalLabels.map((e) => (
                <TableCell key={e}>{e}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <SkeletonData />
            ) : (
              <>
                {data.map((row, i) => {
                  const headT = labels[i];
                  return (
                    <TableRow key={row.mote}>
                      <TableCell component="th" scope="row">
                        {headT}
                      </TableCell>
                      <TableCell>{row.ranks.u1}</TableCell>
                      <TableCell>{row.ranks.u2}</TableCell>
                      <TableCell>{row.ranks.u3}</TableCell>
                      <TableCell>{row.ranks.u4}</TableCell>
                      <TableCell>{row.ranks.u5}</TableCell>
                      <TableCell>{row.ranks.u6}</TableCell>
                    </TableRow>
                  );
                })}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  if (Object.keys(data).length > 0) {
    return (
      <TableContainer component={Paper} width="80%">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {loading ? (
              <SkeletonData />
            ) : (
              <>
                {labels.map((e, i) => {
                  const headT = Object.values(data)[i];
                  return (
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {e}
                      </TableCell>
                      <TableCell align="center">
                        {
                          {
                            Nombre: data.fname,
                            Apellido: data.lname,
                            Edad: data.age,
                            Número: data.contact_add,
                            Correo: data.email,
                          }[e]
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return null;
}
