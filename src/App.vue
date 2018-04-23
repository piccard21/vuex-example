<template>
	<div id="app">
		<img id="logo" src="./assets/logo.png">
		<br>
		<a :href="url">vuex</a>

		<hr>

		<home></home>

		<hr>

	</div>
</template>

<script>

	import Home from './components/Home.vue'

	export default {
		name: 'app',
		components: {
			Home
		},
		data() {
			return {
				url: 'https://vuex.vuejs.org/en/'
			}
		},
		computed: {},
		methods: {},
		watch: {},
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	#logo {
		height: 120px;
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
