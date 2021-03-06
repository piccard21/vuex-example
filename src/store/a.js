export default {

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
			return (state.name.length == 0) ? 'John Doe' : state.name;
		}
	},
	mutations: {
		setName(state, name) {
			state.name = name
		}
	},
	actions: {}
}