<template>
	<li class="support-item">
		<span :class="['icon', iconImg]"></span>
		<span class="description">{{item.description}}</span>
	</li>
</template>

<script>
export default {
	name: 'SupportItem',
	props: {
		item: Object,
	},
	computed: {
		iconImg() {
			return ['decrease', 'discount', 'guarantee', 'invoice', 'special'][this.item.type];
		},
	},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/mixin.styl';

.support-item
	margin-bottom .24rem
	.icon
		display inline-block
		width .48rem
		height .48rem
		margin-right .12rem
		background-size .48rem .48rem
		vertical-align middle
		background-repeat no-repeat
		&.decrease
			bg-img('../assets/decrease_2')
		&.discount
			bg-img('../assets/discount_2')
		&.guarantee
			bg-img('../assets/guarantee_2')
		&.invoice
			bg-img('../assets/invoice_2')
		&.special
			bg-img('../assets/special_2')
	.description
		font-size .24rem
		font-weight 200
</style>

