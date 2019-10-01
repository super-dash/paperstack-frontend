import React, { Component } from 'react';
import './style.less';
import gzhuLogoPng from '@images/gzhu-logo.png';
import Home from './components/home';
import Land from './components/land/index';
import Register from './components/register/index';
import { HomePageCurComponents } from '@src/enums';
import { RouteComponentProps } from 'react-router-dom';
import { autobind } from 'core-decorators';

interface State {
  curComponent: HomePageCurComponents
}

@autobind
class Login extends Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      curComponent: HomePageCurComponents.HOME
    };
  }

  changeCurComponent(curVal: HomePageCurComponents):void {
    this.setState({
      curComponent: curVal
    });
  }

  showCurComponent() {
    const { curComponent } = this.state;

    if (curComponent === HomePageCurComponents.HOME) {
      return <Home changeCurComponent={this.changeCurComponent}/>;
    } else {
      return (
        <div className="login-container">
          <div className="gzhu-logo-container">
            <img src={gzhuLogoPng} alt="gzhuLogo.png"/>
          </div>
          { curComponent === HomePageCurComponents.LOGIN ?
            <Land changeCurComponent={this.changeCurComponent} /> :
            <Register changeCurComponent={this.changeCurComponent} /> }
        </div>
      );
    }
  }

  render() {
    return (
      <div className="p-login-page">
        { this.showCurComponent() }
      </div>
    );
  }
}

export default Login;
