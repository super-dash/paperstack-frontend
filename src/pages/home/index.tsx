import React, { Component } from 'react';
import './style.less';
import { Layout, Menu, Icon } from 'antd';
import { autobind } from 'core-decorators';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const siderMenu = [
  {
    text: '作业',
    icon: 'book',
    id: '1',
    children: [
      {
        text: '新建作业',
        icon: 'plus',
        id: '1-1'
      }, {
        text: '浏览作业',
        icon: 'read',
        id: '1-2'
      }
    ]
  }, {
    text: '班级&小组',
    icon: 'team',
    id: '2'
  }, {
    text: '回收站',
    icon: 'delete',
    id: '3'
  }
];

interface State {
  collapsed: boolean,
}

@autobind
class Home extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggleSider() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  createMenuItem(menu: any) {
    if (menu.children) {
      const menuItems = (menu.children).map((item: any) => (
        <Menu.Item key={item.id}>
          <Icon type={item.icon} />
          <span>{item.text}</span>
        </Menu.Item>
      ));

      return (
        <SubMenu
          key={menu.id}
          title={
            <span>
              <Icon type={menu.icon} />
              <span>{menu.text}</span>
            </span>
          }
        >
          {menuItems}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={menu.id}>
          <Icon type={menu.icon} />
          <span>{menu.text}</span>
        </Menu.Item>
      );
    }
  }

  createSider() {
    return siderMenu.map(item =>
      this.createMenuItem(item)
    );
  }

  render() {
    return (
      <Layout className="p-home">
        <Sider
          className="layout-sider"
          trigger={null}
          collapsible collapsed={this.state.collapsed}
        >
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <div className="collapsed-btn">
              <Icon
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggleSider}
              />
            </div>
            {this.createSider()}
          </Menu>
        </Sider>

        <Layout>
          <Content>
            <div>hello word</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
