import commonjs from 'rollup-plugin-commonjs';
import istanbul from 'rollup-plugin-istanbul';
import multiEntry from 'rollup-plugin-multi-entry';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import nodeGlobals from 'rollup-plugin-node-globals';
import nodeResolve from 'rollup-plugin-node-resolve';

const isTest = process.env.NODE_ENV === 'test';

const plugins = [
	commonjs(),
	nodeGlobals(),
	nodeBuiltins(),
	nodeResolve(),
	multiEntry(),
];

if (isTest) {
	plugins.push(
		istanbul({
			exclude: ['node_modules/**', '**/*.test.js'],
		})
	);
}

module.exports = {
	plugins,
	output: {
		format: 'es',
		sourcemap: !isTest,
	},
};
