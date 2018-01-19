import test from 'blue-tape';
import server from './index.js';

test('should pass', async t => {
	t.ok(server);
});
