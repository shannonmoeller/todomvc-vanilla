import TodosElement from '../todos-element/todos-element.js';
import { delegate } from '../../js/utils/utils-event.js';

export default class TodosItemElement extends TodosElement {
	constructor() {
		super();

		this.addEventListener('dblclick', this.startEdit);

		this.addEventListener(
			'click',
			delegate('[name="remove"]', this.remove)
		);

		this.addEventListener(
			'click',
			delegate('[name="toggle"]', this.toggle)
		);

		this.addEventListener(
			'focusout',
			delegate('[name="edit"]', this.endEdit)
		);

		this.addEventListener(
			'keydown',
			delegate('[name="edit"]', this.endEdit)
		);
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

		this.querySelector('[name="edit"]').select();
	}

	async endEdit({ key, type }, target) {
		if (type === 'keydown' && key !== 'Enter') {
			return;
		}

		await this.store.edit(this.name, target.value);
	}
}
