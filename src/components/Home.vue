<template>
	<div>
		<div id="hello">
			<h3>Hello {{ name }}</h3>
			<p>sex: {{ sex }}</p>
			<p>age: {{ age }}</p>
			<p>zodiac: {{ zodiac }}</p>
		</div>
		Name: <input type="text" name="name" @input="setName($event.target.value)">
	</div>
</template>

<script>
	import { mapGetters, mapMutations , mapActions } from 'vuex';

	export default {
		computed: {
			name() {
				return this.$store.getters['a/name']
			},
			zodiac() {
				return this.$store.getters['b/bb/zodiac']
			},
			...mapGetters({
				sex: 'b/sex',
				age: 'a/age'
			})
		},
		methods: {
			setName(user) {
				this.$store.commit('a/setName', user);
			}
		}
	}
</script>

<style scoped>
</style>