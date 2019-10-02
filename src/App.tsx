import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.less';
import login from './pages/login';
import home from './pages/home';

interface AppProps {
  baseUrl: string
}

const App : FunctionComponent<AppProps> = function ({baseUrl}: AppProps) {
  return (
    <Router basename={baseUrl}>
      <Route path="/" exact component={home} />
      {/* <Route path="/" exact component={login} /> */}
    </Router>
  );
};


export default App;
