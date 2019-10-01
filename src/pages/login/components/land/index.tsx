import React, { Component } from 'react';
import './style.less';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Form, Input, Button, Icon, message } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { LoginType, LoginText, HomePageCurComponents } from '@src/enums';
import { MESSAGE_TIME } from '@src/const';
import { loginUser } from '@api/login';
import { autobind } from 'core-decorators';

interface Props extends FormComponentProps, RouteComponentProps {
  changeCurComponent: (curVal: HomePageCurComponents) => void
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

@autobind
class Land extends Component<Props, any> {
  confirmLogin(e: any) {
    e.preventDefault();

    this.props.form.validateFields(async (err, values) => {
      if (err) {
        message.error('登陆失败', MESSAGE_TIME);
        return;
      }

      const res: LoginType = (await loginUser(values)).result;
      if (res === LoginType.LOGIN_SUCCESS) {
        message.success('登陆成功', MESSAGE_TIME);
        this.props.history.push('/content');
      } else {
        this.props.form.setFields({
          password: {
            value: values.password,
            errors: [new Error(LoginText[res])],
          }
        });
        message.error('登陆失败', MESSAGE_TIME);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { changeCurComponent } = this.props;

    return (
      <Form onSubmit={(e: any) => this.confirmLogin(e)} className="land-box">
        <Form.Item>
          {getFieldDecorator('email', {
            validateFirst: true,
            validateTrigger: 'onBlur',
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
            validateFirst: true,
            rules: [{ required: true, message: '密码不能为空' }],
          })(
            <Input.Password
              prefix={<Icon type="lock" />}
              placeholder="请输入密码"
              allowClear
            />
          )}
        </Form.Item>
        <Button className="land-login-btn" htmlType="submit">登陆</Button>
        <div className="land-footer">
          <span
            className="land-footer-item land-footer-item-hover"
            onClick={() => changeCurComponent(HomePageCurComponents.HOME)}
          >
            返回上层
          </span>
          <span className="land-footer-item land-footer-item-hover">忘记密码?</span>
        </div>
      </Form>
    );
  }
}

export default withRouter(Form.create<Props>({})(Land));
