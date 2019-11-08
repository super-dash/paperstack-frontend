type EnumText<T extends number> = {
  [k in T]: string
}

export enum HomePageCurComponents {
  HOME = 1, // 首页
  REGISTER = 2, // 注册
  LOGIN = 3 // 登陆
}

export enum LoginType {
  LOGIN_SUCCESS = 0, // 登陆成功
  LOGIN_FAIL = 1, // 登陆失败
}
