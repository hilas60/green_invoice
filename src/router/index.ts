import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../views/WelcomeView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserInfoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === "/welcome") {
    if (!store.state.user) {
      next("/");
    }
  }
  if (to.fullPath === "/user") {
    if (!store.state.user) {
      next("/");
    }
  }
  next();
});

export default router;
