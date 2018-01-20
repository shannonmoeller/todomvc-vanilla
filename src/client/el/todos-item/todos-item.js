import TodosElement from '../todos-element/todos-element.js';
import { filterEvent } from '../../js/utils/utils-event.js';

export default class TodosItemElement extends TodosElement {
	constructor() {
		super();

		this.addEventListener(
			'click',
			filterEvent('[name="remove"]', this.remove)
		);

		this.addEventListener(
			'click',
			filterEvent('[name="toggle"]', this.toggle)
		);

		this.addEventListener(
			'focusout',
			filterEvent('[name="edit"]', this.endEdit)
		);

		this.addEventListener(
			'keydown',
			filterEvent('[name="edit"]', this.endEdit)
		);

		this.addEventListener('dblclick', this.startEdit);
	}

	get name() {
		return this.getAttribute('name');
	}

	async remove() {
		await this.store.remove(this.name);
	}

	async toggle() {
		await this.store.toggle(this.name);
	}

	async startEdit() {
		await this.store.startEdit(this.name);

		this.querySelector('.edit').select();
	}

	async endEdit(event, target) {
		if (event.type === 'keydown' && event.key !== 'Enter') {
			return;
		}

		await this.store.edit(this.name, target.value);
	}
}
