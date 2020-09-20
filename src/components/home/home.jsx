import React from 'react';
// Components
import { Navigation } from '../../components';
// Styles
import {
  HomeContainer,
  CircleContainer,
  WelcomeText,
} from './home.styled';

const HomeComponent = () => {
  return (
    <HomeContainer>
      <CircleContainer>
        <WelcomeText>Don't you want to hover me?</WelcomeText>
        <Navigation />
      </CircleContainer>
    </HomeContainer>
  );
}

export default HomeComponent;
