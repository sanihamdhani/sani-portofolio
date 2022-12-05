import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerData = ({ link, linkEx, linkProject, goTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setMobile] = useState(true);
  const toogleMenu = () => {
    setMobile(false);
    console.log(isMobile);
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setMobile(true);
        }}
      >
        <List sx={{ justifyContent: "center", textAlign: "center" }}>
          <ListItemButton onClick={() => goTo(link.current)}>
            About Me
          </ListItemButton>
          <ListItemButton onClick={() => goTo(linkEx.current)}>
            My Experience
          </ListItemButton>
          <ListItemButton onClick={() => goTo(linkProject.current)}>
            My Project
          </ListItemButton>
          <ListItemButton>Mode</ListItemButton>
        </List>
      </Drawer>
      {isMobile ? <MenuIcon onClick={toogleMenu} /> : "X"}
    </React.Fragment>
  );
};

export default DrawerData;
