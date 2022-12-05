import { Launch } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
const MyProject = ({linkProject}) => {
  return (
    <Container sx={{ mt: 4 }} className="my-project">
      <h3 ref={linkProject}>My Project</h3>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
      >
        <Grid item xs={12} sm={3}>
          <Card
            sx={{
              maxWidth: 345,
              p: 1,
              height: "200px",
              borderTop: '3px solid #008CBA',
              borderRadius : 4
            }}
            data-aos="fade-up" data-aos-duration="1000"
          >
            <CardContent>
              <div className="link">
                <a href="https://github.com/sanihamdhani/react-movies" target="_blank"
                  rel="noreferrer">
                  <GitHubIcon sx={{ color: "#008CBA" }} />
                </a>
                <a href="https://movies-tmdb-api.netlify.app/" target="_blank"
                  rel="noreferrer">
                  <Launch sx={{ color: "#008CBA" }} />
                </a>
              </div>
              <h4> Movies TMDB</h4>
              <Typography variant="body2" color="text.secondary">
                Create a website using React Js and the TMDB Public movies API
              </Typography>
              <div className="list">
                <p>React Js</p>
                <p>Material UI</p>
                <p>TMDB API</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ maxWidth: 345, p: 1, height: "200px", borderTop: '3px solid #008CBA',
              borderRadius : 4 }}
              data-aos="fade-up" data-aos-duration="1200"
              >
                
            <CardContent>
              <div className="link" >
                <a href="https://github.com/sanihamdhani/landing-page"  target="_blank"
                  rel="noreferrer">
                  <GitHubIcon sx={{ color: "#008CBA" }} />
                </a>
                <a href="https://sinaw-landing-page.netlify.app/"  target="_blank"
                  rel="noreferrer">
                  <Launch sx={{ color: "#008CBA" }} />
                </a>
              </div>
              <h4> Sinaw</h4>
              <Typography variant="body2" color="text.secondary">
                Slicing design figma from Mas Kukuh using React JS
              </Typography>
              <div className="list">
                <p>React Js</p>
                <p>Material UI</p>
                <p>Javascript</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ maxWidth: 345, height: "200px", p: 1 ,  borderTop: '3px solid #008CBA',
              borderRadius : 4}} 
              data-aos="fade-up" data-aos-duration="1400">
            <CardContent>
              <div className="link">
                <a href="https://github.com/sanihamdhani/react-article" target="_blank"
                  rel="noreferrer">
                  <GitHubIcon sx={{ color: "#008CBA" }} />
                </a>
                <a href="#/" disabled="disabled" target="_blank"
                  rel="noreferrer">
                  <Launch sx={{ color: "#008CBA" }} />
                </a>
              </div>
              <h4> News API</h4>
              <Typography variant="body2" color="text.secondary">
                Create a website using React Js and public API from News API
              </Typography>
              <div className="list">
                <p>React Js</p>
                <p>Material UI</p>
                <p>News API</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card sx={{ maxWidth: 345, p: 1 ,  borderTop: '3px solid #008CBA',
              borderRadius : 4,  height: "200px",}} data-aos="fade-up" data-aos-duration="1600">
            <CardContent>
              <div className="link">
                <a href="https://github.com/sanihamdhani/tugas-mapid" target="_blank"
                  rel="noreferrer">
                  <GitHubIcon sx={{ color: "#008CBA" }} />
                </a>
                <a href="/" disabled="disabled">
                  <Launch sx={{ color: "#008CBA" }} />
                </a>
              </div>
              <h4> MAP GL</h4>
              <Typography variant="body2" color="text.secondary">
                Create location Map using React Js and Mapbox
              </Typography>

              <div className="list">
                <p>React Js</p>
                <p>MapGL</p>
                <p>Mapbox</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyProject;
