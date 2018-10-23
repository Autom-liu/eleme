const foodState = {
	foods: [],
};

const foodAction = {
	initFoods(ctx, goods) {
		ctx.commit('initFoods', goods);
	},
	addFood(ctx) {
		ctx.commit('addFood');
	},
	setFood(ctx, count) {
		ctx.commit('setFood', count);
	},
	subFood(ctx) {
		ctx.commit('subFood');
	},
};

const foodMutations = {
	initFoods(state, goods) {
		let ret = [];
		goods.forEach((good) => {
			// eslint-disable-next-line arrow-body-style
			ret = ret.concat(good.foods.map((food => ({ ...food, count: 0 }))));
		});
		state.foods = ret;
	},
};

export {
	foodState,
	foodAction,
	foodMutations,
};
