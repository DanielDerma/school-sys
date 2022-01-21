import { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const ChartBarControls = () => {
  const [ing, setIng] = useState(1);
  const [time, setTime] = useState(1);
  const [year, setYear] = useState(1);
  const [grade, setGrade] = useState(1);

  const handleIng = (event) => {
    setIng(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  const handleGrade = (event) => {
    setGrade(event.target.value);
  };

  return (
    <Box className="">
      <Typography>Control de grafica</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={12}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Ingeniería
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={ing}
              onChange={handleIng}
              // label="Seleccion de periodo"
            >
              <MenuItem value={1}>Electromecánica</MenuItem>
              <MenuItem value={2}>Gestión Empresarial</MenuItem>
              <MenuItem value={3}>Energías Renovables</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Periodo
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={time}
              onChange={handleTime}
              // label="Seleccion de periodo"
            >
              <MenuItem value={1}>AGO-DIC/2021</MenuItem>
              <MenuItem value={2}>ENE-JUN/2021</MenuItem>
              <MenuItem value={3}>AGO-DIC/2020</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Grupo
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={grade}
              onChange={handleGrade}
              // label="Seleccion de periodo"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={3}>5</MenuItem>
              <MenuItem value={3}>7</MenuItem>
              <MenuItem value={3}>9</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Grado
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={year}
              onChange={handleYear}
              // label="Seleccion de periodo"
            >
              <MenuItem value={1}>A</MenuItem>
              <MenuItem value={2}>B</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartBarControls;
