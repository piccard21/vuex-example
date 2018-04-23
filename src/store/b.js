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
	actions: {},
	modules: {
		bb: {
			namespaced: true,
			state: {
				zodiac: 'gemini'
			},
			getters: {
				zodiac(state) {
					return state.zodiac;
				}
			}
		}
	}
}