import TodosElement from '../todos-element/todos-element.js';
import TodosStore from '../../../shared/todos/todos-store.js';

export default class TodosApp extends TodosElement {
	constructor() {
		super();

		this.store = new TodosStore();
	}

	connectedCallback() {
		this.removeStoreListener = this.store.addListener(() => this.render());
	}

	disconnectedCallback() {
		this.removeStoreListener = this.removeStoreListener();
	}

	render() {
		console.log('render', this.store.todos);
	}
}
