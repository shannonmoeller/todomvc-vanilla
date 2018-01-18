import { html } from 'apply-html';

export default ({ id, completed, editing, title }) => html`
	<li
		id="todo-${id}"
		class="${completed && 'completed'} ${editing && 'editing'}">
		<todos-item name="${id}">
			<div class="view">
				<input
					type="checkbox"
					class="toggle"
					name="toggle"
					${completed && 'checked'}
				/>
				<label>${title}</label>
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
				value="${title}"
			/>
		</todos-item>
	</li>
`;
