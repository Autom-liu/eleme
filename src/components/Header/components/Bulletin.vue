<template>
	<div id="bulletin-detail">
		<div class="detail-wrapper">
			<div class="detail-main">
				<div class="detail-header">
					<h1 class="detail-title">{{seller.name}}</h1>
					<star :score="seller.score" :size="48" :total="5"></star>
				</div>
			</div>
		</div>
		<div class="close"></div>
	</div>
</template>

<script>
import Star from '@/components/Star/Star';
export default {
	name: 'Bulletin',
	components: {
		Star,
	},
	props: {
		seller: Object,
	},
};
</script>

<style lang="stylus" scoped>
	#bulletin-detail
		position fixed
		top 0
		bottom 0
		left 0
		right 0
		z-index 9
		background-color rgba(7,17,27,.8)
		.detail-wrapper
			min-height 100%
			.detail-main
				margin-top 1.28rem
				padding-bottom 1.28rem
				text-align center
				.detail-header
					padding-bottom .56rem
					.detail-title
						margin-bottom .32rem
						font-size .32rem
						font-weight 700
						line-height .32rem
		.close
			margin-top -1.28rem
			width 100%
			height 1rem
</style>

