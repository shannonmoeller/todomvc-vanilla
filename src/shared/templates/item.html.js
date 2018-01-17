import { html } from 'apply-html';

export default ({ editing, todo }) => html`
	<li
		id="todo-${todo.id}"
		class="${todo.completed && 'completed'} ${editing && 'editing'}">
		<todos-item name="${todo.id}">
			<div class="view">
				<input
					type="checkbox"
					class="toggle"
					name="toggle"
					${todo.completed && 'checked'}
				/>
				<label>${todo.title}</label>
				<button
					class="destroy"
					name="remove"
					title="Delete">
				</button>
			</div>
			<input
				type="text"
				class="edit"
				name="edit"
				value="${todo.title}"
			/>
		</todos-item>
	</li>
`;
