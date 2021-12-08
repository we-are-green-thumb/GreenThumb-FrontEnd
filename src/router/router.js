import Vue from "vue";
import VueRouter from "vue-router";

import IndexMain from "../views/main/IndexMain.vue";
import findPassword from "../views/account/findpassword.vue";
import register from "../views/account/registerform.vue";
import loginform from "../views/account/loginform.vue";

Vue.use(VueRouter);

const IndexMyplant = () => {
  return import("../views/myplant/Indexmyplant.vue");
};
const modal = () => {
  return import("../components/myPlant/Modal.vue");
};
const Detailmyplant = () => {
  return import("../views/myplant/Detailmyplant.vue");
};
const Hospital = () => {
  return import("../views/hospital/PlantHospital.vue");
};

const routes = [
  {
    path: "/",
    name: "IndexMain",
    component: IndexMain,
  },

  {
    path: "/myplant/:userId",
    name: "IndexMyplant",
    component: IndexMyplant,
  },

  {
    path: "/myplant/:userId/:plantId",
    name: "Detailmyplant",
    component: Detailmyplant,
  },
  {
    path: "/hospital",
    name: "Hospital",
    component: Hospital,
  },

  {
    path: "/modal",
    name: "modal",
    component: modal,
  },
  {
    path: "/login",
    name: "loginform",
    component: loginform,
  },

  {
    path: "/user2/findpassword",
    name: "findPassword",
    component: findPassword,
  },

  {
    path: "/user2/register",
    name: "register",
    component: register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
});

export default router;
