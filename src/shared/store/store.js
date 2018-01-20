import { debounce } from '../utils/utils-function.js';

export default class Store {
	constructor() {
		this.listeners = new Set();

		this.update = debounce(this.update);
	}

	addListener(listener) {
		this.listeners.add(listener);

		return () => {
			this.listeners.delete(listener);
		};
	}

	update() {
		this.listeners.forEach(x => x());
	}
}
