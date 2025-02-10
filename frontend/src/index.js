import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../src/container/App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  font-family: "Play", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 100%;
  width: 100%;
  background-color: #1a1a1a;
  scroll-behavior: smooth;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
