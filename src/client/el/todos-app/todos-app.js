import TodosElement from '../todos-element/todos-element.js';
import TodosStore from '../../../shared/todos/todos-store.js';

export default class TodosApp extends TodosElement {
	constructor() {
		super();

		const store = new TodosStore();

		store.addListener(() => this.render());

		this.store = store;
	}

	render() {
		console.log('render', this.store);
	}
}
