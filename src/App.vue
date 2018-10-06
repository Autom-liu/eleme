<template>
  <div id="app">
    <app-header :seller="seller"></app-header>
		<nav-tab></nav-tab>
		<router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
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
		},
		handleError() {

		},
	},
};
</script>

<style>

</style>
