import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexMain from '../views/main/IndexMain.vue'
Vue.use(VueRouter)

const IndexMyplant = () => {
  return import("../views/myplant/Indexmyplant.vue")
}
const modal = () => {
  return import("../components/myPlant/Modal.vue")
}

const editpage = () => {
  return import("../views/myPage/EditUser.vue")
}
const community = () => {
  return import("../views/community/IndexCommunity.vue")
}


const routes = [
  {
    path : '/',
    name : 'IndexMain',
    component : IndexMain
  },    
  
  {
    path : '/myplant/:userId',
    name : 'IndexMyplant',
    component : IndexMyplant
  },
  {
    path : '/modal',
    name : 'Modal',
    component : modal
  }, 
  {
    path : '/mypage/editpage',
    name : 'editpage',
    component : editpage,
    // beforeEnter: (to, from, next) => {
    //   // console.log(to,from);
    //   // console.log(to.path);
    //   // console.log(from.path);
    //   // next();

    //   // if(from.path ==="/mypage"){
    //   //   next();
    //   // }else{
    //   //   next('/');
    //   // }
    // }
  }, 
  {
    path : '/community',
    name : 'community',
    component : community
  }, 
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // scrollBehavior (to, from, savedPosition) {
    //   return { x: 0, y: 0 }
    // }
  });
    
  export default router