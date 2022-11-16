import React from "react";
import { Clock } from "grommet";
import styled from "styled-components";

export const BoxComponent = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  font-size: ${props => props.fontSize};
  width: ${props => props.width};
  border: 2px solid black;
  border-radius: 5px;
  padding: 2rem;
  background-color: transparent;
  transition: all 0.4s ease-in-out;
`;

function Watch() {
  return (
    <BoxComponent className="effect" top="3rem" left="4rem">
      <Clock type="digital" size="xlarge" />
    </BoxComponent>
  );
}

export default Watch;
