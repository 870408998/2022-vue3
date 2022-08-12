import type { Module } from "vuex";
import type { ILoginState } from "./types";
import type { IRootState } from "../types";
import type { IAccount } from "@/service/login/types";
import localCache from "@/utils/cache";
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId,
} from "@/service/login/login";
import router from "@/router";
import { mapMenusToRoutes } from "@/utils/map-menus";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },

    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },

    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
      const routes = mapMenusToRoutes(userMenus);
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
    },
  },
  actions: {
    // 1.实现登录逻辑
    async accountLoginAction({ commit }, payLoad: IAccount) {
      const loginRes = await accountLoginRequest(payLoad);
      const { id, token } = loginRes.data;
      commit("changeToken", token);
      localCache.setCache("token", token);

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      localCache.setCache("userInfo", userInfo);

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id);
      const userMenus = userMenusResult.data;
      commit("changeUserMenus", userMenus);
      localCache.setCache("userMenus", userMenus);
      // 4.跳到首页
      router.push("/main");
    },

    phoneLoginAction({ commit }, payLoad: any) {},

    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        commit("changeUserMenus", userMenus);
      }
    },
  },
};

export default loginModule;
