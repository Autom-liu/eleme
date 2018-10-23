<template>
	<div id="Shopping">
		<div class="menu-wrapper" ref="menuScroll">
			<ul>
				<menu-item
					v-for="(item, index) of goods"
					:key="index"
					:menu="item"
					:index="index"
					:currentIndex="currentIndex"
					@step-index="stepIndex"
				></menu-item>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodScroll">
			<div>
				<div class="food-list" v-for="(item, index) of goods" :key="index">
					<h1 class="title">
						{{item.name}}
					</h1>
					<ul>
						<food-item v-for="food of item.foods" :key="food.id" :food="food"></food-item>
					</ul>
				</div>
			</div>
		</div>
		<shop-cart :min-price="seller.minPrice" :delivery-price="seller.deliveryPrice"></shop-cart>
	</div>
</template>

<script>
import BScroll from 'better-scroll';
import ShopCart from '@/components/ShopCart/ShopCart';
import MenuItem from './components/MenuItem';
import FoodItem from './components/FoodItem';

export default {
	name: 'Shopping',
	components: {
		MenuItem,
		ShopCart,
		FoodItem,
	},
	props: {
		goods: {
			type: Array,
			required: true,
		},
		seller: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			elementHeight: [],
			scrollY: 0,
		};
	},
	mounted() {
		setTimeout(() => {
			this.initScroll();
			this.initHeight();
		});
	},
	methods: {
		initScroll() {
			this.menuScroll = new BScroll(this.$refs.menuScroll, {
				click: true,
			});
			this.foodScroll = new BScroll(this.$refs.foodScroll, {
				click: true,
				probeType: 3,
			});
			this.foodScroll.on('scroll', (pos) => {
				this.scrollY = Math.abs(Math.round(pos.y));
			});
		},
		initHeight() {
			const eles = this.$refs.foodScroll.getElementsByClassName('food-list');
			Array.prototype.forEach.call(eles, (ele, index) => {
				this.elementHeight.push(ele.offsetTop);
			});
		},
		stepIndex(index) {
			this.currentIndex = index;
		},
	},
	computed: {
		currentIndex: {
			get() {
				// eslint-disable-next-line no-plusplus
				for (let i = 1; i <= this.elementHeight.length; i++) {
					const minHeight = this.elementHeight[i - 1] * 0.9;
					const maxHeight = this.elementHeight[i] * 0.9;
					if ((this.scrollY >= minHeight && this.scrollY < maxHeight) || !maxHeight) {
						return i - 1;
					}
				}
				return 0;
			},
			set(i) {
				const eles = this.$refs.foodScroll.getElementsByClassName('food-list');
				this.foodScroll.scrollToElement(eles[i]);
				this.scrollY = this.elementHeight[i];
			},
		},
	},
	watch: {
		scrollY(val) {

		},
	},
};
</script>

<style lang="stylus" scoped>
#Shopping
	position fixed
	display flex
	top 3.5rem
	bottom 1rem
	width 100%
	overflow hidden
	.menu-wrapper
		width 1.6rem
		height 100%
	.foods-wrapper
		position absolute
		flex 1
		left 1.6rem
		top 0
		bottom 0
		.food-list
			.title
				padding-left .28rem
				border-left 2px solid #d9dde1
				height .52rem
				line-height .52rem
				background-color #f3f5f7
				font-size .24rem
				color rgb(147, 153, 159)
</style>

