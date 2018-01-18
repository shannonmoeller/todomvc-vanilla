import TodosElement from '../todos-element/todos-element.js';

export default class TodosActionsElement extends TodosElement {
	constructor() {
		super();

		this.addEventListener('click', this.onClick);
	}

	async onClick(event) {
		const { name } = event.target;

		switch (name) {
			case 'clear-completed':
				this.store.removeCompleted();
				break;

			case 'toggle-all':
				this.store.toggleAll();
				break;

			// no default
		}
	}
}
