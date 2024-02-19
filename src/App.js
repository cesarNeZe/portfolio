import { Container } from "@mui/material";
import "./App.css";
import { Body } from "./layout/Body";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import {Wave} from './component/Wave';

import { Skills } from "./whatIcanDo/Skills";
import { Projects } from "./projects/Projects";

import React from "react";





export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );



  return (
    <ColorModeContext.Provider value={colorMode}>
     
        <Container
        >
      
          <Header />
          <Body />
          </Container>
          <Wave/>
          <Container>
       <Skills/>
       
          
          </Container>
          <Projects/>
         <Container>
          <Footer/>
         </Container>
        

    </ColorModeContext.Provider>
  );
}

export default App;
