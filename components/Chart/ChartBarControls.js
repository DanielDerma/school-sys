import { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const ChartBarControls = () => {
  const [time, setTime] = useState("");
  const [ing, setIng] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [group, setGroup] = useState("");
  // call when all the states are true with useEffect
  useEffect(() => {
    if (time && ing && subject && grade && group) {
      console.log(`${time}_${ing}_${subject}_${grade}_${group}`);
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
    <Box className="">
      <Typography>Control de grafica</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: "100%" }}
            error={time ? false : true}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Periodo *
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={time}
              onChange={handleTime}
              // label="Seleccion de periodo"
            >
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
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: "100%" }}
            error={ing ? false : true}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Ingeniería *
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={ing}
              onChange={handleIng}
              // label="Seleccion de periodo"
            >
              <MenuItem value={"electromechanical"}>Electromecánica</MenuItem>
              <MenuItem value={"businessManagement"}>
                Gestión Empresarial
              </MenuItem>
              <MenuItem value={"renewableEnergy"}>Energías Renovables</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: "100%" }}
            error={grade ? false : true}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Grupo *
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={grade}
              onChange={handleGrade}
              // label="Seleccion de periodo"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: "100%" }}
            error={group ? false : true}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Grado *
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={group}
              onChange={handleGroup}
              // label="Seleccion de periodo"
            >
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: "100%" }}
            error={subject ? false : true}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Materia *
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={subject}
              onChange={handleSubject}
              // label="Seleccion de periodo"
            >
              <MenuItem value={"physical"}>Física</MenuItem>
              <MenuItem value={"math"}>Matemáticas</MenuItem>
              <MenuItem value={"spanish"}>Español</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartBarControls;
