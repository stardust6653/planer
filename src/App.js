import React from "react";
import styled from "styled-components";
import PlanInput from "./components/PlanInput";
import PlanList from "./components/PlanList";
import Watch from "./components/Watch";

const BodyComponent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppComponent = styled.div`
  position: relative;
  border: 4px solid black;
  height: 60rem;
  width: 90rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 4px solid purple;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    > .effect {
      border: 2px solid purple;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
`;

function App() {
  return (
    <BodyComponent>
      <AppComponent>
        <Watch />
        <PlanInput />
        <PlanList />
      </AppComponent>
    </BodyComponent>
  );
}

export default App;
