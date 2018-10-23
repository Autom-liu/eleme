<template>
	<li class="food-item">
		<div class="img-box">
			<img :src="food.icon" alt="" class="food-img" width="100%">
		</div>
		<div class="content">
			<h2 class="name">{{food.name}}</h2>
			<p class="desc">{{food.description}}</p>
			<div class="extra">
				<span>月售{{food.sellCount}}</span>
				<span>好评率{{food.rating}}%</span>
			</div>
			<div class="price">
				<span class="new"><span class="symbol">￥</span>{{food.price}}</span>
				<span class="old" v-show="food.oldPrice">
					<span class="symbol">￥</span>
					{{food.oldPrice}}
				</span>
			</div>
		</div>
		<div class="control-wrapper">
			<cart-control :food="food"></cart-control>
		</div>
	</li>
</template>

<script>
import CartControl from '@/components/cartcontrol/cartcontrol';
export default {
	name: 'FoodItem',
	props: {
		food: Object,
	},
	components: {
		CartControl,
	},
};
</script>

<style lang="stylus" scoped>

.food-item
	position relative
	display flex
	margin .36rem
	.img-box
		flex 0 0 1.04rem
		margin-right .2rem
	.content
		flex 1
		color rgb(147, 153, 159)
		line-height 1
		.name
			margin .04rem 0 .16rem 0
			height .28rem
			font-size .28rem
			color rgb(7, 17, 27)
		.desc
			margin .16rem 0
			font-size .2rem
		.extra
			font-size 0
			span
				display inline-block
				font-size .2rem
				margin-right .24rem
				&:last-child
					margin-right 0
		.price
			font-weight 700
			line-height .48rem
			font-size .2rem
			.symbol
				font-size .2rem
			.new
				margin-right .16rem
				font-size .28rem
				color rgb(240, 20, 20)
			.old
				text-decoration line-through
	.control-wrapper
		position absolute
		bottom 0
		right .36rem
</style>

