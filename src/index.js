import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
