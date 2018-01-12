import uuid from 'uuid/v1';

export default class TodosStore {
	constructor(todos) {
		this.todos = Array.isArray(todos) ? todos : [];
	}

	add(title) {
		title = title && title.trim();

		if (!title) {
			return this;
		}

		this.todos.push({
			id: uuid(),
			completed: false,
			title
		});

		return this;
	}

	edit(id, title) {
		title = title && title.trim();

		if (!title) {
			return this;
		}

		const todo = this.todos
			.find(todo => todo.id === id);

		if (!todo) {
			return this;
		}

		todo.title = title;

		return this;
	}

	toggle(id) {
		const todo = this.todos
			.find(todo => todo.id === id);;

		if (todo) {
			todo.completed = !todo.completed;
		}

		return this;
	}

	remove(id) {
		this.todos = this.todos
			.filter(todo => todo.id !== id);

		return this;
	}

	removeCompleted() {
		this.todos = this.todos
			.filter(todo => !todo.completed);

		return this;
	}
}
