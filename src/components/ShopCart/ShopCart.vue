<template>
	<div id="shop-cart">
		<div class="cart-left active">
			<div class="icon-wrapper">
				<div class="icon-content">
					<div class="icon-box">
						<i class="icon-shopping_cart"></i>
					</div>
				</div>
				<div class="num-tag">
					<span>99</span>
				</div>
			</div>
			<div class="price">￥0</div>
			<div class="others">另需配送费￥4元</div>
		</div>
		<div class="cart-right active">
			￥20起送
		</div>
	</div>
</template>

<script>
export default {
	name: 'shopCart',
};
</script>

<style lang="stylus" scoped>

#shop-cart
	position fixed
	display flex
	width 100%
	bottom 0
	color rgba(255, 255, 255, .4)
	.cart-left
		flex 1
		font-size 0
		background-color #141d27
		&.active
			color #fff
			background-color #08121c
			.icon-wrapper
				background-color #08121c
				.icon-content
					background-color #00a0dc
		.icon-wrapper
			position relative
			display inline-block
			width 1rem
			height 1rem
			margin -.16rem .36rem 0
			border-radius 50%
			background-color #141d27
			.icon-content
				position absolute
				width .88rem
				height .88rem
				top 0
				bottom 0
				left 0
				right 0
				margin auto
				border-radius 50%
				background-color #202932
				.icon-box
					text-align center
					.icon-shopping_cart
						line-height .88rem
						font-size .48rem
			.num-tag
				position absolute
				right -.16rem
				top -.16rem
				padding 0 .12rem
				border-radius 50%
				font-size .18rem
				font-weight 700
				line-height 2
				color #fff
				background-color rgb(240, 20, 20)
				box-shadow 0 4px 8px 0 rgba(0, 0, 0, .4)
		.price
			display inline-block
			vertical-align top
			padding-right .24rem
			margin .24rem 0
			font-size .32rem
			line-height .48rem
			font-weight 700
			border-right 1px solid rgba(255, 255, 255, .1)
		.others
			display inline-block
			vertical-align top
			margin .24rem
			margin-right 0
			font-size .2rem
			line-height .48rem
			font-weight 700
			color rgba(255, 255, 255, .4)
	.cart-right
		flex 0 0 2.1rem
		height 1rem
		line-height 1rem
		text-align center
		font-size .24rem
		font-weight 700
		background-color #2b333b
		&.active
			color #fff
			background-color #00b43c

</style>

