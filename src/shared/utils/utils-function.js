export function defer() {
	let resolve;
	let reject;

	const promise = new Promise((a, b) => {
		resolve = a;
		reject = b;
	});

	promise.resolve = resolve;
	promise.reject = reject;

	return promise;
}

export function debounce(fn, ms = 0) {
	let promise = defer();
	let id = null;

	function exec(args) {
		try {
			promise.resolve(fn(...args));
		} catch (e) {
			promise.reject(e);
		} finally {
			promise = defer();
		}
	}

	return function debounced(...args) {
		if (id) {
			clearTimeout(id);
		}

		id = setTimeout(exec, ms, args);

		return promise;
	};
}
