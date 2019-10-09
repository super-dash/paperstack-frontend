import React, { Component, Fragment } from 'react';
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
      modalVisible: true
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
        <Button type="primary" onClick={this.showModal}>编辑个人信息</Button>
        <EditProfile
          modalVisible={modalVisible}
          handleCancel={this.handleCancel}
        />
      </Fragment>
    )
  }
} 

export default UserProfile;