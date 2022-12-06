import React, { useRef, createContext, useState } from "react";
import AboutComponent from "./component/AboutComponent";
import CarrouselComponent from "./component/CarrouselComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import MainComponent from "./component/MainComponent";

import "./component/style.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const linkRef = useRef(null);
  const linkExperience = useRef(null);
  const linkProject = useRef(null);
  const toogleTheme = () => {
    setTheme((curl) => (curl === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div id={theme}>
        <HeaderComponent
          click={toogleTheme}
          link={linkRef}
          linkEx={linkExperience}
          linkProject={linkProject}
        />
        <CarrouselComponent />
        <AboutComponent link={linkRef} />
        <MainComponent linkEx={linkExperience} linkProject={linkProject} />
        <FooterComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
