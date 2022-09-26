import { Box, FormGroup, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const FilterSIIMain = () => {
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormGroup>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormGroup>
    </Box>
  );
};

export default FilterSIIMain;
