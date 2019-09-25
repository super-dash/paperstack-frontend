import React, { Component } from 'react';
import './style.less';
import gzhuLogoPng from '../../images/gzhu-logo.png';
import Land from './components/land/index';

class Login extends Component {
  render() {
    return (
      <div className="p-login-page">
        <div className="login-container">
          <div className="gzhu-logo-container">
            <img src={gzhuLogoPng} alt="gzhuLogo.png"/>
          </div>
          <Land />
        </div>
      </div>
    )
  }
}

export default Login;