import React, { Component } from 'react';
import { Modal, Button, Form, Input, Select, Radio } from 'antd';
import { autobind } from 'core-decorators';
import { FormComponentProps } from 'antd/es/form';
import { formItemLayout } from '@src/const/const';

const { Option } = Select;
interface Props extends FormComponentProps {
  modalVisible: boolean,
  handleCancel: () => void
}

interface State {
  loading: boolean
}

@autobind
class EditProfile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleOk() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    const { loading } = this.state;
    const { modalVisible: visible, handleCancel } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        visible={visible}
        title="编辑个人信息"
        onOk={this.handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>取消</Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={this.handleOk}
          >
            保存
          </Button>
        ]}
      >
        <Form {...formItemLayout}>
          <Form.Item label="姓名">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '姓名不能为空' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="学号">
            {getFieldDecorator('studentId', {
              rules: [{ required: true, message: '学号不能为空' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="性别">
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: '性别不能为空' }],
            })(
              <Radio.Group>
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </Radio.Group>,
            )}
          </Form.Item>
          <Form.Item label="学院">
            {getFieldDecorator('college', {
              rules: [{ required: true, message: '学院不能为空' }],
            })(
              <Select placeholder="">
                <Option value="usa">U.S.A</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="班级">
            {getFieldDecorator('class', {
              rules: [{ required: true, message: '班级不能为空' }],
            })(
              <Select placeholder="">
                <Option value="usa">U.S.A</Option>
              </Select>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

// export default EditProfile;
export default Form.create<Props>({})(EditProfile);
