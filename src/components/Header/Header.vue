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
					<span class="icon"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</p>
			</div>
		</div>
		<div class="header-bottom">

		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		seller: Object,
		require: true,
	},
	mounted() {
		console.log(this.seller);
	},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/mixin.styl';

#header
	color #fff
	background-color rgba(7,17,27,.5)
	.header-top
		overflow hidden
		padding .48rem .24rem .36rem .48rem
		.avatar
			float left
		.header-content
			float left
			margin-left .32rem
			padding .04rem 0
			font-weight 200
			line-height .24rem
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
				font-size .2rem

</style>

