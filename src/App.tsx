import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from '../src/pages/home/index';
import './style.less';

function App() {
  return (
    <Router>
      <Route path="/" component={home} />
    </Router>
  );
}

export default App;
