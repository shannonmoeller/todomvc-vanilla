import test from 'blue-tape';

test('should test in browser', async t => {
	t.equal(typeof window, 'object');
});
