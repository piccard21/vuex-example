import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const moduleA = {
	namespaced: true,
	state: {
		age: '21',
		name: 'Veronica',
	},
	getters: {
		age(state) {
			return state.age + "years";
		},
		name(state) {
			return state.name;
		}
	},
	mutations: {
		setName(state, name) {
			state.name = name
		}
	},
	actions: {}
}

const moduleB = {
	namespaced: true,
	state: {
		sex: 'female'
	},
	getters: {
		sex(state) {
			return state.sex;
		}
	},
	mutations: {},
	actions: {}
}

export const store = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	}
})