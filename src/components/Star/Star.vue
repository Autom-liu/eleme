<template>
	<div id="star">
		<div class="star-wrapper">
			<span
				v-for="(item, index) of stars"
				:class="['star-item', sizeStyle, item.style]"
				:key="index"
			></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'star',
	props: {
		score: {
			type: Number,
			default: 0.0,
		},
		size: {
			type: Number,
			default: 48,
		},
		total: {
			type: Number,
			default: 5.0,
		},
	},
	data() {
		return {

		};
	},
	computed: {
		stars() {
			const result = [];
			// eslint-disable-next-line no-plusplus
			for (let i = 1; i <= this.total; i++) {
				if (i <= this.score) {
					result.push({ style: 'on' });
				} else if (i > this.score && i <= this.score + 0.5) {
					result.push({ style: 'half' });
				} else {
					result.push({ style: 'off' });
				}
			}
			return result;
		},
		sizeStyle() {
			return `star${this.size}`;
		},
	},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/mixin.styl';

	.star-wrapper
		.star-item
			display inline-block
			width .4rem
			height .4rem
			margin-right .44rem
			background-size .4rem .4rem
			background-repeat no-repeat
			&.star48.on
				bg-img('./assets/star48_on')
			&.star48.off
				bg-img('./assets/star48_off')
			&.star48.half
				bg-img('./assets/star48_half')
			&.star36.on
				bg-img('./assets/star36_on')
			&.star36.off
				bg-img('./assets/star36_off')
			&.star36.half
				bg-img('./assets/star36_half')
			&.star24.on
				bg-img('./assets/star24_on')
			&.star24.off
				bg-img('./assets/star24_off')
			&.star24.half
				bg-img('./assets/star24_half')
</style>

