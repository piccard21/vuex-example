import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './a';
import moduleB from './b';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	}
})