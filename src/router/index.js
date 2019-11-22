import Vue from 'vue';
import Router from 'vue-router';
import auth from '../services/auth';

import login from '../pages/login';
import index from '../pages/main';
import PageQuote from '../pages/PageQuote';
import PageQuoteDetail from '../pages/PageQuoteDetail';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,

    },
    {
      path: '/main',
      name: 'index',
      component: index,
      children:[
        {
          path: '/',
          component: PageQuote,
          beforeEnter(to, from, next){
            if(auth.isAuthenticated()){
              console.log(auth.isAuthenticated())
              next();
            }else{
              next({
                name:'login'
              });
            }
          }
        },
        {
          path:'/pagequotedetail',
          component:PageQuoteDetail
        }
      ]
    },
  ],
  mode: 'history',
});
