import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import { ButtonUnstyled, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { styled, alpha } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";

export default function GroupedSelect() {
  return (
    <Box>
      <TextField
        id="standard-basic"
        label="Estudiantes"
        variant="standard"
        sx={{ width: "100%" }}
      />
      <Box
        sx={{
          mt: 2,
          height: "500px",
          overflow: "auto",
        }}
      >
        <Stack spacing={1}>
          <Item info="Julio Cesar" num="56489" />
          <Item info="Alemriana asdfasdf" num="35489" />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Stack>
      </Box>
    </Box>
  );
}

const Contact = styled(ButtonUnstyled)(({ theme }) => ({
  backgroundColor: "white",
  border: "none",
  "&:hover": {
    backgroundColor: "#F5F5F5",
  },
  cursor: "pointer",
  display: "flex",
}));

function Item({ info = "asdf asdfasdfasd", num = "45178" }) {
  return (
    <Contact>
      <Box sx={{ textAlign: "center", mr: 2 }}>
        <SchoolIcon fontSize="large" />
      </Box>
      <Box>
        <Typography variant="body1" component="h3">
          {info}
        </Typography>
        <Typography variant="overline" component="h4" sx={{ pl: 2 }}>
          #{num}
        </Typography>
      </Box>
    </Contact>
  );
}
