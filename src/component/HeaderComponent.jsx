import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import DrawerData from "./Drawer";
import "./style.css";

const HeaderComponent = ({ click, link, linkEx, linkProject }) => {
  const matches = useMediaQuery("(min-width:600px)");
  const goTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "none",
        color: "black",
      }}
      className="nav"
    >
      {matches && (
        <Toolbar>
          <h5>
            <span style={{ fontWeight: "bold" }}>Sani</span> Hamdhani
          </h5>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" onClick={() => goTo(link.current)}>
              About Me
            </Button>
            <Button color="inherit" onClick={() => goTo(linkEx.current)}>
              My Experience
            </Button>
            <Button color="inherit" onClick={() => goTo(linkProject.current)}>
              My Project
            </Button>
            {/* <Button color="inherit" onClick={click}>
              Mode
            </Button> */}
          </Stack>
        </Toolbar>
      )}
      {!matches && (
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            My Portofolio
          </Typography>
          <DrawerData
            link={link}
            linkEx={linkEx}
            linkProject={linkProject}
            goTo={goTo}
          />
        </Toolbar>
      )}
    </AppBar>
  );
};

export default HeaderComponent;
