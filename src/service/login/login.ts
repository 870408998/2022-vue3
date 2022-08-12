import gxRequest from "../index";

import type { IAccount, IDataType, ILoginResult } from "./types";

enum LoginApi {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // 用法: /users/1
  UserMenus = "/role/", // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return gxRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account,
  });
}

export function requestUserInfoById(id: number) {
  return gxRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false,
  });
}

export function requestUserMenusByRoleId(id: number) {
  return gxRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + "/menu",
    showLoading: false,
  });
}
