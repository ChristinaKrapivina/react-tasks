import styled from "styled-components";
import { Button } from '../../styles/general.styled';

export const Lecture1Container = styled.div`
  height: 100vh;
`;
export const OpenButton = styled(Button)`
  padding: 15px 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: 600;
`;