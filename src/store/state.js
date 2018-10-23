import { foodState } from './modules/foods';
import { ballState } from './modules/ballRect';

export default {
	...foodState,
	...ballState,
};
