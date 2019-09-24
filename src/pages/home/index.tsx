import React, { Component } from 'react';
import './style.less';
import gzhuLogoPng from '../../images/gzhu-logo.png';
import { withRouter , RouteComponentProps, Link} from 'react-router-dom';

interface Props extends RouteComponentProps {}

class Home extends Component<Props> {
  render() {
    return (
      <div className="p-home-page">
        <div className="home-container">
          <img src={gzhuLogoPng} alt="gzhuLogo.png"/>
          <div className="title-box">
            <h1>超自然作业派</h1>
            <h1>Paper Stack</h1>
            <h2>博学笃行，与时俱进</h2>
          </div>
          <div className="button-box">
            <Link to="/login">
              <button>登陆</button>
            </Link>
            <button>注册</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);