import { Container } from "@mui/material";
import "./App.css";
import { Body } from "./layout/Body";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import {Wave} from './component/Wave';
import { Blob } from "./component/Blob";

import React from "react";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";


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
       
          <Footer />
          </Container>
         
        

    </ColorModeContext.Provider>
  );
}

export default App;
