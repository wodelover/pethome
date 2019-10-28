import Vue from 'vue'
import App from './App.vue'

// 导入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入路由器配置项
import router from '@/router/index'

Vue.config.productionTip = false
Vue.use(ElementUI)


router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    var user = sessionStorage.getItem('user')
    if (to.meta.auth) {
      if (user) {
        next()
      } else {
        next('/login')
      }
    }else{
      next()
    }
  }

})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')