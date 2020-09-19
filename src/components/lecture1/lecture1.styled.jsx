import styled from "styled-components";

export const Lecture1Container = styled.div`
  height: 100vh;
`;
export const Button = styled.button`
  padding: 15px 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 35px 25px;
  box-shadow: 0 2px 10px #000;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  &:hover{
    border: 1px solid #e7a498;
    color: #e7a498;
    cursor: pointer;
  }
  &:active {
    outline: none;
  }
`;