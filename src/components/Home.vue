<template>
	<div>
		<div id="hello">
			<h3>Hello {{ name }}</h3>
			<p>sex: {{ sex }}</p>
			<p>age: {{ age }}</p>
			<p>zodiac: {{ zodiac }}</p>
		</div>
		Name: <input type="text" name="name" v-model="name">
	</div>
</template>

<script>
	import { mapGetters, mapMutations , mapActions } from 'vuex';

	export default {
		computed: {
			name: {
				get: function () {
					return this.$store.getters['a/name']
				},
				set: function (newName) {
					this.$store.commit('a/setName', newName);
				}
			},
			zodiac() {
				return this.$store.getters['b/bb/zodiac']
			},
			...mapGetters({
				sex: 'b/sex',
				age: 'a/age'
			})
		},
		methods: {}
	}
</script>

<style scoped>
</style>