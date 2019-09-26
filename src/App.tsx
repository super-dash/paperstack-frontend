import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.less';
import home from '../src/pages/home/index';
import login from '../src/pages/login/index';

function App() {
  return (
    <Router>
      <Route path="/" exact component={home} />
      <Route path="/login" component={login} />
      <Route path="/register" component={login} />
    </Router>
  );
}

export default App;
