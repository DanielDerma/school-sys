import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SchoolIcon from "@mui/icons-material/School";
import Link from "next/link";

export const mainListItems = (
  <>
    <Link href="account">
      <ListItem button key={"Account"}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary={"Account"} />
      </ListItem>
    </Link>
    <Link href="admin">
      <ListItem button key={"Admin"}>
        <ListItemIcon>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary={"Admin"} />
      </ListItem>
    </Link>
    <Link href="dashboard">
      <ListItem button key={"Dashboard"}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={"Dashboard"} />
      </ListItem>
    </Link>
    <Link href="editor">
      <ListItem button key={"Editor"}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary={"Editor"} />
      </ListItem>
    </Link>
    <Link href="siimain">
      <ListItem button key={"SIIMain"}>
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
        <ListItemText primary={"SIIMain"} />
      </ListItem>
    </Link>
    <Link href="siiview">
      <ListItem button key={"SIIView"}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary={"SIIView"} />
      </ListItem>
    </Link>
  </>
);
