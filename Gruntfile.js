module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [
          'app/**/*.js',
          'app/**/*.spec.js'],
      },
      css: {
        files: [
          'app/**/*.css'
        ]
      },
      karmaTest: {
        files: ['app/**/*.spec.js']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', function(){
    grunt.task.run(['watch']);
  });

};