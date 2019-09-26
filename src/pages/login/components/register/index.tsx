import React, { Component } from 'react';
import '../land/style.less';
import { Link } from 'react-router-dom';
import 'core-decorators';
import { Form, Input, Button, Icon } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { checkEmail } from '../../../../api/modules/login';

interface Props extends FormComponentProps {
  buttonName: string
}

class Land extends Component<Props, any> {
  test() {
    console.log('test');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <Form onSubmit={this.test} className="land-box">
        <Form.Item>
          {
            getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: '邮箱格式不正确',
                },
                {
                  required: true,
                  message: '邮箱不能为空',
                },
              ],
            })(
              <Input
                prefix={<Icon type="user" />}
                placeholder="请输入邮箱"
                allowClear
                onBlur={e => checkEmail(e.target.value)}
              />
            )
          }
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
    )
  }
}

export default Form.create({})(Land);