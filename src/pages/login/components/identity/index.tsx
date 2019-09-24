import React, { Component } from 'react';
import './style.less';
import { withRouter , RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps {}

class Identity extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.turnHome = this.turnHome.bind(this);
  }

  turnHome() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="identity-box">
        <p className="identity-tip">用户类型</p>
        <button className="indentity-btn">学生</button>
        <button className="indentity-btn">教师</button>
        <p className="identity-back" onClick={this.turnHome}>返回上层</p>
      </div>
    )
  }
}
export default withRouter(Identity);
