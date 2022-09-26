import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { grey } from "@mui/material/colors";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SchoolIcon from "@mui/icons-material/School";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useAuth } from "../../contexts/AuthContext";
import { Capitalize } from "../../utils";

const MainListItems = () => {
  const router = useRouter();
  const { pages } = useAuth();

  const pathname = router.pathname
    .split("/")
    .pop()
    .toLowerCase();

  const capitalizePathname = Capitalize(pathname);
  const [focus, setFocus] = useState(capitalizePathname);

  const BTNs = ["Account", pages];

  return (
    <>
      {BTNs.map((btn) => {
        if (focus === btn) {
          return (
            <ListItem button key={btn.toLowerCase()}>
              <ListItemIcon>
                {
                  {
                    Account: <AccountCircleIcon sx={{ color: grey[900] }} />,
                    Admin: <SupervisorAccountIcon sx={{ color: grey[900] }} />,
                    Dashboard: <DashboardIcon sx={{ color: grey[900] }} />,
                    Editor: <NewspaperIcon sx={{ color: grey[900] }} />,
                    SIIMain: <SchoolIcon sx={{ color: grey[900] }} />,
                    SIIView: <AssignmentIndIcon sx={{ color: grey[900] }} />,
                  }[btn]
                }
              </ListItemIcon>
              <ListItemText primary={btn} />
            </ListItem>
          );
        } else {
          return (
            <Link href={btn.toLowerCase()} passHref key={btn.toLowerCase()}>
              <ListItem button onClick={() => setFocus(btn)}>
                <ListItemIcon>
                  {
                    {
                      Account: <AccountCircleIcon />,
                      Admin: <SupervisorAccountIcon />,
                      Dashboard: <DashboardIcon />,
                      Editor: <NewspaperIcon />,
                      SIIMain: <SchoolIcon />,
                      SIIView: <AssignmentIndIcon />,
                    }[btn]
                  }
                </ListItemIcon>
                <ListItemText primary={btn} />
              </ListItem>
            </Link>
          );
        }
      })}
    </>
  );
};

export default MainListItems;
