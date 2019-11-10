import React, { PureComponent } from 'react';
import './style.less';
import { Icon, Upload, Button } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';

class Homework extends PureComponent<RouteComponentProps, {}> {
  render() {
    const title = this.props.location.state ? this.props.location.state.name : '';
    return (
      <div className="detail-page-container">
        <div className="detail-header">
          <div className="go-back-btn">
            <Link to="/home/homework">
              <Icon type="arrow-left" style={{ fontSize: '30px', color: '#000' }} />
            </Link>
          </div>
          <h2>{title}</h2>
        </div>
        <div className="homework-detail-box">
          <div className="detail-box">
            <p>作业名称：我是名字</p>
            <p>发起人：冯元勇（老师）</p>
            <p>截止日期：2019-XX-XX-12:00</p>
            <div className="homework-require-box">
              <div>
                <span>作业要求：</span>
              </div>
              <div className="homework-require">
                <p>1. 完成实验一。</p>
                <p>2. 提交实验一的源代码和实验报告。</p>
              </div>
            </div>
          </div>
          <div className="upload-box">
            <Upload>
              <div className="upload-btn">
                <Icon type="plus" style={{ fontSize: '100px'}} />
                <p>上传作业</p>
              </div>
            </Upload>
          </div>
        </div>
        <div className="comments-container">
          <div className="comments-header">
            <h1>评论和评分</h1>
            <div>
              <Button type="primary">评论</Button>
            </div>
          </div>
          <div className="comments-box">
            <div className="commenter-portrait"></div>
            <div className="commenter-info">
              <h3>冯元勇</h3>
              <span>老师</span>
              <span>发起方</span>
            </div>
            <p>总体完成得不错，有些细节还可以再注意改进一下，继续加油！</p>
            <span className="homework-grade">95分</span>
          </div>
          <div className="comments-box">
            <div className="commenter-portrait"></div>
            <div className="commenter-info">
              <h3>学生一</h3>
              <span>学生 软件171</span>
              <span>参与方</span>
            </div>
            <p>不错不错！</p>
          </div>
          <div className="comments-box">
            <div className="commenter-portrait"></div>
            <div className="commenter-info">
              <h3>学生二</h3>
              <span>学生 软件171</span>
              <span>参与方</span>
            </div>
            <p>大佬大佬。</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homework;
