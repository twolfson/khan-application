module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
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

    watch: {
      'default': {
        files: '<%= jshint.files %>',
        tasks: ['default']
      }
    }
  });

  // Load in grunt tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-curl');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
