import Vue from "vue";
import VueRouter from "vue-router";

import IndexMain from "../views/main/IndexMain.vue";
import findPassword from "../views/account/findpassword.vue";
import register from "../views/account/registerform.vue";
import loginform from "../views/account/Login.vue";

Vue.use(VueRouter);

const IndexMyplant = () => {
  return import("../views/myplant/Indexmyplant.vue");
};
const modal = () => {
  return import("../components/myPlant/Modal.vue")
}
const Detailmyplant = () => {
  return import("../views/myplant/Detailmyplant.vue");
};
const Hospital = () => {
  return import("../views/hospital/PlantHospital.vue");
};

const editpage = () => {
  return import("../views/myPage/EditUser.vue")
}
const community = () => {
  return import("../views/community/IndexCommunity.vue")
}
const PostDetail = () => {
  return import("../views/post/PostDetail.vue")
}

const test = () => {
  return import("../views/test.vue")
}

const routes = [
  {
    path: "/",
    name: "IndexMain",
    component: IndexMain,
  },

  {
    path: "/myplant",
    name: "IndexMyplant",
    component: IndexMyplant,
  },

  {
    path: "/myplant/:userId/:plantId",
    name: "Detailmyplant",
    component: Detailmyplant,
  },
  {
    path : '/mypage/editpage',
    name : 'editpage',
    component : editpage,
  }, 
  {
    path : '/community',
    name : 'community',
    component : community
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
  {
    path: "/post/postDetail",
    name: "PostDetail",
    component: PostDetail,
  },

  {
    path: "/test",
    name: "test",
    component: test,

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
