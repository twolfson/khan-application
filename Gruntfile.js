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
        dest: 'public/js/',
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

    // Compiling and distribution
    copy: {
      'public': [{
        expand: true,
        src: 'public/{css,js}/*',
        dest: 'dest/'
      }]
    },
    template: {
      jade: {
        files: [{
          src: ['public/index.jade'],
          dest: 'dist/index.html'
        }],
        variables: {}
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

  // Load in grunt tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-templater');

  // Define our tasks
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('build', ['copy', 'template']);
  grunt.registerTask('default', ['lint']);
};
