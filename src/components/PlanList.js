import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { isRemove } from "../redux/modules/inputValueSlice";
import { BoxComponent } from "./Watch";
import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Items = styled.ul`
  height: 38rem;
  overflow: scroll;
  &:hover {
    > .effect {
      border: 2px solid purple;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  width: 82rem;
  height: 5rem;
  margin-bottom: 2rem;
`;

const RemoveButtonComponent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 3px solid black;
  height: 5rem;
  width: 5rem;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 1.2rem;
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  &:hover {
    color: tomato;
  }
`;

const Plan = styled.div`
  width: 68rem;
  padding-left: 3rem;
  font-size: 1.5rem;
`;

const Timer = styled.div`
  line-height: 5rem;
  width: 6rem;
  text-align: center;
  height: 5rem;
  border-left: 3px solid black;
`;

const TimerButton = styled.button`
  background-color: ${props => props.color};
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: tomato;
    font-size: 1rem;
  }
  &:active {
    background-color: #fa8072;
  }
`;

const PlanList = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(state => state.value.items);

  let totalMinutes = 0;
  let convertSeconds = totalMinute => {
    return totalMinute * 60;
  };

  const timeArray = toDos.map(item => item.time);
  const addArray = timeArray.forEach(item => (totalMinutes += item));

  const [isPlay, setIsPlay] = useState(false);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [timerInterval, setTimerInterval] = useState(0);

  const tick = () => {
    if (second > 0) {
      setSecond(sec => sec - 1);
    }

    if (second === 0) {
      if (minute === 0) {
        setIsPlay(false);
      } else {
        setMinute(min => min - 1);
        setSecond(59);
      }
    }
  };

  const getTime = () => {
    setMinute(parseInt(convertSeconds(totalMinutes) / 60));
    setSecond(parseInt(convertSeconds(totalMinutes) % 60));
  };

  const customInterval = useInterval(
    () => {
      tick();
    },
    isPlay ? 1000 : null
  );

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    getTime();
  }, [convertSeconds(totalMinutes)]);

  useEffect(() => {
    if (second === 0) {
      clearInterval(timerInterval);
    }
  }, [minute, second]);

  useEffect(() => {
    if (isPlay) {
      setTimerInterval(customInterval);
    }
  }, [isPlay]);

  const handlePauseClick = () => {
    setIsPlay(false);
    clearInterval(timerInterval);
  };

  const handlePlayClick = () => {
    setIsPlay(true);
  };

  return (
    <Items>
      {toDos.map(item => {
        return (
          <Item key={item.id}>
            <RemoveButtonComponent>
              <RemoveButton onClick={() => dispatch(isRemove(item.id))}>
                <BsTrash />
              </RemoveButton>
            </RemoveButtonComponent>
            <Plan>{item.text}</Plan>
            <Timer>
              <TimerButton color="#fa8072">{item.time}</TimerButton>
            </Timer>
          </Item>
        );
      })}
      <BoxComponent width="4rem" className="effect" fontSize="1.4rem" right="4rem" bottom="3rem">
        {minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}
      </BoxComponent>
      {isPlay ? (
        <BoxComponent
          onClick={handlePauseClick}
          width="7rem"
          className="effect"
          fontSize="1.1rem"
          bottom="3rem"
          right="13rem"
          as="button"
        >
          중지
        </BoxComponent>
      ) : (
        <BoxComponent
          onClick={handlePlayClick}
          width="7rem"
          className="effect"
          fontSize="1.1rem"
          bottom="3rem"
          right="13rem"
          as="button"
        >
          시작
        </BoxComponent>
      )}
    </Items>
  );
};

export default PlanList;
