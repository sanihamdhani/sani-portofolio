import React from "react";

import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Container, Grid, IconButton } from "@mui/material";
import "./style.css";

const CarrouselComponent = () => {
  return (
    <Container className="hero">
      <Grid container spacing={2} sx={{ mt: "30px" }}>
        <Grid
          item
          xs={12}
          md={3}
          lg={6}
          sm={6}
          sx={{ mt: "10em" }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h3>Hi I'm</h3>
          <h1>Sani Hamdhani</h1>
          <h4>FRONTEND DEVELOPER | UI ENTHUSIAST</h4>

          <button className="button">Get In Touch</button>
          <div className="social-media">
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sani-hamdhani-54966a21a/"
                )
              }
            >
              <LinkedIn
                sx={{
                  color: "#000000",
                  "&:hover": {
                    color: "#008CBA",
                  },
                }}
              />
            </IconButton>

            <IconButton
              onClick={() =>
                window.open("https://www.instagram.com/sani.hamdhani/")
              }
            >
              <Instagram
                sx={{
                  color: "#000000",
                  "&:hover": {
                    color: "#008CBA",
                  },
                }}
              />
            </IconButton>
            <IconButton
              onClick={() => window.open("https://github.com/sanihamdhani")}
            >
              <GitHub
                sx={{
                  color: "#000000",
                  "&:hover": {
                    color: "#008CBA",
                  },
                }}
              />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} md={3} lg={6} sm={6}>
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_ne6kcqfz.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarrouselComponent;
