import React, { Component } from 'react';
import './style.less';
import gzhuLogoPng from '../../images/gzhu-logo.png';
import Identity from './components/identity/index';

class Login extends Component {
  render() {
    return (
      <div className="p-login-page">
        <div className="login-container">
          <div className="gzhu-logo-container">
            <img src={gzhuLogoPng} alt="gzhuLogo.png"/>
          </div>
          <Identity />
        </div>
      </div>
    )
  }
}

export default Login;