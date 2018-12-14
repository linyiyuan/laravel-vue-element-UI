import Vue from 'vue'
import store from './store/'
import ElementUI from 'element-ui'
import './theme/index.css'
import './assets/css/font-awesome.min.css'
import './assets/css/style.css'
import './assets/js/particles.min.js'
import router from './router/'
import Config from './config/'
import Api from './api/'
import Function from './utils/'
import Axios from 'axios';

import App from './App.vue'
Vue.prototype.$Api = Api;
Vue.prototype.$store = store;
Vue.prototype.$Config = Config;
Vue.prototype.$Func = Function;

Vue.use(ElementUI)

// 路由登录前操作
router.beforeEach((to, from, next) => {

  window.document.title = to.meta.title?to.meta.title+'-'+Config.siteName:Config.siteName;

  if (!sessionStorage.getItem(Config.tokenKey) && to.path != '/admin/login') {
    next({path: '/admin/login'});

  } else {
      // 自定义的 axios 响应拦截器
      Axios.interceptors.response.use((response) => {
          // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
          var token = response.headers.authorization
          if (token) {
              token = token.replace(/Bearer/g,"");
              //分发任务到Vuex，刷新本地token
              store.dispatch('refreshToken', token);
          }
          return response
      }, (error) => {
          switch (error.response.status) {

              // 如果响应中的 http code 为 401，那么则此用户可能 token 失效了之类的，我会触发 logout 方法，清除本地的数据并将用户重定向至登录页面
              case 401:
                  sessionStorage.removeItem(Config.tokenKey);
                  next({path: '/admin/login'});
                  break;
              // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
              case 400:
                  return this.$Message.error(error.response.data.error);
                  break;
          }
          return Promise.reject(error)
      })

    next();
  }
});

// 路由登录后操作
router.afterEach(transition => {

});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
