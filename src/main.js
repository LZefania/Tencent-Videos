import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui';
import $ from 'jquery'

Vue.use(VueRouter);
Vue.use(Mint);

import router from './assets/js/router.js'
import '../node_modules/mint-ui/lib/style.css'
import './assets/js/iconfont.js'
import './assets/css/cssreset.css'
import './assets/css/commom.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
