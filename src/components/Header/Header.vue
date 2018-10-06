<template>
	<div id="header">
		This is Header
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		seller: Object,
	},
	mounted() {
		console.log(this.seller);
	},
};
</script>

<style lang="stylus" scoped>

</style>

