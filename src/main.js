// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import '../src/assets/appstyle.css';
import '../src/assets/libs/popper.min.js';


import Vue from 'vue';
import App from './App';
import router from './router';
import Header from './components/Header'
import LeftBar from './components/LeftBar'
import Menu from './components/Menu'
import Sum from './components/Sum'
import ViewLogin from './components/ViewLogin'
import Content from './components/Content'

Vue.config.productionTip = false;
Vue.component('app-header', Header);
Vue.component('app-leftbar', LeftBar);
Vue.component('app-menu', Menu);
Vue.component('app-sum', Sum);
Vue.component('app-viewlogin', ViewLogin)
Vue.component('app-content', Content)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

