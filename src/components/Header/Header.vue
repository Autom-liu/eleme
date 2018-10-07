<template>
	<div id="header">
		<div class="header-top">
			<div class="avatar">
				<img :src="seller.avatar" alt="" width="64" height="64">
			</div>
			<div class="header-content">
				<p class="title">
					<span class="brand"></span>
					<span class="seller-name">{{seller.name}}</span>
				</p>
				<p class="description">{{seller.description}} / {{seller.deliveryTime}}分钟送达</p>
				<p class="support" v-if="seller.supports">
					<span :class="['icon', iconImg]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</p>
				<div class="support-number" v-if="seller.supports">
					<span class="count">{{this.seller.supports.length}}个</span>
					<i class="icon-keyboard_arrow_right icon-arrow"></i>
				</div>
			</div>
		</div>
		<div class="header-bottom">
			<span class="bulletin-title"></span>
			<span class="bulletin-text">{{this.seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right icon-arrow"></i>
		</div>
		<div class="header-background">
			<img :src="seller.avatar" alt="" width="100%">
		</div>
		<header-bulletin :seller="seller"></header-bulletin>
	</div>
</template>

<script>
import HeaderBulletin from './components/Bulletin';

export default {
	name: 'Header',
	props: {
		seller: Object,
		require: true,
	},
	components: {
		HeaderBulletin,
	},
	mounted() {

	},
	computed: {
		iconImg() {
			return ['decrease', 'guaratee', 'guaratee', 'invoice', 'special'][this.seller.supports[0].type];
		},
	},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/mixin.styl';

#header
	position relative
	overflow hidden
	color #fff
	background-color rgba(7,17,27,.5)
	font-weight 200
	.header-top
		position relative
		overflow hidden
		padding .48rem .24rem .36rem .48rem
		.avatar
			float left
			img
				border-radius 2px
		.header-content
			float left
			margin-left .32rem
			padding .04rem 0
			line-height .24rem
			.title
				.brand
					display inline-block
					width .45rem
					height .3rem
					bg-img('./assets/brand')
					background-size .45rem .3rem
					background-repeat no-repeat
					vertical-align middle
				.seller-name
					font-size .32rem
					font-weight bold
					line-height .36rem
					vertical-align middle
			.description
				padding-top .16rem
				padding-bottom .2rem
				font-size .24rem
			.support
				.icon
					display inline-block
					width .24rem
					height .24rem
					margin-right .08rem
					background-size .24rem .24rem
					vertical-align middle
					background-repeat no-repeat
					&.decrease
						bg-img('./assets/decrease_1')
					&.discount
						bg-img('./assets/discount_1')
					&.guarantee
						bg-img('./assets/guarantee_1')
					&.invoice
						bg-img('./assets/invoice_1')
					&.special
						bg-img('./assets/special_1')
				.text
					font-size .2rem
					vertical-align middle
			.support-number
				position absolute
				right .24rem
				bottom .36rem
				padding .14rem .16rem
				border-radius .28rem
				background-color rgba(0,0,0,.2)
				vertical-align middle
				font-size .2rem
				.icon-arrow
					vertical-align middle
					font-size .2rem
	.header-bottom
		position relative
		overflow hidden
		height .56rem
		line-height .56rem
		padding 0 .24rem
		background-color rgba(7,17,27,.2);
		white-space nowrap
		text-overflow ellipsis
		.bulletin-title
			display inline-block
			width .44rem
			height .24rem
			vertical-align middle
			bg-img('./assets/bulletin')
			background-size .44rem .24rem
			background-repeat no-repeat
		.bulletin-text
			margin 0 .08rem
			font-size .2rem
			vertical-align middle
		.icon-arrow
			position absolute
			right .24rem
			top 0
			line-height .56rem
			vertical-align middle
	.header-background
		position absolute
		top 0
		bottom 0
		left 0
		right 0
		z-index -1
		filter blur(10px)
</style>

