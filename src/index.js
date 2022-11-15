import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const container = document.getElementById("root");
const root = createRoot(container);

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
