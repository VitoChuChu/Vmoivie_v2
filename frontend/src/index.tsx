import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./container/App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  font-family: "Play", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 100%;
  width: 100%;
  height:100%;
  padding: 0;
  margin: 0;
  background-color: rgb(0, 0, 0);
  scroll-behavior: smooth;
}
`;

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
