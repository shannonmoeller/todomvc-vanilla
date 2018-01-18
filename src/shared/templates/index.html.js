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
			<section class="todoapp">
				<todos-app props="${props}">
					${renderApp(props)}
				</todos-app>
			</section>

			<footer class="info">
				<p>Double-click to edit a todo</p>
				<p>Created by <a href="http://shannonmoeller.com">Shannon Moeller</a></p>
				<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
			</footer>
		`,
	});
