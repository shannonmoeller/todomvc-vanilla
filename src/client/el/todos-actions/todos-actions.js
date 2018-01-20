import TodosElement from '../todos-element/todos-element.js';
import { filterEvent } from '../../js/utils/utils-event.js';

export default class TodosActionsElement extends TodosElement {
	constructor() {
		super();

		this.addEventListener(
			'click',
			filterEvent('[name="clear-completed"]', this.clearCompleted)
		);

		this.addEventListener(
			'click',
			filterEvent('[name="toggle-all"]', this.toggleAll)
		);
	}

	async clearCompleted() {
		await this.store.removeCompleted();
	}

	async toggleAll() {
		await this.store.toggleAll();
	}
}
