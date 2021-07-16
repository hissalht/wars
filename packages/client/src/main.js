import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "normalize.css/normalize.css";

import App from "./App.vue";
import Editor from "./pages/Editor.vue";
import Home from "./pages/Home.vue";
import Game from "./pages/Game.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/editor", component: Editor },
    { path: "/games/:id", component: Game },
  ],
});

createApp(App).use(router).mount("#app");
