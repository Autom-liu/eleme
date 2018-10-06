import Vue from 'vue';
import Router from 'vue-router';
import Shopping from '@/pages/Shopping/Shopping';

Vue.use(Router);

export default new Router({
	mode: 'history',
  routes: [
    {
			path: '/',
      redirect: {
				name: 'shopping',
			},
		},
		{
			path: '/shopping',
			name: 'shopping',
			component: Shopping,
		},
  ],
});
