type EnumText<T extends number> = {
  [k in T]: string
}

export enum LoginType {
  LOGIN_SUCCESS = 1, // 登陆成功
  LOGIN_ERROR = 2, // 邮箱或密码错误
  LOGIN_NO_EXIST = 3 // 邮箱不存在,
}

export const LoginText: EnumText<LoginType> = {
  [LoginType.LOGIN_SUCCESS]: '登陆成功',
  [LoginType.LOGIN_ERROR]: '邮箱或密码错误',
  [LoginType.LOGIN_NO_EXIST]: '邮箱不存在'
}
