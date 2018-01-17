import TodosElement from '../todos-element/todos-element.js';

export default class TodosActionsElement extends TodosElement {
	constructor() {
		super();

		this.addEventListener('click', this.onClick);
	}

	async onClick(event) {
		console.log('onclick');

		const { name } = event.target;

		if (name === 'removeCompleted') {
			await this.store.removeCompleted();
		}
	}
}
