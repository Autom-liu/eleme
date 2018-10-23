const foodState = {
	foods: [],
};

const foodAction = {
	initFoods(ctx, goods) {
		ctx.commit('initFoods', goods);
	},
	addFood(ctx, food) {
		ctx.commit('addFood', food.id);
	},
	setFood(ctx, count) {
		ctx.commit('setFood', count);
	},
	subFood(ctx, food) {
		ctx.commit('subFood', food.id);
	},
	clearFood(ctx) {
		ctx.commit('clearFood');
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
	addFood(state, id) {
		state.foods = state.foods.map(f => (f.id === id ? { ...f, count: f.count + 1 } : f));
	},
	subFood(state, id) {
		state.foods = state.foods.map(f => (f.id === id ? { ...f, count: f.count - 1 } : f));
	},
	clearFood(state) {
		// eslint-disable-next-line arrow-body-style
		state.foods = state.foods.map(f => ({ ...f, count: 0 }));
	},
};

export {
	foodState,
	foodAction,
	foodMutations,
};
