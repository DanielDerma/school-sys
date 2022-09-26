import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";

const ChartBarControls = ({ handleData }) => {
  const [time, setTime] = useState("");
  const [ing, setIng] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    if (time && ing && subject && grade && group) {
      const timeslap = `${time}_${ing}_${subject}_${grade}_${group}`;
      handleData(timeslap);
    }
  }, [time, ing, subject, grade, group]);

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleIng = (event) => {
    setIng(event.target.value);
  };

  const handleGroup = (event) => {
    setGroup(event.target.value);
  };

  const handleGrade = (event) => {
    setGrade(event.target.value);
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography>Control de gráficas</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="select-time-label">Periodo *</InputLabel>
              <Select
                labelId="select-time-label"
                id="select-time-select"
                value={time}
                onChange={handleTime}
              >
                <MenuItem value={""}>Ninguno</MenuItem>
                <MenuItem value={"AGO-DIC-2021"}>AGO-DIC/2021</MenuItem>{" "}
                {/*2,4,6,8*/}
                <MenuItem value={"ENE-JUN-2021"}>ENE-JUN/2021</MenuItem>{" "}
                {/*1,3,5,7,9*/}
                <MenuItem value={"AGO-DIC-2020"}>AGO-DIC/2020</MenuItem>
                {/*2,4,6,8*/}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="select-ing-label">Ingeniería *</InputLabel>
              <Select
                labelId="select-ing-label"
                id="select-ing-select"
                value={ing}
                onChange={handleIng}
              >
                <MenuItem value={""}>Ninguno</MenuItem>
                <MenuItem value={"electromechanical"}>Electromecánica</MenuItem>
                <MenuItem value={"businessManagement"}>
                  Gestión Empresarial
                </MenuItem>
                <MenuItem value={"renewableEnergy"}>
                  Energías Renovables
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="select-grade-label">Grado *</InputLabel>
              <Select
                labelId="select-grade-label"
                id="select-grade-select"
                value={grade}
                onChange={handleGrade}
              >
                <MenuItem value={""}>Ninguno</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="select-group-label">Grupo *</InputLabel>
              <Select
                labelId="select-group-label"
                id="select-group-select"
                value={group}
                onChange={handleGroup}
              >
                <MenuItem value={""}>Ninguno</MenuItem>
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel id="select-subject-label">Materia *</InputLabel>
              <Select
                labelId="select-subject-label"
                id="select-subject-label-select"
                value={subject}
                onChange={handleSubject}
              >
                <MenuItem value={""}>Ninguno</MenuItem>
                <MenuItem value={"physical"}>Física</MenuItem>
                <MenuItem value={"math"}>Matemáticas</MenuItem>
                <MenuItem value={"spanish"}>Español</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ChartBarControls;
