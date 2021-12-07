import Vue from 'vue'
import router from './router/router'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// new Vue({
//   el : "#app",
//   router,
//   template:<App/>,
//   components: {App}
// });