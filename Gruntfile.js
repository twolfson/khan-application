module.exports = function(grunt) {
  // Configure grunt
  grunt.initConfig({
    // Linting
    jshint: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,

        strict: false,
        globals: {
          exports: true,
          describe: true,
          before: true,
          it: true
        }
      }
    },

    // External asset management
    'curl-dir': {
      json: {
        src: [
          'https://www.khanacademy.org/api/v1/badges?casing=camel&format=pretty',
          'https://www.khanacademy.org/api/v1/badges/categories?casing=camel&format=pretty'
        ],
        dest: 'tmp-setup/js/',
        router: function (url) {
          // Map `badges` to `badges.json` and `badges/categories` to `categories.json`
          if (url.indexOf('badges/categories') !== -1) {
            return 'categories.json';
          } else {
            return 'badges.json';
          }
        }
      }
    },
    // copy (see `copy:json`)

    // Compiling and distribution
    copy: {
      json: {
        files: [{
          src: 'tmp-setup/js/categories.json',
          dest: 'public/js/categories.json'
        }]
      },
      'public': {
        files: [{
          expand: true,
          cwd: 'public/',
          src: ['css/*'],
          dest: 'dist/'
        }]
      }
    },
    browserify: {
      'public': {
        files: [{
          src: 'public/js/main.js',
          dest: 'dist/js/main.js'
        }]
      }
    },
    template: {
      'public': {
        files: [{
          src: ['public/index.jade'],
          dest: 'dist/index.html'
        }],
        variables: {
          // TODO: These should be `try/catch` loaded or lazy loaded
          //   since `curl-dir` might not have yet occurred
          badges: require('./public/js/badges.json'),
          categories: require('./public/js/categories.json')
        }
      }
    },

    // Development workflow
    watch: {
      'default': {
        files: '<%= jshint.files %>',
        tasks: ['default']
      }
    }
  });

  // TODO: Define custom task to download our images

  // Define a custom task to stable sort our badges and add `prev/next` slug references
  grunt.defineTask('customize-badges', function () {

  });

  // Load in grunt tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-templater');

  // Define one-time setup tasks
  grunt.registerTask('setup', ['curl-dir:json', 'copy:json', 'customize-badges']);

  // Define our tasks
  grunt.registerTask('build', ['copy:public', 'browserify:public', 'template:public']);
  grunt.registerTask('lint', ['jshint']);

  grunt.registerTask('default', ['lint']);
};
