import * as React from "react";

import { Container } from "@mui/material";
import MyProject from "./MyProject";
import "./style.css";
import LabTabs from "./TabComponent";
import SosialMedia from "./SosialMedia";

export default function MainComponent({ linkEx, linkProject }) {
  return (
    <Container sx={{ mt: 4 }}>
      <LabTabs linkEx={linkEx} />
      <MyProject linkProject={linkProject} />
      <div className="main">
        <SosialMedia />
      </div>
    </Container>
  );
}
