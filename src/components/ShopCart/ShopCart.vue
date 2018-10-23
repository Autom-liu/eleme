<template>
	<div id="shop-cart">
		<div :class="['cart-left', highlight]" @click="toggleFold">
			<div class="icon-wrapper">
				<div class="icon-content">
					<div class="icon-box">
						<i class="icon-shopping_cart"></i>
					</div>
				</div>
				<div class="num-tag" v-show="total>0">
					<span>{{total}}</span>
				</div>
			</div>
			<div class="price">￥{{totalPrice}}</div>
			<div class="others">另需配送费￥{{deliveryPrice}}元</div>
		</div>
		<div :class="['cart-right', account.style]">
			{{account.text}}
		</div>
		<div class="ball-container">
			<transition
				name="drop"
				v-for="(ball, index) of ballsStatus"
				:key="index"
				@before-enter="beforeEnter"
				@enter="enter"
				@after-enter="afterEnter"
			>
				<div class="ball" v-if="ball.show">
					<div class="inner inner-hook"></div>
				</div>
			</transition>
		</div>
		<transition name="fold">
			<div class="cart-list" v-show="listShow">
				<div class="list-header">
					<h1 class="title">购物车</h1>
					<span class="empty" @click="clear">清空</span>
				</div>
				<div class="list-content" ref="listContent">
					<ul>
						<food-item v-for="food of selected" :key="food.id" :food="food"></food-item>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BScroll from 'better-scroll';
import FoodItem from './components/foodItem';

export default {
	name: 'shopCart',
	props: {
		deliveryPrice: Number,
		minPrice: Number,
		selected: Array,
	},
	components: {
		FoodItem,
	},
	data() {
		return {
			ballsStatus: [
			],
			animateQueue: [],
			listShow: false,
		};
	},
	methods: {
		beforeEnter(el) {
			const x = this.startpos.left - 24;
			const y = -(document.documentElement.clientHeight - this.startpos.y - 32);
			const inner = el.getElementsByClassName('inner-hook')[0];
			el.style.transform = `translate3d(0, ${y}px, 0)`;
			el.style.webkitTransform = `translate3d(0, ${y}px, 0)`;
			inner.style.transform = `translate3d(${x}px, 0, 0)`;
			inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`;
		},
		enter(el, done) {
			const inner = el.getElementsByClassName('inner-hook')[0];
			this.$nextTick(() => {
				el.style.transform = 'translate3d(0, 0, 0)';
				el.style.webkitTransform = 'translate3d(0, 0, 0)';
				inner.style.transform = 'translate3d(0, 0, 0)';
				inner.style.webkitTransform = 'translate3d(0, 0, 0)';
				done();
			});
		},
		afterEnter(el) {
			const index = this.animateQueue.shift();
			this.ballsStatus[index].show = false;
		},
		toggleFold() {
			if (this.total > 0) {
				this.listShow = !this.listShow;
			}
			if (this.listShow) {
				this.$nextTick(() => {
					this.scroll = new BScroll(this.$refs.listContent, {
						click: true,
					});
				});
			}
		},
		clear() {
			this.clearFood();
		},
		...mapActions(['clearFood']),
	},
	computed: {
		total() {
			return this.selected.reduce((a, b) => a + b.count, 0);
		},
		totalPrice() {
			// eslint-disable-next-line no-mixed-operators
			return this.selected.reduce((a, b) => a + b.count * b.price, 0);
		},
		...mapState(['startpos']),
		highlight() {
			return {
				active: this.totalPrice > 0,
			};
		},
		account() {
			switch (true) {
				case this.totalPrice >= this.minPrice:
					return { style: 'active', text: '去结算' };
				case this.totalPrice === 0:
					return { style: '', text: `满￥${this.minPrice}起送` };
				default:
					return { style: '', text: `还差￥${this.minPrice - this.totalPrice}起送` };
			}
		},
	},
	watch: {
		startpos(val) {
			const ball = { show: false };
			this.ballsStatus.push(ball);
			this.animateQueue.push(this.ballsStatus.length - 1);
			this.$nextTick(() => {
				this.ballsStatus[this.ballsStatus.length - 1].show = true;
			});
		},
		total(val) {
			if (val === 0) {
				this.listShow = false;
			}
		},
	},
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
	.ball-container
		.ball
			position fixed
			bottom .64rem
			left .48rem
			z-index 200
			transition transform 1s cubic-bezier(0.49, -0.29, 0.75, 0.41)
			.inner
				padding .16rem
				background-color rgb(0, 160, 220)
				border-radius 50%
				transition transform 1s linear
	.cart-list
		position absolute
		left 0
		top 0
		z-index -1
		width 100%
		transform translate3d(0, -100%, 0)
		transition transform .5s
		&.fold-enter,&.fold-leave-to
			transform translate3d(0, 0, 0)
		.list-header
			padding 0 .36rem
			height .8rem
			line-height .8rem
			background-color #f3f5f7
			border-bottom 1px solid rgba(7, 17, 27, .1)
			.title
				float left
				font-size .28rem
				font-weight 200
				color rgb(7, 17, 27)
			.empty
				float right
				font-size .24rem
				color rgb(0, 160, 220)
		.list-content
			padding 0 .36rem .28rem
			overflow hidden
			max-height 4.34rem
			background-color #fff
</style>

