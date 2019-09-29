import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './style.less';
import home from './pages/home/index';
import login from './pages/login/index';

interface AppProps {
  baseUrl: string
}

const App : FunctionComponent<AppProps> = function ({baseUrl}: AppProps) {
  return (
    <Router basename={baseUrl}>
      <Route path="/" exact component={home} />
      <Route path="/login" component={login} />
      <Route path="/register" component={login} />
    </Router>
  );
};


export default App;
