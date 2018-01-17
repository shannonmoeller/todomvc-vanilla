import { html } from 'apply-html';
import renderLayout from './layout.html.js';
import renderApp from './app.html.js';

export default props =>
	renderLayout({
		title: 'Vanilla',
		head: html`
			<script type="module" src="/client/js/bundle.js"></script>
			<link rel="stylesheet" href="/client/css/bundle.css" />
		`,
		body: html`
			<todos-app props="${props}">
				${renderApp(props)}
			</todos-app>
		`,
	});
