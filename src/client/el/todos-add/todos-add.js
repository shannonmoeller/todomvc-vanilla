import TodosElement from '../todos-element/todos-element.js';

export default class TodosAddElement extends TodosElement {
	constructor() {
		super();

		this.addEventListener('focusout', this.onFocusOut);
		this.addEventListener('keydown', this.onKeyDown);
	}

	async onFocusOut(event) {
		await this.store.add(event.target.value);

		event.target.value = '';
	}

	async onKeyDown(event) {
		if (event.key === 'Enter') {
			await this.store.add(event.target.value);

			event.target.value = '';
		}
	}
}
