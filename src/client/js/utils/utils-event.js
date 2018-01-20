export function filterEvent(selector, callback) {
	/* eslint-disable no-invalid-this */
	return function filteredEvent(event) {
		const el = event.target.closest(selector);

		if (el && this.contains(el)) {
			return callback.call(this, event, el);
		}
	};
}
