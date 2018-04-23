<template>
	<div id="app">
		<img id="logo" src="./assets/logo.png">
		<br>
		<a :href="url">vuex</a>

		<hr>

		<router-link to="/">Home</router-link>

		<hr>

		<router-view></router-view>

		<hr>

		<p>
			<button @click="goHome">Go Home</button>
			<input type="button" value="back" @click="goBack">
			<input type="button" value="forward" @click="goForward">
		</p>
	</div>
</template>

<script>

	import History from './mixins/History';

	export default {
		name: 'app',
		mixins: [History],
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
