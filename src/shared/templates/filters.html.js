import { html } from 'apply-html';

export default ({ todos }) => {
	const completedCount = todos.filter(x => x.completed).length;
	const remainingCount = todos.length - completedCount;

	return html`
		<footer class="footer">
			<span class="todo-count">
				<strong>${remainingCount}</strong>
				item${remainingCount !== 1 && 's'} left
			</span>
			<!-- Remove this if you don't implement routing -->
			<ul class="filters">
				<li><a class="selected" href="#/">All</a></li>
				<li><a href="#/active">Active</a></li>
				<li><a href="#/completed">Completed</a></li>
			</ul>
			<todos-actions>
				${completedCount !== 0 &&
					html`
					<button
						class="clear-completed"
						name="removeCompleted">
						Clear completed
					</button>
				`}
			</todos-actions>
		</footer>
	`;
};
