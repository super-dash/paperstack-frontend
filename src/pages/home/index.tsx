import React, { Component } from 'react';
import './style.less';
import { Route, Link, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { autobind } from 'core-decorators';
import { siderMenu, menuComponent } from '@src/const/siderMenu';
import MenuItem from 'antd/lib/menu/MenuItem';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

interface State {
  collapsed: boolean,
  curMenu: string
}

@autobind
class Home extends Component<RouteComponentProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
      curMenu: siderMenu[0].children ? siderMenu[0].children[1].key : siderMenu[0].key
      // curMenu: siderMenu[0].children ? siderMenu[0].children[0].key : siderMenu[0].key
    };
  }

  componentDidMount() {
    console.log(this.props.location.state, !sessionStorage.getItem('paper_stack'));
    console.log(sessionStorage.getItem('paper_stack'), !sessionStorage.getItem('paper_stack'));
    if (!this.props.location.state && !sessionStorage.getItem('paper_stack')) {
      this.props.history.push('/login');
      return;
    }
    if (!sessionStorage.getItem('paper_stack')) {
      sessionStorage.setItem('paper_stack', this.props.location.state.email);
    }
  }

  toggleSider() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  changeCurMenu(curVal: string) {
    this.setState({
      curMenu: curVal
    });
  };

  createMenuItem(menu: any) {
    const { match } = this.props;

    if (menu.children) {
      const menuItems = (menu.children).map((item: any) => (
        <Menu.Item key={item.key} onClick={e => this.changeCurMenu(e.key)}>
          <Link to={`${match.url}/${item.path}`}>
            <Icon type={item.icon} />
            <span>{item.text}</span>
          </Link>
        </Menu.Item>
      ));

      return (
        <SubMenu
          key={menu.key}
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
        <Menu.Item key={menu.key} onClick={e => this.changeCurMenu(e.key)}>
          <Link to={`${match.url}/${menu.path}`}>
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
    const { curMenu } = this.state;

    return (
      <Layout className="p-home">
        <Sider
          className="layout-sider"
          trigger={null}
          collapsible collapsed={this.state.collapsed}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={[`${siderMenu[0].key}`]}
            defaultSelectedKeys={[`${curMenu}`]}
          >
            <MenuItem className="collapsed-btn" onClick={this.toggleSider}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
              <span>Paper Stack</span>
            </MenuItem>

            {this.createSider()}
          </Menu>
        </Sider>

        <Layout>
          <Content>
            <Route path={`${match.url}/:id`} component={menuComponent[curMenu]}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
