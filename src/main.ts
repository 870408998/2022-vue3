import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "normalize.css";
import "./assets/css/index.less";

// import "./service/axios.demo";
import gxRequest from "./service";

import App from "./App.vue";

import router from "./router";
import store from "./store";

// import "./assets/main.css";

const app = createApp(App);

app.use(ElementPlus);
app.use(store);
app.use(router);

app.mount("#app");

interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}
gxRequest
  .request<DataType>({
    url: "/home/multidata",
    method: "GET",
  })
  .then((res) => {
    console.log("kkk", res.data);
  });

// gxRequest.request({
//   url: "/home/multidata",
//   method: "GET",
//   showLoading: false,
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("单独请求的config");
//       return config;
//     },
//     responseInterceptor: (res) => {
//       console.log("单独响应的res");
//       return res;
//     },
//   },
// });
