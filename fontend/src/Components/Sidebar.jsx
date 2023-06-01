import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Typography from "@mui/material/Typography";

import "../Styles/Sidebar.css";

export default function Sidebar() {
  return (
    <Box 
      className="sidebar-container"
      bgcolor={"#EEEBEB"}
      width={"20%"}
      sx={{ display: { xs: "none", sm: "block" },height:"100%"}}
    >
      <nav aria-label="main mailbox folders">
        <Typography align="center" variant="h4" sx={{padding:2}}>
          MyMondMusic
        </Typography>
        <Divider />
        <List className="IconSideBar" sx={{display:"flex" , flexDirection:"column",justifyContent:"center"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="HOME" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon/>
              </ListItemIcon>
              <ListItemText primary="ABOUT" />
            </ListItemButton>
          </ListItem>
          <Divider/>
          {/* <Typography sx={{padding:3}}>
            MY PLAYLIST
          </Typography>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Login for able to use this function" />
            </ListItemButton>
          </ListItem> */}
        </List>
      </nav>
    </Box>
  );
}
