import React, { PureComponent } from 'react';
import './style.less';
import { Button, Icon } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const mockData = [
  {
    name: '计算机网络',
    teacher: '唐琳',
    time: '大三上',
  }, {
    name: '操作系统',
    teacher: '陶文正',
    time: '大三上',
  }, {
    name: '编译原理',
    teacher: '冯元勇',
    time: '大三下',
  }, {
    name: '数据结构',
    teacher: '杜娇',
    time: '大二下',
  }
];

class Read extends PureComponent<RouteComponentProps, {}> {
  goHomeworkPage(courseObj: any) {
    const obj = {
      pathname: '/home/homework',
      state: courseObj,
    };
    this.props.history.push(obj);
  }

  renderCourseItem() {
    return mockData.map(item => {
      return (
        <div key={item.name} className="course-item-box">
          <Icon type="file" style={{ fontSize: '40px', color: '#449df5' }} />
          <span className="course-name">{item.name}</span>
          <div className="course-info">
            <span>{item.time}</span>
            <span>&nbsp;- {item.teacher}</span>
          </div>
          <div className="visit-course-btn">
            <Button type="primary" onClick={() => this.goHomeworkPage({name: item.name})}>进入</Button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="course-page-container">
        <h2>所有科目</h2>
        <div className="course-box">
          {this.renderCourseItem()}
        </div>
      </div>
    );
  }
}

export default withRouter(Read);
