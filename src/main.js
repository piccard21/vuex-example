import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import {store} from './store/store'


Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
        created() {
	        // console.info(this.$store.getters['a/name']);
	        console.info("CREATED", this.$store.getters.count);
        }
})
