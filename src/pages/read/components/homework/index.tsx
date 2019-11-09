import React, { PureComponent } from 'react';
import './style.less';
import { Icon } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';

const mockData = [
  {
    name: '第一周课后作业',
  }, {
    name: '第二周课后作业',
  }, {
    name: '第三周课后作业',
  }, {
    name: '第四周课后作业',
  }, {
    name: '第五周课后作业',
  }, {
    name: '第六周课后作业',
  }, {
    name: '第七周课后作业',
  }, {
    name: '第八周课后作业',
  }, {
    name: '第九周课后作业',
  }, {
    name: '第十周课后作业',
  }, {
    name: '第十一周课后作业',
  }
];

class Homework extends PureComponent<RouteComponentProps, {}> {
  renderHomeworkItem() {
    return mockData.map(item => {
      return (
        <div className="homework-item" key={item.name}>
          <Icon type="file-text" style={{ fontSize: '90px' }} />
          <p>{item.name}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="homework-page-container">
        <div className="homework-header">
          <div className="go-back-btn">
            <Link to="/home">
              <Icon type="arrow-left" style={{ fontSize: '30px', color: '#000' }} />
            </Link>
          </div>
          <h2>{this.props.location.state.name}</h2>
        </div>
        <div className="homework-box">
          {this.renderHomeworkItem()}
        </div>
      </div>
    );
  }
}

export default Homework;
