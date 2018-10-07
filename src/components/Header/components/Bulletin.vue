<template>
	<div id="bulletin-detail">
		<div class="detail-wrapper">
			<div class="detail-main">
				<div class="detail-header">
					<h1 class="detail-title">{{seller.name}}</h1>
					<star :score="seller.score" :size="48" :total="5"></star>
				</div>
				<div class="floor">
					<div class="title">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<div class="content-box">
						<ul class="supports" v-if="seller.supports">
							<support-item
								v-for="(item, index) of seller.supports"
								:key="index"
								:item="item">
							</support-item>
						</ul>
					</div>
				</div>
				<div class="floor">
					<div class="title">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<div class="content-box">
						<div class="bulletin-text">
							{{seller.bulletin}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="close">
			<i class="icon-close"></i>
		</div>
	</div>
</template>

<script>
import Star from '@/components/Star/Star';
import SupportItem from './SupportItem';

export default {
	name: 'Bulletin',
	components: {
		Star,
		SupportItem,
	},
	props: {
		seller: Object,
	},
	computed: {
		iconImg() {
			return ['decrease', 'guaratee', 'guaratee', 'invoice', 'special'][this.seller.supports.type];
		},
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
		line-height 1
		background-color rgba(7,17,27,.8)
		.detail-wrapper
			min-height 100%
			.detail-main
				padding 1.28rem 0
				text-align center
				.detail-header
					.detail-title
						margin-bottom .32rem
						font-size .32rem
						font-weight 700
						line-height .32rem
				.floor
						width 80%
						margin .56rem auto 0
					.title
						display flex
					.line
						position relative
						flex 1
						top -.14rem
						border-bottom 1px solid rgba(255,255,255,0.2)
					.text
						padding 0 .24rem
						font-size .28rem
						font-weight 700
				.content-box
					padding .48rem .24rem 0
					text-align left
					.bulletin-text
						font-size .24rem
						font-weight 200
						line-height .48rem
		.close
			margin-top -1.28rem
			width 100%
			height 1rem
			text-align center
			font-size .64rem
			color rgba(255,255,255,.5)
</style>

