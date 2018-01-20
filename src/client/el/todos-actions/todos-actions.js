import TodosElement from '../todos-element/todos-element.js';
import { delegate } from '../../js/utils/utils-event.js';

export default class TodosActionsElement extends TodosElement {
	constructor() {
		super();

		this.addEventListener(
			'focusout',
			delegate('[name="new-todo"]', this.add)
		);

		this.addEventListener(
			'keydown',
			delegate('[name="new-todo"]', this.add)
		);

		this.addEventListener(
			'click',
			delegate('[name="clear-completed"]', this.clearCompleted)
		);

		this.addEventListener(
			'click',
			delegate('[name="toggle-all"]', this.toggleAll)
		);
	}

	async add(event) {
		if (event.type === 'keydown' && event.key !== 'Enter') {
			return;
		}

		await this.store.add(event.target.value);

		event.target.value = '';
	}

	async clearCompleted() {
		await this.store.removeCompleted();
	}

	async toggleAll() {
		await this.store.toggleAll();
	}
}
