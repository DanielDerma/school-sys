import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Skeleton,
} from "@mui/material";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import { Box } from "@mui/material";

export default function GroupedSelect({ data, changeRadarParams, loading }) {
  return (
    <Box
      sx={{
        mt: 2,
        height: "500px",
        overflow: "auto",
        width: "100%",
      }}
    >
      <CheckboxList
        data={data}
        changeRadarParams={changeRadarParams}
        loading={loading}
      />
    </Box>
  );
}

function CheckboxList({ data, changeRadarParams, loading }) {
  const [checked, setChecked] = useState([]);
  const fakeList = [1, 2, 3, 4, 5, 6];
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      if (checked.length > 1) return;
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  useEffect(() => {
    changeRadarParams(checked);
  }, [checked]);

  if (loading) {
    return (
      <>
        {fakeList.map((a) => {
          return (
            <ListItem key={a}>
              <ListItemText primary={<Skeleton height={50} />} />
            </ListItem>
          );
        })}
      </>
    );
  }

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {data.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;
        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() =>
                  (window.location =
                    "mailto:" +
                    `${value.id}?Subject=Departamento%20Escolar%20le%20desea%20saber`)
                }
              >
                <AlternateEmailIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.id)}>
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
                secondary={value.tel}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
