import { html } from 'apply-html';
import renderList from './list.html.js';
import renderFilters from './filters.html.js';

export default props => html`
	<section class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<todos-new>
				<input
					type="text"
					class="new-todo"
					placeholder="What needs to be done?"
					autofocus
				/>
			</todos-new>
		</header>

		${renderList(props)}
		${renderFilters(props)}
	</section>

	<footer class="info">
		<p>Double-click to edit a todo</p>
		<p>Created by <a href="http://shannonmoeller.com">Shannon Moeller</a></p>
		<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
	</footer>
`;
