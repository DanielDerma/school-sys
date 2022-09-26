import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordField = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography sx={{ flexGrow: 1 }}>
        {showPassword ? password : "********"}
      </Typography>
      <IconButton onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </Box>
  );
};

export default PasswordField;
