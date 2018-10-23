<template>
	<li class="food">
		<span class="name">{{food.name}}</span>
		<span class="price"> <span>￥</span>{{food.price * food.count}}</span>
		<div class="cartcontrol-wrapper">
			<cart-control :count="food.count" @actions="actions"></cart-control>
		</div>
	</li>
</template>

<script>
import { mapActions } from 'vuex';
import CartControl from '@/components/cartcontrol/cartcontrol';
export default {
	name: 'FoodItem',
	props: {
		food: Object,
	},
	components: {
		CartControl,
	},
	methods: {
		actions(type) {
			switch (type) {
				case 'add': this.addFood(this.food); break;
				case 'sub': this.subFood(this.food); break;
				default: break;
			}
		},
		...mapActions(['addFood', 'subFood']),
	},
};
</script>

<style lang="stylus" scoped>
.food
	overflow hidden
	position relative
	padding .24rem 0
	line-height .48rem
	border-bottom 1px solid rgba(7, 17, 27, .1)
	.name
		float left
		font-size .28rem
		color rgb(7, 17, 27)
	.price
		float right
		margin-right 1.98rem
		font-size .28rem
		font-weight 700
		color rgb(240, 20, 20)
		span
			font-size .2rem
			font-weight normal
	.cartcontrol-wrapper
		position absolute
		right 0
</style>

