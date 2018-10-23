<template>
	<div id="cart-control">
		<div class="cart-decrease icon-remove_circle_outline" v-show="count>0" @click="subCount"></div>
		<div class="cart-count" v-show="count>0">{{count}}</div>
		<div class="add icon-add_circle" @click="addCount"></div>
	</div>
</template>

<script>
export default {
	name: 'cartControl',
	props: {
		count: Number,
	},
	methods: {
		addCount() {
			this.$emit('actions', 'add');
		},
		subCount() {
			this.$emit('actions', 'sub');
		},
	},
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

