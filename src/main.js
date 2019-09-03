import Vue from 'vue'
import vuex from 'vuex'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router.js'
import http from './http.js'
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(vuex)
const store = new vuex.Store({
  state: {
    scrollTag: false
  },
  mutations: {
    getScolltagTrue(state) {
      state.scrollTag = true
    },
    getScolltagFalse(state) {
      state.scrollTag = false
    },
  }

})
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = http

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
