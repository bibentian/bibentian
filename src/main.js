import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import '@/css/demo.css'

import axios from "axios"
Vue.prototype.$ajax = axios

// import VueJsonp from 'vue-jsonp'
// Vue.use(VueJsonp)

// import TaskNode from 'vue-task-node'
// import "vue-task-node/dist/css/vnode.css"
// Vue.use(TaskNode)

Vue.config.productionTip = false


router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
