import Grid from "@mui/material/Grid";
import * as React from "react";
import { Container } from "@mui/material";
import "./style.css";

export default function AboutComponent({ link }) {
  return (
    <div className="about">
      <Container data-aos="fade-up" data-aos-duration="1500">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <img src="./assets/foto.png" height={300} alt="foto" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <h3 ref={link}>About Me</h3>

            <p>
              I am a fresh graduate from Informatic Engineering at Sekolah
              Tinggi Teknologi Bandung, who is interested in web programming. In
              2021 I will take part in the Kampus Merdeka activities with
              Progate Global Indonesia partners. In this activity I learned
              about HTML, CSS, Javascript, and Node.Js. and after the program
              was finished I took part in the Bangkit Academy 2022 by Google,
              GoTo, Traveloka program.
            </p>
            <p>
              These are some of the tools and technologies I have used recently
            </p>
            <div className="use-teckno">
              <img
                src="./assets/Vector.svg"
                alt="img"
                style={{ height: "40px" }}
              />
              <img
                src="./assets/Vector (1).svg"
                alt="img"
                style={{ height: "40px" }}
              />
              <img
                src="./assets/Vector (2).svg"
                alt="img"
                style={{ height: "40px" }}
              />
              <img
                src="./assets/Vector (3).svg"
                alt="img"
                style={{ height: "40px" }}
              />
              <img
                src="./assets/Vector (4).svg"
                alt="img"
                style={{ height: "40px" }}
              />
              <img
                src="./assets/Vector (5).svg"
                alt="img"
                style={{ height: "40px" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
