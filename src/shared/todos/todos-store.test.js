import test from 'blue-tape';
import TodosStore from './todos-store.js';

test('new TodosStore()', async t => {
	const a = new TodosStore();
	const b = new TodosStore([]);

	t.deepEqual(a.todos, []);
	t.deepEqual(b.todos, []);
});

test('.add()', async t => {
	const a = new TodosStore();

	a.add();
	a.add('');
	a.add(' ');
	a.add('foo');
	a.add(' bar ');

	t.deepEqual(a.todos.map(x => x.title), ['foo', 'bar']);
});

test('.edit()', async t => {
	const a = new TodosStore([
		{ id: 'foo', title: 'hello' },
		{ id: 'bar', title: 'world' },
	]);

	a.edit('bogus', 'goodnight moon');
	a.edit('bar');

	t.deepEqual(a.todos, [{ id: 'foo', title: 'hello' }]);

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

	a.removeCompleted();

	t.deepEqual(a.todos, [
		{ id: 'foo', completed: false },
		{ id: 'bar', completed: false },
	]);
});
