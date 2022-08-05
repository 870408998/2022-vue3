//  service统一出口

import GXRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const gxRequest = new GXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("11");
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("22");
      return err;
    },
    responseInterceptor: (res) => {
      console.log("33");
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log("44");
      return err;
    },
  },
});

// export const geRequest2 = new GXRequest({
//   baseURL: BASE_URL,
//   timeout: TIME_OUT,
// });

export default gxRequest;
