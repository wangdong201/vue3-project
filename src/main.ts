import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { Icon } from "@iconify/vue";
import Antd from "ant-design-vue";
const app = createApp(App);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Icon", Icon);
app.use(router).mount("#app");
app.use(Antd);
