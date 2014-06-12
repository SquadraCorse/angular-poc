
/* global module, require */
module.exports = function (grunt) {

	'use strict';

	// POC DONE: HAVE FREAK-ANGULAR IN CURRENT PIPELINE GENERATING UNIT AND COVERAGE REPORTING
	// POC NOW: SHOW COMPLETE STACK TO HAVE FEATURE BASED DEVELOPMENT IN PLACE

	grunt.option('force', true);
	//grunt.option('debug', true);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		shell: {
			options : {
				stdout: true
			},
			npm_install: {
				command: 'npm install'
			}
		},

		connect: {
			options: {
				hostname: 'localhost',
				base: './'
			},
			test: {
				options: {
					port: 8000
				}
			},
			open: {
				options: {
					open: true,
					livereload: true
				}
			}
		},


		karma: {
			options: {
				configFile: 'test/karma.conf.js',
				runnerPort: 9999,
				browsers: ['Chrome']
			},
			dev: {
				reporters: 'dots'
			},
			unit: {
				singleRun: true,
				browsers: ['PhantomJS']
			}
		},


		uglify: {
			app: {
				files: {
					'target/static/js/app.js': [
						'src/app/js/*.js'
					]
				}
			},
			lib: {
				files: {
					"target/static/js/lib.js" : [ 
						"src/app/js/lib/jquery.js",
						"src/app/js/lib/angular.js",
						"src/app/js/lib/angular-animate.js",
						"src/app/js/lib/angular-route.js",
						"src/app/js/lib/angular-resource.js"
					]
				}
			}
		},


		protractor: {
			options: {
				configFile: "node_modules/protractor/referenceConf.js",
				keepAlive: false,
				noColor: false,
				args: { }
			},

			dev: {
				options: {
					configFile: "test/protractor-grunt.js",
					args: { }
				}
			},

			sauce: {
				options: {
					configFile: "test/sauce-e2e.conf.js",
					args: { }
				}
			}

		},


		clean: {
			target: ["target/"]
		},


		// TODO: NOT REPLACING BUT COPY TASK IS NOW ENOUGH
		replace : {
			coverage : {
				src: ['target/karma-coverage/PhantomJS*/lcov.info'],
				dest: 'target/karma-coverage/lcov.info',
				replacements: [
					{
						from : 'SF:./',
						to : 'SF:./'
					}
				]
			}

		}


	});


	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-protractor-runner');

	grunt.registerTask('default', ['clean', 'karma:unit', 'uglify']);

	grunt.registerTask('test', ['karma:unit']);

	// UNIT TESTING
	grunt.registerTask('test:unit', ['karma:unit']);

	// E2E TESTING
	grunt.registerTask('e2e:dev', ['connect:test', 'protractor:dev']);
	grunt.registerTask('e2e:sauce', ['connect:test', 'protractor:sauce']);

	// SHELL
	grunt.registerTask('install', ['shell:npm_install']);


	// MAKE PACKAGE: MAVEN BAMBOO
	grunt.registerTask('production', ['clean', 'test:unit', 'e2e:sauce', 'uglify']);

};
