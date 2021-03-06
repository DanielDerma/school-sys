import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import { Box } from "@mui/material";

export default function GroupedSelect({ data, changeRadarParms }) {
  return (
    <Box
      sx={{
        mt: 2,
        height: "500px",
        overflow: "auto",
      }}
    >
      <CheckboxList data={data} changeRadarParms={changeRadarParms} />
    </Box>
  );
}

function CheckboxList({ data, changeRadarParms }) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    if (checked.length > 2) {
      setChecked([]);
    }

    changeRadarParms(checked);
  }, [checked]);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <AlternateEmailIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={value.name}
                secondary={`#${value.id}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
