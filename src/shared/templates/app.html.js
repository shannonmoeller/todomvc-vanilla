import { html } from 'apply-html';
import renderItem from './item.html.js';

export default ({ editingId, todos }) => {
	const totalCount = todos.length;
	const completedCount = todos.filter(x => x.completed).length;
	const remainingCount = totalCount - completedCount;

	// prettier-ignore
	return html`
		<header class="header">
			<h1>todos</h1>
			<input
				type="text"
				class="new-todo"
				name="new-todo"
				placeholder="What needs to be done?"
				autofocus
			/>
		</header>

		<section class="main">
			${totalCount > 0 && html`
				<input
					type="checkbox"
					id="toggle-all"
					class="toggle-all"
					name="toggle-all"
					${!remainingCount && 'checked'}
				/>
				<label for="toggle-all">Mark all as complete</label>
			`}

			<ul class="todo-list">
				${todos.map(todo => renderItem({
					editing: todo.id === editingId,
					todo
				}))}
			</ul>
		</section>

		${totalCount > 0 && html`
			<footer class="footer">
				<span class="todo-count">
					<strong>${remainingCount}</strong>
					item${remainingCount !== 1 && 's'} left
				</span>

				<ul class="filters">
					<li><a class="selected" href="#/">All</a></li>
					<li><a href="#/active">Active</a></li>
					<li><a href="#/completed">Completed</a></li>
				</ul>

				${completedCount !== 0 && html`
					<button
						class="clear-completed"
						name="clear-completed">
						Clear completed
					</button>
				`}
			</footer>
		`}
	`;
};
