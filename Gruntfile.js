// Generated on 2015-11-13 using generator-angular 0.14.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
  });

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    example: 'example'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/src/{,*/}*.js'],
        tasks: ['newer:jshint:all', 'newer:jscs:all']
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    },

    // Make sure there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/src/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Make sure code styles are up to par
    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/src/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*',
            '<%= yeoman.example %>/{,*/}*'
          ]
        }]
      },
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        javascriptsDir: '<%= yeoman.app %>/src',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/beanext-ui-datepicker.min.js'
        ]
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      js: ['<%= yeoman.dist %>/beanext-ui-datepicker.min.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>'
        ]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    uglify: {
      dist: {
        files: [{
          src: '<%= yeoman.app %>/src/beanext-ui-datepicker.js',
          dest: '<%= yeoman.dist %>/beanext-ui-datepicker.min.js'
        }]
      }
    },
    concat: {
      dist: {},
      example: {
        files: [{
          src:'<%= yeoman.app %>/scripts/{,*/}*.js',
          dest: '<%= yeoman.example %>/scripts/demo.js'
        }]
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/lib/',
          dest: '<%= yeoman.dist %>/lib/datepicker/',
          src: [
            '**'
          ]
        }]
      },
      example: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.dist %>',
          dest: '<%= yeoman.example %>/scripts/',
          src: [
            '{,*/}*.*'
          ]
        },{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/lib/',
          dest: '<%= yeoman.example %>/scripts/lib/datepicker/',
          src: [
            '**'
          ]
        },{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.example %>',
          src: [
            'demo.html'
          ]
        },{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/../bower_components/angular/',
          dest: '<%= yeoman.example %>/scripts/lib/angular/',
          src: [
            'angular.min.js'
          ]
        }]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      test: [
        'compass'
      ],
      dist: [
        'compass:dist'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('test', [
    'concurrent:test',
    //'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'concurrent:dist',
    'concat',
    'copy:dist',
    'uglify',
    'usemin',
    //'filerev'
    'copy:example'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ]);
};
