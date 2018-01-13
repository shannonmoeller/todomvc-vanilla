export function debounce(fn, ms = 0) {
	return function debounced(...args) {
		if (debounced.id) {
			clearTimeout(debounced.id);
		}

		debounced.id = setTimeout(() => fn(...args), ms);
	};
}
