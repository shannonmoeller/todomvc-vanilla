import { debounce } from '../utils/utils-function.js';

function update(listeners) {
	listeners.forEach(x => x());
}

const debouncedUpdate = debounce(update);

export default class Store {
	constructor() {
		this.listeners = new Set();
	}

	addListener(listener) {
		this.listeners.add(listener);

		return () => {
			this.listeners.delete(listener);
		};
	}

	update() {
		return debouncedUpdate(this.listeners);
	}
}
