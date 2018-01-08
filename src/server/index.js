import Koa from 'koa';
import helmet from 'koa-helmet';
import mount from 'koa-mount';
import serve from 'koa-static';

import renderLayout from '../shared/templates/layout.html.js';
import renderApp from '../shared/templates/app.html.js';

const directives = {
	defaultSrc: ["'self'"]
};

function getApp({ response, request }) {
	if (!request.headers.accept.includes('html')) {
		response.status = 404;

		return;
	}

	const state = {
		path: request.path,
		title: 'Hello World'
	};

	response.body = renderLayout({
		title: state.title,
		body: renderApp(state)
	});
}

export default new Koa()
	.use(helmet())
	.use(helmet.contentSecurityPolicy({ directives }))
	.use(mount('/client', serve('src/client')))
	.use(mount('/shared', serve('src/shared')))
	.use(helmet.noCache())
	.use(getApp);
