import React from 'react';
import PropTypes from "prop-types";
// Styles
import { LabeledInput, Input } from './input.styled';

export const InputComponent = ({ labelName, value, type, changeFunc, blurFunc }) => {
  return (
    <LabeledInput>
      {labelName}:
      <Input type={type} value={value} onChange={changeFunc} onBlur={blurFunc}/>
    </LabeledInput>
  );
};

InputComponent.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired,
  blurFunc: PropTypes.func,
};
