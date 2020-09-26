import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// Store
import store from './store/store';
// Components
import { Home, Lecture1, Lecture2, Lecture3 } from "./components";
// Styles
import { AppContainer } from './App.styled';

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="page" timeout={1000}>
      <Switch location={location}>
        <Route path="/" component={Home} exact />
        <Route path="/lecture1" component={Lecture1} />
        <Route path="/lecture2" component={Lecture2} />
        <Route path="/lecture3" component={Lecture3} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <AnimatedSwitch />
        </AppContainer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
