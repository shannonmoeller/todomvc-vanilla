export function delegate(selector, callback) {
	/* eslint-disable no-invalid-this */
	return function delegated(event) {
		const target = event.target.closest(selector);

		if (target && this.contains(target)) {
			return callback.call(this, event, target);
		}
	};
}
