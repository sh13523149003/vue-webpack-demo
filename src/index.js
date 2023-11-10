import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import foo from './foo.vue';
import bar from './bar.vue';
const routes = [
  { path: '/foo', component: foo, name: 'foo' },
  {
    path: '/bar',
    name: 'bar',
    component: bar,
  },
  {
    path: '/*',
    name: 'login',
    beforeEnter(to, from, next) {// tslint:disable-line
      next({ name: 'bar' });
    },
  },
]

const router = new VueRouter({
  mode: 'history', // Use history mode
  routes
})
router.beforeEach((to, from, next) => {// tslint:disable-line
  if (to.path === '/') {
    next({ name: bar });
    return
  }
  next();
});
//this is start
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');