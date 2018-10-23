import { foodMutations } from './modules/foods';
import { ballMutations } from './modules/ballRect';

export default {
	...foodMutations,
	...ballMutations,
};
