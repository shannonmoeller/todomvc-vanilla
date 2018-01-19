import close from 'run-headless/close';
import test from 'blue-tape';
import './index.js';

test('should pass', async t => {
	t.ok(true);
});

test.onFinish(close);
