import { apply } from 'apply-html';
import TodosElement from '../todos-element/todos-element.js';
import TodosStore from '../../../shared/todos/todos-store.js';
import renderApp from '../../../shared/templates/app.html.js';

export default class TodosAppElement extends TodosElement {
	constructor() {
		super();

		const { todos } = JSON.parse(this.getAttribute('props'));

		this.store = new TodosStore(todos);
	}

	connectedCallback() {
		this.removeStoreListener = this.store.addListener(() => this.render());
	}

	disconnectedCallback() {
		this.removeStoreListener = this.removeStoreListener();
	}

	render() {
		apply(this, renderApp(this.store));
	}
}
