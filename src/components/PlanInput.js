import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { TextInput } from "grommet";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { isConfirm } from "../redux/modules/inputValueSlice";

const InputComponent = styled.div`
  position: absolute;
  top: 3rem;
  left: 21rem;
  width: 65rem;
`;

const InputGroup = styled.form`
  display: flex;
`;

const TimeSelector = styled.select`
  width: 6rem;
  outline: none;
  border-radius: 5px;
  margin-left: 1rem;
  border: 1px solid #999;
  text-align: center;
  font-size: 1.5rem;
  &:hover {
    outline: 2px solid rgba(129, 255, 186, 0.8);
  }
`;

const ConfirmButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  width: 5rem;
`;

const Hr = styled.hr`
  border: 3px solid #555;
  border-radius: 10px;
`;

const PlanInput = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [selectValue, setSelectValue] = useState(5);
  const item = {
    text: inputText,
    time: selectValue,
  };

  const onSubmit = event => {
    event.preventDefault();
    // confirm 할 떄 마다 dispatch를 실행
    setInputText("");
    setSelectValue(5);
    dispatch(isConfirm(item));
  };

  const onChangeInputText = event => {
    setInputText(event.target.value);
  };

  const onChangeSelectValue = event => {
    setSelectValue(Number(event.target.value));
  };

  const options = [1, 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  return (
    <InputComponent>
      <InputGroup onSubmit={onSubmit}>
        <TextInput
          value={inputText}
          size="large"
          onChange={onChangeInputText}
          placeholder="당신이 할 일을 적어주세요."
        />
        <TimeSelector onChange={onChangeSelectValue} value={selectValue}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </TimeSelector>

        <ConfirmButton type="submit">
          <BsPlusLg size="1.5rem" />
        </ConfirmButton>
      </InputGroup>

      <Hr className="hr" />
      <Hr className="hr" />
      <Hr className="hr" />
    </InputComponent>
  );
};

export default PlanInput;
