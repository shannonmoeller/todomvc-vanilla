import Store from '../store/store.js';

export default class TodosStore extends Store {
	constructor(todos) {
		super();

		this.filter = null;
		this.editing = null;
		this.todos = Array.isArray(todos) ? todos : [];
	}

	add(title) {
		title = title && title.trim();

		if (!title) {
			return this;
		}

		this.todos.push({
			id: `todo-${Date.now()}`,
			completed: false,
			title,
		});

		return this.update();
	}

	startEdit(id) {
		this.editing = id;

		return this.update();
	}

	edit(id, title) {
		title = title && title.trim();

		this.editing = null;

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
