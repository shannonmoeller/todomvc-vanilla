import Store from '../store/store.js';

export default class TodosStore extends Store {
	constructor(todos) {
		super();

		this.todos = Array.isArray(todos) ? todos : [];
	}

	get count() {
		return this.todos.length;
	}

	get remainingCount() {
		return this.todos.filter(x => !x.completed).length;
	}

	add(title) {
		title = title && title.trim();

		if (!title) {
			return this;
		}

		this.todos.push({
			id: Date.now(),
			completed: false,
			title,
		});

		return this.update();
	}

	edit(id, title) {
		title = title && title.trim();

		if (!title) {
			return this;
		}

		const { todos } = this;
		const todo = todos.find(x => x.id === id);

		if (!todo) {
			return this;
		}

		todo.title = title;

		return this.update();
	}

	toggle(id) {
		const { todos } = this;
		const todo = todos.find(x => x.id === id);

		if (!todo) {
			return this;
		}

		todo.completed = !todo.completed;

		return this.update();
	}

	remove(id) {
		const { todos } = this;
		const index = todos.findIndex(x => x.id === id);

		if (index === -1) {
			return this;
		}

		todos.splice(index, 1);

		return this.update();
	}

	removeCompleted() {
		const { todos } = this;
		const filteredTodos = todos.filter(x => !x.completed);

		if (filteredTodos.length === todos.length) {
			return this;
		}

		this.todos = filteredTodos;

		return this.update();
	}
}
