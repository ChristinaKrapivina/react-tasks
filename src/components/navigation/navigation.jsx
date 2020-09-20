import React from 'react';
// Styles
import { HomeNav, L1Nav, L2Nav, L3Nav } from "./navigation.styled";

const NavigationComponent = () => {
  return (
    <>
      <L1Nav to="/lecture1">lecture 1</L1Nav>
      <L2Nav to="/lecture2">lecture 2</L2Nav>
      <L3Nav to="/lecture3">lecture 3</L3Nav>
      <HomeNav exact to="/">home</HomeNav>
    </>
  );
};

export default NavigationComponent;
