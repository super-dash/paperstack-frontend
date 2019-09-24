import React, { Component } from 'react';
import './style.less';

class Identity extends Component {
  render() {
    return (
      <div className="identity-box">
        <p className="identity-tip">用户类型</p>
        <button className="indentity-btn">学生</button>
        <button className="indentity-btn">教师</button>
        <p className="identity-back">返回上层</p>
      </div>
    )
  }
}

export default Identity;
