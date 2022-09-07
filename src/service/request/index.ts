import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { GXRequestInterceptors, GXRequestConfig } from "./type";

import { ElLoading } from "element-plus";

const DEFAULT_LOADING = true;

class GXRequest {
  instance: AxiosInstance;
  interceptors?: GXRequestInterceptors;
  showLoading: boolean;
  loading?: any;

  //  1.从config中取出的是对应的实例的拦截器
  constructor(config: GXRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    // 保存基本信息
    console.log(" config.showLoading111", config.showLoading);
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    this.interceptors = config.interceptors;

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("this.showLoading", this.showLoading);
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据....",
            background: "rgba(0, 0, 0, 0.5)",
          });
        }
        return config;
      },
      (err) => {
        console.log("所有的实例都有的拦截器: 请求失败拦截");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close();
        const data = res.data;
        console.log("所有的实例都有的拦截器: 响应成功拦截", data);
        return data;
      },
      (err) => {
        this.loading?.close();
        console.log("所有的实例都有的拦截器: 响应失败拦截");
        return err;
      }
    );
  }

  request<T=any>(config: GXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      console.log("config.showLoading", config.showLoading);
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;

          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
          reject(err);
          return err;
        });
    });
  }

  get<T=any>(config: GXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T=any>(config: GXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }

  delete<T=any>(config: GXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T=any>(config: GXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default GXRequest;
