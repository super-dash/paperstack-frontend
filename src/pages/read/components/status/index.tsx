import React, { PureComponent } from 'react';
import './style.less';
import { Icon, Button } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';

const mockData = [
  {
    name: '我',
    class: '软件171',
    isSubmit: true,
  }, {
    name: '同学A',
    class: '软件171',
    isSubmit: true,
  }, {
    name: '同学B',
    class: '软件171',
    isSubmit: false,
  }, {
    name: '同学C',
    class: '软件171',
    isSubmit: true,
  }, {
    name: '同学D',
    class: '软件171',
    isSubmit: true,
  }, {
    name: '同学E',
    class: '软件171',
    isSubmit: false,
  },
];

class Status extends PureComponent<RouteComponentProps, {}> {
  renderStudentStatus() {
    const title = this.props.location.state ? this.props.location.state.name : '';

    return mockData.map(item => {
      return (
        <div className="homework-status-box" key={item.name}>
          <div className="student-portrait"></div>
          <div className="student-info">
            <h3>{item.name}</h3>
            <span>{item.class}</span>
          </div>
          <div className="homework-status-detail-box">
            <span className={item.isSubmit ? 'homework-status' : 'homework-status no-submit-homework'}>{item.isSubmit ? '已提交' :'未提交'}</span>
            <div className="enter-homework-btn">
              <Button type="primary" size="small" onClick={() => this.goHomeworkDetail({name: title})}>进入</Button>
            </div>
            <div className="more-setting-box">
              <Button type="primary" size="small">预览作业</Button>
              <Button type="primary" size="small">下载作业</Button>
            </div>
          </div>
        </div>
      );
    });
  }

  goHomeworkDetail(courseObj: any) {
    const obj = {
      pathname: '/home/homework/detail',
      state: courseObj,
    };
    this.props.history.push(obj);
  }

  render() {
    const title = this.props.location.state ? this.props.location.state.name : '';
    return (
      <div className="status-page-container">
        <div className="status-header">
          <div className="go-back-btn">
            <Link to="/home/homework">
              <Icon type="arrow-left" style={{ fontSize: '30px', color: '#000' }} />
            </Link>
          </div>
          <h2>{title}</h2>
        </div>
        <div className="homework-status-container">
          {this.renderStudentStatus()}
        </div>
      </div>
    );
  }
}

export default Status;
