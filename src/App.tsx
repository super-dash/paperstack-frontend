import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.less';
import login from './pages/login';
import home from './pages/home';

const App = function() {
  const baseUrl = window.location.href.includes('localhost') ? '' : window.location.pathname;

  return (
    <Router basename={baseUrl}>
      <Route path="/:id(login)?" exact component={login} />
      <Route path="/home" component={home} />
    </Router>
  );
};

export default App;
