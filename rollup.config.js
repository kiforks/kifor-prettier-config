import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	output: {
		file: './.prettierrc.js',
		format: 'es',
		sourcemap: true,
	},
	plugins: [
		resolve({
			browser: true,
			extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
		}),
		commonjs(),
		typescript(),
	],
};
