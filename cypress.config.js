const config = {
	screenshotOnRunFailure: false,
	video: false,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config);
		},
		specPattern: 'test/**/**/*.test.ts',
		excludeSpecPattern: ['test/black_box/**'],
	}
};

module.exports = config;