import { debounce } from '../utils/utils-function.js';

const update = debounce(listeners => {
	listeners.forEach(x => x());
});

export default class Store {
	constructor() {
		this.listeners = new Set();
	}

	addListener(listener) {
		this.listeners.add(listener);

		return () => this.listeners.delete(listener);
	}

	update() {
		update(this.listeners);

		return this;
	}
}
