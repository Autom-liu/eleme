<template>
	<div id="cart-control">
		<div class="cart-decrease icon-remove_circle_outline"></div>
		<div class="cart-count">1</div>
		<div class="add icon-add_circle"></div>
	</div>
</template>

<script>
export default {
	name: 'cartControl',
};
</script>

<style lang="stylus" scoped>
#cart-control
	font-size 0
	line-height .48rem
	.cart-decrease,.cart-count,.add
		display inline-block
		vertical-align middle
	.cart-decrease,.add
		font-size .48rem
		color rgb(0, 160, 220)
	.cart-count
		width .48rem
		font-size .2rem
		color rgb(147, 153, 159)
		text-align center
</style>

