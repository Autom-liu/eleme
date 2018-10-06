<template>
	<div id="NavTab">
		<ul class="tabs">
			<router-link tag="li" class="tab-item" to="/shopping">商品</router-link>
			<router-link tag="li" class="tab-item" to="/rating">评价</router-link>
			<router-link tag="li" class="tab-item" to="/seller">商家</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'NavTab',
};
</script>

<style lang="stylus" scoped>
	.tabs
		display flex
		flex-direction row
		flex-wrap nowrap
		justify-content space-between
		.tab-item
			flex: 1
			height .8rem
			line-height .8rem
			text-align center
</style>

