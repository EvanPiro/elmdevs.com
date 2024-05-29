const dotenv = require('dotenv');
const fs = require('fs');
const timers = require('timers');

global.setImmediate = timers.setImmediate;

// Check if .dev.vars exists
if (fs.existsSync('.dev.vars')) {
	// If it exists, load .dev.vars
	dotenv.config({ path: '.dev.vars' });
} else {
	// If it doesn't exist, fall back to .env
	dotenv.config();
}

module.exports = {
	preset: 'ts-jest',
	testTimeout: 880000,
	testEnvironment: 'miniflare',
	setupFiles: ['./jest.setup.js'],
	testEnvironmentOptions: {
		bindings: process.env,
		kvNamespaces: ['TEST_NAMESPACE'],
		// d1Databases: ['__D1_BETA__db'],
		// r2Buckets: ["DOC_BUCKET"],
	},
};
