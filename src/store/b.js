export default {

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