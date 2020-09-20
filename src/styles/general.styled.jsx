import styled from "styled-components";

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 35px 25px;
  box-shadow: 0 2px 10px #000;  
  line-height: 1.2;
  text-transform: uppercase;
  transition: 0.2s;
  &:hover{
    border: 1px solid #e7a498;
    color: #e7a498;
    cursor: pointer;
  }
  &:active {
    outline: none;
  }
`;
export const h2 = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: right;
  text-transform: uppercase;
`;