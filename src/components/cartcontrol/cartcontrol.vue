<template>
	<div id="cart-control">
		<transition name="move">
			<div
				class="cart-decrease icon-remove_circle_outline"
				v-show="count>0"
				@click="subCount"></div>
		</transition>
		<div class="cart-count" v-show="count>0">{{count}}</div>
		<div class="add icon-add_circle" @click="addCount"></div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'cartControl',
	props: {
		count: Number,
	},
	methods: {
		addCount(e) {
			e.stopPropagation();
			this.$emit('actions', 'add');
			this.setRect(e.target.getBoundingClientRect());
		},
		subCount(e) {
			e.stopPropagation();
			this.$emit('actions', 'sub');
		},
		...mapActions(['setRect']),
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
	.cart-decrease
		&.move-enter-active,&.move-leave-active
			opacity 1
			transform translate3d(0, 0, 0) rotateZ(0deg)
			transition all .4s linear
		&.move-enter,&.move-leave
			opacity 0
			transform translate3d(.48rem, 0, 0) rotateZ(180deg)
	.cart-count
		width .48rem
		font-size .2rem
		color rgb(147, 153, 159)
		text-align center
</style>

