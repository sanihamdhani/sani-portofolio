import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Container } from "@mui/material";
import React from "react";
import "./style.css";
const SosialMedia = () => {
  return (
    <Container sx={{ mt: 4 }} className="findme">
      <h3>Lets Connect And Say Hi</h3>
      <p>
        If you want just say hi, you can leave me an email, I will try my best
        to get back to you!
      </p>
      <button
        className="button"
        onClick={() => window.open("mailto: sani060200@gmail.com")}
      >
        Say Hi To Me
      </button>

      <h3>Find Me</h3>
      <div className="sosmed-icons">
        <GitHub
          sx={{
            "&:hover": {
              color: "#008CBA",
              transition: "background 1s, color 1s",
            },
          }}
          onClick={() => window.open("https://github.com/sanihamdhani")}
        />
        <LinkedIn
          sx={{
            "&:hover": {
              color: "#008CBA",
              transition: "background 1s, color 1s",
            },
          }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/sani-hamdhani-54966a21a/")
          }
        />
        <Instagram
          sx={{
            "&:hover": {
              color: "#008CBA",
              transition: "background 1s, color 1s",
            },
          }}
          onClick={() =>
            window.open("https://www.instagram.com/sani.hamdhani/")
          }
        />

        <Email
          sx={{
            "&:hover": {
              color: "#008CBA",
              transition: "background 1s, color 1s",
            },
          }}
          onClick={() => window.open("mailto: sani060200@gmail.com")}
        />
      </div>
    </Container>
  );
};

export default SosialMedia;
