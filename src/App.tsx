import React from "react";
import { Header } from "./Header/Header";
import { ThemeProvider } from "styled-components";
import { CushonTheme } from "./theme";
import "./App.css";
import { Routes } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./StoreProvider/StoreProvider";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <div className="App">
          <ThemeProvider theme={CushonTheme}>
            <Header />
            <Routes />
          </ThemeProvider>
        </div>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
