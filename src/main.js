import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {store} from './store/store'

// lazy-loading
const Home = () => import('./components/Home.vue')

Vue.use(Vuex);
Vue.use(VueRouter);
 
const routes = [
	{ path: '/', component: Home}
];

const router = new VueRouter({
  	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
        created() {
	        // console.info(this.$store.getters['a/name']);
	        console.info("CREATED", this.$store.getters.count);
        }
})
