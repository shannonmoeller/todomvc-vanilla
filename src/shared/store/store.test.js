import test from 'blue-tape';
import Store from './store.js';

test('new Store()', async t => {
	const a = new Store();

	t.equal(typeof a.update, 'function');
});
