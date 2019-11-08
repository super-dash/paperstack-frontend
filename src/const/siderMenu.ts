import Profile from '@src/pages/user/profile';
import Recycle from '@src/pages/recycle';
import Read from '@src/pages/read';
import Plus from '@src/pages/plus';

interface MenuComponent {
  [index: string]: any
}

export const siderMenu = [
  {
    text: '作业',
    icon: 'book',
    key: 'book',
    path: 'book',
    children: [
      {
        text: '新建作业',
        icon: 'plus',
        key: 'plus',
        path: 'plus',
        component: Plus,
      }, {
        text: '浏览作业',
        icon: 'read',
        key: 'read',
        path: 'read',
        component: Read,
      }
    ]
  }, {
    text: '回收站',
    icon: 'delete',
    key: 'recycle',
    path: 'recycle',
    component: Recycle,
  }, {
    text: '个人信息',
    icon: 'user',
    key: 'profile',
    path: 'profile',
    component: Profile,
  }
];

export const menuComponent:MenuComponent = {};

// 以menu的key作为对象的key，对应的组件作为值生成一个对象，用于匹配不同menu下的页面
(function createMenuComponent(menuList: Array<any>) {
  for(const item of menuList) {
    if (Array.isArray(item.children)) {
      createMenuComponent(item.children);
    } else {
      menuComponent[item.key] = item.component;
    }
  }
})(siderMenu)
