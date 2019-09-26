import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './style.less';
import home from '../src/pages/home/index';
import login from '../src/pages/login/index';


interface AppProps {
  baseUrl: string
}


const App : FunctionComponent<AppProps> = function ({baseUrl}: AppProps) {
  return (
    <Router basename={baseUrl}>
      <Route path="/" exact component={home} />
      <Route path="/login" component={login} />
    </Router>
  );
};


export default App;
