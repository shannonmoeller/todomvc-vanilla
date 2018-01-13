import test from 'blue-tape';
import { debounce } from './utils-function.js';

test('debounce()', t => {
	t.plan(1);

	const fn = debounce(i => {
		t.equal(i, 3);
		t.end();
	});

	fn(1);
	fn(2);
	fn(3);
});
