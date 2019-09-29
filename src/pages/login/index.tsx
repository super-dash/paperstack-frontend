import React, { Component } from 'react';
import './style.less';
import gzhuLogoPng from '../../images/gzhu-logo.png';
import Land from './components/land/index';
import Register from './components/register/index';
import { RouteComponentProps } from 'react-router-dom';

class Login extends Component<RouteComponentProps> {
  render() {
    const curComponent = this.props.location.pathname.includes('register') ? <Register buttonName="注册" /> : <Land buttonName="登陆" />;

    return (
      <div className="p-login-page">
        <div className="login-container">
          <div className="gzhu-logo-container">
            <img src={gzhuLogoPng} alt="gzhuLogo.png"/>
          </div>
          { curComponent }
        </div>
      </div>
    );
  }
}

export default Login;
