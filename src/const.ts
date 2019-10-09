export const MESSAGE_TIME = 1.5; // message框停留的秒数

export const siderMenu = [
  {
    text: '作业',
    icon: 'book',
    path: 'book',
    children: [
      {
        text: '新建作业',
        icon: 'plus',
        path: 'plus'
      }, {
        text: '浏览作业',
        icon: 'read',
        path: 'read'
      }
    ]
  }, {
    text: '班级&小组',
    icon: 'team',
    path: 'team'
  }, {
    text: '回收站',
    icon: 'delete',
    path: 'recycle'
  }, {
    text: '个人信息',
    icon: 'user',
    path: 'profile'
  }
];
