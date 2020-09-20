import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// Components
import { Home, Lecture1, Lecture2 } from "./components";
// Styles
import { AppContainer } from './App.styled';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="page" timeout={1000}>
      <Switch location={location}>
        <Route path="/" component={Home} exact />
        <Route path="/lecture1" component={Lecture1} />
        <Route path="/lecture2" component={Lecture2} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <AnimatedSwitch />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
