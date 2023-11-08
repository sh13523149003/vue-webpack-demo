import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
// import foo from './foo.vue';
import bar from './bar.vue';
const fooAsync = () => (import(
  /* webpackChunkName: "foo" */
  './foo.vue'
));
const routes = [
  { path: '/foo', component: fooAsync },
  { path: '/bar', component: bar }
]

const router = new VueRouter({
  routes
})
//this is start
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');