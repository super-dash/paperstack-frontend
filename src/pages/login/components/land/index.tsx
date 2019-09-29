import React, { Component } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
import 'core-decorators';
import { loginUser } from '../../../../api/modules/login';
import { Form, Input, Button, Icon } from 'antd';
import { FormComponentProps } from 'antd/es/form';

interface Props extends FormComponentProps {
  buttonName: string,
}

const loginEmailRules: object[] = [
  {
    type: 'email',
    message: '邮箱格式不正确',
  },
  {
    required: true,
    message: '邮箱不能为空',
  },
];

class Land extends Component<Props, any> {
  confirmLogin(e: any) {
    e.preventDefault();

    console.log('test');
    this.props.form.validateFields(async (err, values) => {
      const res = (await loginUser(values)).result;

      console.log(values);
      console.log(res);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={(e: any) => this.confirmLogin(e)} className="land-box">
        <Form.Item>
          {getFieldDecorator('email', {
            validateFirst: true,
            rules: loginEmailRules
          })(
            <Input
              prefix={<Icon type="user" />}
              placeholder="请输入邮箱"
              allowClear
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码不能为空' }],
          })(
            <Input.Password
              prefix={<Icon type="lock" />}
              placeholder="请输入密码"
              allowClear
            />
          )}
        </Form.Item>
        <Button className="land-login-btn" htmlType="submit">{this.props.buttonName}</Button>
        <div className="land-footer">
          <span className="land-footer-item land-footer-item-hover">
            <Link to="/">返回上层</Link>
          </span>
          <span className="land-footer-item land-footer-item-hover">忘记密码?</span>
        </div>
      </Form>
    );
  }
}

export default Form.create<Props>({})(Land);
