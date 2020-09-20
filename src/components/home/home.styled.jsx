import styled from "styled-components";
import { h2 } from '../../styles/general.styled';

export const HomeContainer = styled.div`
  height: 100vh;
`;

export const CircleContainer = styled.div`
  height: 700px;
  width: 700px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: #ffffff url('https://www.onlygfx.com/wp-content/uploads/2017/07/circle-brush-stroke-7.png') no-repeat center center;
  background-size: contain;
  border-radius: 50%;
`;

export const WelcomeText = styled(h2)`
  width: 60%;
  background: #fff;
`;

