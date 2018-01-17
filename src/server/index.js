import 'isomorphic-fetch';

import Koa from 'koa';
import helmet from 'koa-helmet';
import mount from 'koa-mount';
import serve from 'koa-static';

import renderIndex from '../shared/templates/index.html.js';

const directives = {
	imgSrc: ["'self'", 'data:'],
	defaultSrc: ["'self'"],
};

function getApp({ response, request }) {
	if (!request.headers.accept.includes('html')) {
		response.status = 404;

		return;
	}

	const state = {
		todos: [
			{ id: 'foo', completed: true, title: 'Taste JavaScript' },
			{ id: 'bar', completed: false, title: 'Buy a unicorn' },
			{ id: 'baz', completed: false, title: 'Buy milk' },
		],
	};

	response.body = renderIndex(state).toString();
}

export default new Koa()
	.use(helmet())
	.use(helmet.contentSecurityPolicy({ directives }))
	.use(mount('/node_modules', serve('./node_modules')))
	.use(mount('/client', serve('./src/client')))
	.use(mount('/shared', serve('./src/shared')))
	.use(getApp);
