import TodosElement from '../todos-element/todos-element.js';

export default class TodosAddElement extends TodosElement {
	constructor() {
		super();

		this.addEventListener('focusout', this.add);
		this.addEventListener('keydown', this.add);
	}

	async add(event) {
		if (event.type === 'keydown' && event.key !== 'Enter') {
			return;
		}

		await this.store.add(event.target.value);

		event.target.value = '';
	}
}
