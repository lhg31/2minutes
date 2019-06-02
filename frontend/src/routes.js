import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Signin, Signup } from './pages/Login';
import Home from './pages/Home';
import Details from './pages/Details';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/app" component={Home} />
      <Route path="/details" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
