import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface GXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface GXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: GXRequestInterceptors<T>;
  showLoading?: boolean;
}

// export interface GXRequestInterceptors {
//   requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
//   requestInterceptorCatch?: (error: any) => any;
//   responseInterceptor?: (res: any) => any;
//   responseInterceptorCatch?: (error: any) => any;
// }

// export interface GXRequestConfig extends AxiosRequestConfig {
//   interceptors?: GXRequestInterceptors;
//   showLoading?: boolean;
// }
