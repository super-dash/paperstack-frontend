type EnumText<T extends number> = {
  [k in T]: string
}

export enum RegisterType {
  REGISTER_SUCCESS = 1, // 注册成功
  REGISTER_ERROR = 2 // 注册失败
}

export const RegisterText: EnumText<RegisterType> = {
  [RegisterType.REGISTER_SUCCESS]: '注册成功',
  [RegisterType.REGISTER_ERROR]: '注册失败'
}
