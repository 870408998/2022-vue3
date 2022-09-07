import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { globalRegister } from "./global";

import "normalize.css";
import "./assets/css/index.less";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupStore } from "./store";

// import "./assets/main.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(store);
setupStore();
app.use(router);
app.use(globalRegister);

app.mount("#app");
