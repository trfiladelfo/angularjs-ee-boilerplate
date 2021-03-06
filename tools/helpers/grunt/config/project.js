module.exports = function(grunt) {

grunt.config('project', {

  paths: {
    src: '../src',
    build: '.temp',
    dist: '../dist',
    templates: 'templates',
    editorconfig: '../.editorconfig'
  },

  require: {
    name: 'ng.app',
    config: '<%= project.paths.src %>/require.config.js',
    build: '<%= project.paths.build %>/require.build.config.js'
  },

  frontend: {
    port: {
      browserSync: {
        min: 4000,
        max: 4100
      }, // default min: 3000 and max: 3100
      connect: 1337,
      livereload: 9999 // default: 35729,
    }
  },

  backend: {
    context: 'rest',

    proxies: [
      {
        context: '/<%= project.backend.context %>',
        host: 'localhost',
        port: 9000,

        // https://github.com/drewzboto/grunt-connect-proxy#proxy-configuration
        xforward: false
      }
    ]
  }

});

};
