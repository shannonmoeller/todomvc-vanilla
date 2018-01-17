import TodosElement from '../todos-element/todos-element.js';

export default class TodosItemElement extends TodosElement {
	constructor() {
		super();

		this.addEventListener('click', this.onClick);
		this.addEventListener('dblclick', this.onDoubleClick);
		this.addEventListener('focusout', this.onFocusOut);
		this.addEventListener('keydown', this.onKeyDown);
	}

	async onClick(event) {
		const id = this.getAttribute('name');
		const { name } = event.target;

		if (name === 'remove') {
			await this.store.remove(id);
		}

		if (name === 'toggle') {
			await this.store.toggle(id);
		}
	}

	async onDoubleClick() {
		const id = this.getAttribute('name');

		await this.store.startEdit(id);

		this.querySelector('.edit').select();
	}

	async onFocusOut(event) {
		const id = this.getAttribute('name');
		const { name, value } = event.target;

		if (name === 'edit') {
			await this.store.edit(id, value);
		}
	}

	async onKeyDown(event) {
		const id = this.getAttribute('name');
		const { key, target } = event;
		const { name, value } = target;

		if (name === 'edit' && key === 'Enter') {
			await this.store.edit(id, value);
		}
	}
}
