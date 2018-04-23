export default {
	methods: {
		goBack () {
			window.history.length > 1
				? this.$router.go(-1)
				: this.$router.push('/')
		},
		goForward () {
			this.$router.go(1)
		},
		goHome() {
			this.$router.push('/');
		}
	}
}