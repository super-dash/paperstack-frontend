import React, { PureComponent } from 'react';
import './style.less';
import { Input, Form, Select, DatePicker, Icon, Button } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { formItemLayout } from '@src/const/const';

const { Option } = Select;
const { RangePicker } = DatePicker;

class Plus extends PureComponent<FormComponentProps, {}> {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="plus-course-container">
        <h2>新建</h2>
        <div className="homework-form-container">
          <Form {...formItemLayout}>
            <Form.Item label="作业名称">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '作业名称不能为空' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="科目">
              {getFieldDecorator('course', {
                rules: [{ required: true, message: '科目不能为空' }],
              })(
                <Select placeholder="">
                  <Option value="计算机网络">计算机网络</Option>
                  <Option value="数据结构">数据结构</Option>
                  <Option value="操作系统">操作系统</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="日期">
              {getFieldDecorator('time', {
                rules: [{ required: true, message: '日期不能为空' }],
              })(
                <RangePicker />
              )}
            </Form.Item>
            <Form.Item label="作业要求">
              <div className="edit-homework-btn">
                <Icon type="plus-circle" style={{ fontSize: '30px' }} />
              </div>
            </Form.Item>
            <Form.Item label="参与方">
              {getFieldDecorator('people', {
                rules: [{ required: true, message: '参与方不能为空' }],
              })(
                <div className="people-picker">
                  <div>
                    <p>软件171</p>
                    <p>软件172</p>
                    <p>软件173</p>
                    <p>软件174</p>
                    <p>计科171</p>
                    <p>计科172</p>
                    <p>计科173</p>
                    <p>计科174</p>
                  </div>
                  <span>—</span>
                  <div>
                    <p>同学A</p>
                    <p>同学B</p>
                    <p>同学C</p>
                    <p>同学D</p>
                    <p>同学E</p>
                    <p>同学F</p>
                    <p>同学G</p>
                    <p>同学H</p>
                  </div>
                </div>
              )}
            </Form.Item>
          </Form>
        </div>
        <div className="setting-btn">
          <Button type="primary">确定</Button>
          <Button type="primary">取消</Button>
        </div>
      </div>
    );
  }
}

export default Form.create({})(Plus);
