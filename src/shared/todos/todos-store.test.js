import test from 'blue-tape';
import TodosStore from './todos-store.js';

test('new TodosStore()', async t => {
	const a = new TodosStore();
	const b = new TodosStore([]);

	t.deepEqual(a.todos, []);
	t.deepEqual(b.todos, []);

	t.equal(a.count, 0);
	t.equal(a.remainingCount, 0);
});

test('.add()', async t => {
	const a = new TodosStore()
		.add()
		.add('')
		.add(' ')
		.add('foo')
		.add(' bar ');

	t.deepEqual(a.todos.map(x => x.title), ['foo', 'bar']);
});

test('.edit()', async t => {
	const a = new TodosStore([{ id: 'foo', title: 'bar' }]);

	a.edit('bogus', 'hello world');
	a.edit('foo');

	t.deepEqual(a.todos, [{ id: 'foo', title: 'bar' }]);

	a.edit('foo', ' baz ');

	t.deepEqual(a.todos, [{ id: 'foo', title: 'baz' }]);
});

test('.toggle()', async t => {
	const a = new TodosStore([{ id: 'foo', completed: false }]);

	a.toggle('bogus');
	a.toggle('foo');

	t.deepEqual(a.todos, [{ id: 'foo', completed: true }]);

	a.toggle('foo');

	t.deepEqual(a.todos, [{ id: 'foo', completed: false }]);
});

test('.remove()', async t => {
	const a = new TodosStore([
		{ id: 'foo', completed: false },
		{ id: 'bar', completed: false },
		{ id: 'baz', completed: true },
	]);

	a.remove('bogus');
	a.remove('bar');

	t.deepEqual(a.todos, [
		{ id: 'foo', completed: false },
		{ id: 'baz', completed: true },
	]);
});

test('.removeCompleted()', async t => {
	const a = new TodosStore([
		{ id: 'foo', completed: false },
		{ id: 'bar', completed: false },
		{ id: 'baz', completed: true },
	]);

	t.equal(a.count, 3);
	t.equal(a.remainingCount, 2);

	a.removeCompleted();

	t.equal(a.count, 2);
	t.equal(a.remainingCount, 2);
	t.deepEqual(a.todos, [
		{ id: 'foo', completed: false },
		{ id: 'bar', completed: false },
	]);
});
