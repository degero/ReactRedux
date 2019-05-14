import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Header } from './common/components/Header';
import HomeComponent from './views/home/home';

import '../assets/fonts/fonts.css';

const HeaderWithRouter = withRouter(props => <Header {...props} />);
 
module.exports = (
  <div className="container">
    <HeaderWithRouter />
    <hr />
    <div className="container__content">
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="*" component={HomeComponent} />
      </Switch>
    </div>
  </div>
);
