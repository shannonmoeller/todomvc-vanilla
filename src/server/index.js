import 'isomorphic-fetch';

import Koa from 'koa';
import helmet from 'koa-helmet';
import mount from 'koa-mount';
import serve from 'koa-static';

import renderLayout from '../shared/templates/layout.html.js';
import renderApp from '../shared/templates/app.html.js';

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
		path: request.path,
		title: 'Vanilla',
	};

	response.body = String(
		renderLayout({
			title: state.title,
			body: renderApp(state),
		})
	);
}

export default new Koa()
	.use(helmet())
	.use(helmet.contentSecurityPolicy({ directives }))
	.use(mount('/node_modules', serve('./node_modules')))
	.use(mount('/client', serve('./src/client')))
	.use(mount('/shared', serve('./src/shared')))
	.use(getApp);
