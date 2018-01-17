import { html } from 'apply-html';
import renderItem from './item.html.js';

export default ({ editing, todos }) => html`
	<section class="main">
		<input id="toggle-all" class="toggle-all" type="checkbox">
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			${todos.map(todo =>
				renderItem({
					editing: todo.id === editing,
					todo,
				})
			)}
		</ul>
	</section>
`;
