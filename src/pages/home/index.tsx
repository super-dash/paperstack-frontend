import React, { Component } from 'react';
import './style.less';
import { Route, Link, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { autobind } from 'core-decorators';
import { siderMenu } from '@src/const';
import Login from '../login';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

interface State {
  collapsed: boolean,
}

@autobind
class Home extends Component<RouteComponentProps, State> {
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
    const { match } = this.props;

    if (menu.children) {
      const menuItems = (menu.children).map((item: any) => (
        <Menu.Item key={item.id}>
          <Link to={`${match.url}/${item.icon}`}>
            <Icon type={item.icon} />
            <span>{item.text}</span>
          </Link>
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
          <Link to={`${match.url}/${menu.icon}`}>
            <Icon type={menu.icon} />
            <span>{menu.text}</span>
          </Link>
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
    const { match } = this.props;
    console.log(match);

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
            <Route path={`${match.url}/:id`} component={Login}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
