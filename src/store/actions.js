import { foodAction } from './modules/foods';
import { ballAction } from './modules/ballRect';

export default {
	...foodAction,
	...ballAction,
};
