import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
import 'core-decorators';
import { Input, Button } from 'antd';
import { checkEmail } from '../../../../api/modules/login';

class Land extends Component {
  componentDidMount() {
    const temp = '1341514988@qq.com'
    let a = checkEmail(temp);
    console.log(a);
  }

  render() {
    return (
      <div className="land-box">
        <Input
          className="land-user-input"
          placeholder="请输入邮箱"
          allowClear
        />
        <Input.Password
          className="land-password-input"
          placeholder="请输入密码"
          allowClear
        />
        <Button className="land-login-btn">登陆</Button>
        <div className="land-footer">
          <span className="land-footer-item land-footer-item-hover">
            <Link to="/">返回上层</Link>
          </span>
          <span className="land-footer-item land-footer-item-hover">忘记密码?</span>
        </div>
      </div>
    )
  }
}
export default Land;
