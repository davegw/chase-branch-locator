module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    appPath: {
      client: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },
    watch: {
      injectJS: {
        files: [
          '<%= appPath.client %>/{app,components}/**/*.js',
          '!<%= appPath.client %>/{app,components}/**/*.spec.js',
          '!<%= appPath.client %>/{app,components}/**/*.mock.js',
          '!<%= appPath.client %>/app/app.js'],
        tasks: ['injector:scripts']
      },
      injectCss: {
        files: [
          '<%= appPath.client %>/{app,components}/**/*.css'
        ],
        tasks: ['injector:css']
      },
      mochaTest: {
        files: ['server/**/*.spec.js'],
        tasks: ['env:test', 'mochaTest']
      },
      livereload: {
        files: [
          '{.tmp,<%= appPath.client %>}/{app,components}/**/*.css',
          '{.tmp,<%= appPath.client %>}/{app,components}/**/*.html',
          '{.tmp,<%= appPath.client %>}/{app,components}/**/*.js',
          '!{.tmp,<%= appPath.client %>}{app,components}/**/*.spec.js',
          '!{.tmp,<%= appPath.client %>}/{app,components}/**/*.mock.js'
        ],
        options: {
          livereload: true
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
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