<template>
	<div id="cart-control">
		<transition name="move">
			<div
				class="cart-decrease icon-remove_circle_outline"
				v-show="count>0"
				@click="subCount"
			>
			</div>
		</transition>
		<div class="cart-count" v-show="count>0">{{count}}</div>
		<div class="add icon-add_circle" @click="addCount">
			<transition name="ball">
				<span v-show="ballShow" class="ball"></span>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cartControl',
	props: {
		count: Number,
		max: {
			type: Number,
			default: 1,
		},
	},
	data() {
		return {
			ballShow: false,
		};
	},
	methods: {
		addCount(e) {
			if (this.count < this.max) {
				this.ballShow = true;
				setTimeout(() => { this.ballShow = false; }, 6000);
				this.$emit('actions', 'add');
			}
		},
		subCount() {
			this.$emit('actions', 'sub');
		},
	},
};
</script>

<style lang="stylus" scoped>
#cart-control
	font-size 0
	line-height .48rem
	.cart-decrease,.cart-count,.add
		display inline-block
		vertical-align middle
	.cart-decrease,.add
		font-size .48rem
		color rgb(0, 160, 220)
	.cart-decrease
		&.move-enter-active,&.move-leave-active
			opacity 1
			transform translate3d(0, 0, 0) rotateZ(0deg)
			transition all .4s linear
		&.move-enter,&.move-leave
			opacity 0
			transform translate3d(.48rem, 0, 0) rotateZ(180deg)
	.add
		position relative
		.ball
			position absolute
			top 0
			left 0
			padding .24rem
			border-radius 50%
			background-color rgb(0, 160, 220)
			&.ball-enter-active
				animation ball-drop 6s
	.cart-count
		width .48rem
		font-size .2rem
		color rgb(147, 153, 159)
		text-align center

@keyframes ball-drop {
	0% {
		transform: translate3d(0, 0, 0)
	}
	20% {
		transform: translate3d(-.48rem, -.48rem 0)
	}
	100% {
		transform: translate3d(1.28rem, 1.28rem 0)
	}
}

</style>

