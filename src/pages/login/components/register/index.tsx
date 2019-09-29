import React, { Component } from 'react';
import '../land/style.less';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Form, Input, Button, Icon, message } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { checkEmail, registerEmail } from '../../../../api/modules/login';
import { autobind } from 'core-decorators';

interface Props extends RouteComponentProps, FormComponentProps {
  buttonName: string
}

const registerEmailRule: object[] = [
  {
    type: 'email',
    message: '邮箱格式不正确',
  }, {
    required: true,
    message: '邮箱不能为空',
  }, {
    validator: async function(rule: any, value: string, callback: any) {
      const isEmailOk = (await checkEmail(value)).available;
      if(!isEmailOk) {
        callback('该邮箱已经注册过了');
      } else {
        callback();
      }
    }
  }
];

@autobind
class Register extends Component<Props, any> {
  confirmRegister(e: any) {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        message.error('error');
        return;
      }

      const res:boolean = (await registerEmail(values)).result;
      if (res) {
        message.success('注册成功');
        this.props.history.push('/login');
      } else {
        message.error('注册失败');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={e => this.confirmRegister(e)} className="land-box">
        <Form.Item>
          {getFieldDecorator('email', {
            validateFirst: true,
            validateTrigger: 'onBlur',
            rules: registerEmailRule
          })(
            <Input
              prefix={<Icon type="user" />}
              placeholder="请输入邮箱"
              allowClear
              onBlur={e => checkEmail(e.target.value)}
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
        </div>
      </Form>
    );
  }
}

export default withRouter(Form.create<Props>({})((Register)));
