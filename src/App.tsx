import React, { createContext, useMemo, useState } from "react";
import { Box, Container } from "@mui/material";
import "./App.css";
import { Body } from "./layout/Body";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Wave } from './component/Wave';
import { Skills } from "./whatIcanDo/Skills";
import { Projects } from "./projects/Projects";

interface ColorModeContextProps {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextProps>({
  toggleColorMode: () => { },
});

const App: React.FC = () => {
  const [mode, setMode] = useState<string>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Box sx={{backgroundColor: "#2d83aa"}}>

      <Container>
        <Header />
        <Body />
      </Container>
      <Wave />
      <Container>
        <Skills />
      </Container>
      <Projects />
      <Container>
        <Footer />
      </Container>
      </Box>
    </ColorModeContext.Provider>
  );
}

export default App;
