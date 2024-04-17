/** @type {import('jest').Config} */
export default {
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testMatch: ['**/*.spec.ts', '**/*.spec.js'],
	moduleFileExtensions: ['ts', 'js', 'json'],
};
