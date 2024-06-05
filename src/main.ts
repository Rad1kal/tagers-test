import App from "./App.vue";
import router from './router';
import { createApp } from "vue";
const main = createApp(App);

main.use(router);
main.mount("#main");
