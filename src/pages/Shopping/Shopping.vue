<template>
	<div id="Shopping">
		<div class="menu-wrapper">
			<ul>
				<menu-item
					v-for="(item, index) of goods"
					:key="index"
					:menu="item"
				></menu-item>
			</ul>
		</div>
		<div class="foods-wrapper">
			<div class="food-list" v-for="(item, index) of goods" :key="index">
				<h1 class="title">
					{{item.name}}
				</h1>
				<ul>
					<li class="food-item" v-for="(food, index) of item.foods" :key="index">
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
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import MenuItem from './components/MenuItem';

export default {
	name: 'Shopping',
	components: {
		MenuItem,
	},
	data() {
		return {
			goods: [],
		};
	},
	mounted() {
		this.getGoodsData();
	},
	methods: {
		getGoodsData() {
			axios.get('api/goods.json')
				.then(res => (res.status === 200 ? res.data : this.handleError(res.status)))
				.then(data => (data.status === 200 ? data.goods : this.handleError(data.status)))
				.then(goods => this.handleData(goods));
		},
		handleData(goods) {
			if (Array.isArray(goods)) {
				this.goods = goods;
			}
		},
		handleError(status) {

		},
	},
};
</script>

<style lang="stylus" scoped>
#Shopping
	display flex
	.menu-wrapper
		width 1.6rem
	.foods-wrapper
		flex 1
		.food-list
			.title
				padding-left .28rem
				border-left 2px solid #d9dde1
				height .52rem
				line-height .52rem
				background-color #f3f5f7
				font-size .24rem
				color rgb(147, 153, 159)
			.food-item
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
</style>

