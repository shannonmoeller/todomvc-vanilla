const nodeGlobals = require('rollup-plugin-node-globals');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

module.exports = {
	output: {
		format: 'es',
		sourcemap: true,
	},
	plugins: [
		nodeGlobals(),
		nodeResolve({
			browser: true,
			preferBuiltins: false,
		}),
		commonjs(),
	],
};
