import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.less';
import Login from './pages/login';
import Home from './pages/home';

const App = function() {
  const baseUrl = window.location.href.includes('localhost') ? '' : window.location.pathname;

  return (
    <Router basename={baseUrl}>
      <Route path="/:id(login)?" exact component={Login} />
      <Route path="/home" component={Home} />
    </Router>
  );
};

export default App;
