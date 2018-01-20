import { apply } from 'apply-html';
import TodosElement from '../todos-element/todos-element.js';
import TodosStore from '../../../shared/todos/todos-store.js';
import renderApp from '../../../shared/templates/app.html.js';
import { delegate } from '../../js/utils/utils-event.js';

export default class TodosAppElement extends TodosElement {
	constructor() {
		super();

		const { todos } = JSON.parse(this.getAttribute('props'));

		this.store = new TodosStore(todos);
		this.store.addListener(() => this.render());

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

	async add({ key, type }, target) {
		if (type === 'keydown' && key !== 'Enter') {
			return;
		}

		await this.store.add(target.value);

		target.value = '';
	}

	async clearCompleted() {
		await this.store.removeCompleted();
	}

	async toggleAll() {
		await this.store.toggleAll();
	}

	render() {
		apply(this, renderApp(this.store));
	}
}
