<template>
  <div id="app">
    <app-header :seller="seller"></app-header>
		<nav-tab></nav-tab>
		<router-view :goods="goods" :seller="seller"></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import AppHeader from '@/components/Header/Header';
import NavTab from '@/components/NavTab/NavTab';

export default {
	name: 'App',
	components: {
		AppHeader,
		NavTab,
	},
	data() {
		return {
			goods: [],
			ratings: [],
			seller: {},
		};
	},
	mounted() {
		axios.get('/api/data.json')
			.then(res => (res.status === 200 ? res.data : this.handleError()))
			.then(data => this.handledata(data));
	},
	methods: {
		handledata(data) {
			this.goods = data.goods;
			this.ratings = data.ratings;
			this.seller = data.seller;
			this.initFoods(this.goods);
		},
		handleError() {

		},
		...mapActions(['initFoods']),
	},
};
</script>

<style>

</style>
