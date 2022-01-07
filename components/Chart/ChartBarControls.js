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
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className="">
      <Typography>Porcentaje Aprobatorio</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={12}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Seleccion de periodo
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              // label="Seleccion de periodo"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Seleccion de periodo
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              // label="Seleccion de periodo"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Seleccion de periodo
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              // label="Seleccion de periodo"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>asdf asd fas df</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartBarControls;
