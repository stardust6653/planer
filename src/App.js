import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return <div className="App"></div>;
}

export default App;
