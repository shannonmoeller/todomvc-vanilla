export default class TodosElement extends HTMLElement {
	get store() {
		let el = this;

		while (el) {
			if (el._store) {
				return el._store;
			}

			el = el.parentNode;
		}

		return null;
	}

	set store(store) {
		this._store = store;
	}
}
