<template>
	<li class="menu-item">
		<div class="text-wrapper">
			<span class="text"> <i class="icon"></i> {{menu.name}}</span>
		</div>
	</li>
</template>

<script>
export default {
	name: 'MenuIcon',
	props: {
		menu: Object,
	},
};
</script>

<style lang="stylus" scoped>

li.menu-item
	display table-row
	height 1.08rem
	line-height .28rem
	font-size .24rem
	color #848484
	font-weight 200
	background-color #f3f5f7
	&.active
		background-color #fff
		color rgb(77, 85, 93)
	.text-wrapper
		display table-cell
		vertical-align middle
		text-align center

</style>

