import React, { Component, Fragment } from 'react';
import './style.less';
import { Button } from 'antd';
import { autobind } from 'core-decorators';
import EditProfile from '@src/pages/user/edit';

interface State {
  modalVisible: boolean
}

@autobind
class UserProfile extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    const { modalVisible} = this.state;

    return (
      <Fragment>
        <div className="profile-container">
          <div className="porfile-box">
            <div className="portrait">用户头像</div>
            <div className="user-info">
              <p>有马公生</p>
              <p>
                <span>性别：</span>
                <span>学院：</span>
              </p>
              <p>
                <span>学号：</span>
                <span>班级：</span>
              </p>
            </div>
            <div className="edit-info-btn">
              <Button type="primary" onClick={this.showModal}>编辑个人信息</Button>
            </div>
          </div>
          <div className="user-info-container">
            <div className="user-projects">
              <div className="project-setting">
                <label>我参与的项目</label>
                <span>新建作业项目</span>
                <span>导出</span>
              </div>
              <div className="project-content"></div>
            </div>
            <div className="user-setting">
              <span>账号绑定</span>
              <span>修改邮箱地址</span>
              <span>修改密码</span>
              <span>注销账号</span>
              <span>个性化设置</span>
            </div>
          </div>
        </div>
        <EditProfile
          modalVisible={modalVisible}
          handleCancel={this.handleCancel}
        />
      </Fragment>
    );
  }
}

export default UserProfile;
