import React from "react";
import { createRoot } from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);
