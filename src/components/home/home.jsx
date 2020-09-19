import React from 'react';
// Styles
import {
  HomeContainer,
  CircleContainer,
  WelcomeText,
  HomeNav,
  L1Nav,
  L2Nav,
  L3Nav
} from './home.styled';

const HomeComponent = () => {
  return (
    <HomeContainer>
      <CircleContainer>
        <WelcomeText>Don't you want to hover me?</WelcomeText>
        <L1Nav to="/lecture1">lecture 1</L1Nav>
        <L2Nav to="/lecture2">lecture 2</L2Nav>
        <L3Nav to="/lecture3">lecture 3</L3Nav>
        <HomeNav exact to="/">home</HomeNav>
      </CircleContainer>
    </HomeContainer>
  );
}

export default HomeComponent;
