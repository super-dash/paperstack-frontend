import React, { Component } from 'react';
import './style.less';
import gzhuLogoPng from '@images/gzhu-logo.png';
import { withRouter , RouteComponentProps } from 'react-router-dom';
import { HomePageCurComponents } from '@src/enums';

interface Props extends RouteComponentProps {
  changeCurComponent: (curVal: HomePageCurComponents) => void
}

class Home extends Component<Props> {
  render() {
    const { changeCurComponent } = this.props;

    return (
      <div className="home-container">
        <img src={gzhuLogoPng} alt="gzhuLogo.png"/>
        <div className="title-box">
          <h1>超自然作业派</h1>
          <h1>Paper Stack</h1>
          <h2>博学笃行，与时俱进</h2>
        </div>
        <div className="button-box">
          <button onClick={() => changeCurComponent(HomePageCurComponents.LOGIN)}>登陆</button>
          <button onClick={() => changeCurComponent(HomePageCurComponents.REGISTER)}>注册</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
