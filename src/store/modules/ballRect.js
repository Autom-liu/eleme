const ballState = {
	startpos: {},
};

const ballAction = {
	setRect(ctx, rect) {
		ctx.commit('setRect', rect);
	},
};

const ballMutations = {
	setRect(state, rect) {
		state.startpos = rect;
	},
};

export {
	ballState,
	ballAction,
	ballMutations,
};
