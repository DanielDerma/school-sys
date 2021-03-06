import { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";

const ChartBarControls = () => {
  const [time, setTime] = useState("AGO-DIC-2021");
  const [ing, setIng] = useState("electromechanical");
  const [subject, setSubject] = useState("physical");
  const [grade, setGrade] = useState("1");
  const [group, setGroup] = useState("A");
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
    <Grid item xs={12} md={4} lg={4}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          // height: 600,
        }}
      >
        <Box className="">
          <Typography>Control de grafica</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
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
              <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Ingenier??a *
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={ing}
                  onChange={handleIng}
                  // label="Seleccion de periodo"
                >
                  <MenuItem value={"electromechanical"}>
                    Electromec??nica
                  </MenuItem>
                  <MenuItem value={"businessManagement"}>
                    Gesti??n Empresarial
                  </MenuItem>
                  <MenuItem value={"renewableEnergy"}>
                    Energ??as Renovables
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
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
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
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
              <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
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
                  <MenuItem value={"physical"}>F??sica</MenuItem>
                  <MenuItem value={"math"}>Matem??ticas</MenuItem>
                  <MenuItem value={"spanish"}>Espa??ol</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ChartBarControls;
