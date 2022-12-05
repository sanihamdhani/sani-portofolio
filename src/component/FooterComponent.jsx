import { Typography } from "@mui/material";
import React from "react";

const FooterComponent = () => {
  return (
    <div className="footer">
      <footer>
        <Typography variant="2" component="div">
          &copy; 2022 - Sani Hamdhani. All rights reserved
          <br />
          Made with ❤️ in Indonesia.
        </Typography>
      </footer>
    </div>
  );
};

export default FooterComponent;
