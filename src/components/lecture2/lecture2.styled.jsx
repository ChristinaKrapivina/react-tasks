import styled from 'styled-components';
import { Button, h2 } from '../../styles/general.styled';

export const Lecture2Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 400px;
  padding: 30px;
  border-radius: 35px 25px;
  box-shadow: 0 2px 10px #000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormName = styled(h2)`
  margin-bottom: 1rem;
`;

export const FormButton = styled(Button)`
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 0.9rem;
`;

export const Link = styled.a`
  font-size: 0.9rem;
  text-decoration: underline;
  transition: 0.2s;
  &:hover{
    color: #e7a498;
    cursor: pointer;
  }
`;

export const Error = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  color: red;
  border-bottom: 1px solid red;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
