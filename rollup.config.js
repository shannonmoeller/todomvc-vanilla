import node from 'rollup-preset-node';
import istanbul from 'rollup-plugin-istanbul';

const plugins = node();
const exclude = ['node_modules/**', '**/*.test.js'];

if (process.env.NODE_ENV === 'test') {
	plugins.push(istanbul({ exclude }));
}

module.exports = {
	plugins,
	output: {
		format: 'iife',
		name: 'todomvcVanilla',
	},
};
