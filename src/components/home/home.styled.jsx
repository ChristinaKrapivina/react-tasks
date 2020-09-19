import styled from "styled-components";
import {NavLink} from "react-router-dom";

const InteractiveNav = styled(NavLink)`
  height: 150px;
  width: 150px;
  position: absolute;
  top: 50%;
  right: 350px;
  transform: translateY(-50%);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: url('https://www.onlygfx.com/wp-content/uploads/2017/07/circle-brush-stroke-7.png') no-repeat center center;
  background-size: contain;
  border-radius: 50%;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  transform: scale(0);
`;
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

export const WelcomeText = styled.p`
  width: 60%;
  margin: 0;
  background: #fff;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: right;
  text-transform: uppercase;
`;

export const L1Nav = styled(InteractiveNav)`
  ${CircleContainer}:hover & {
    top: 80%;
    right: 590px;
    transform: scale(1);
  }
`;
export const L2Nav = styled(InteractiveNav)`
  ${CircleContainer}:hover & {
    top: 60%;
    right: 670px;
    transform: scale(1);
  }
`;
export const L3Nav = styled(InteractiveNav)`
  ${CircleContainer}:hover & {
    top: 38%;
    right: 690px;
    transform: scale(1);
  }
`;
export const HomeNav = styled(InteractiveNav)`
  ${CircleContainer}:hover & {
    top: 93%;
    right: 470px;
    transform: scale(1);
  }
`;
