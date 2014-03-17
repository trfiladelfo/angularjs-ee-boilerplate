module.exports = {

  reload: {
    files : [
      '<%= project.paths.src %>/**/*.{html,css,js}'
    ],
    options: {
      livereload: true
    }    
  },

  js: {
    files: [
      '<%= project.paths.src %>/**/*.js'
    ],
    tasks : [ 'jshint:project' ]
  },

  less: {
    files: [
      '<%= project.paths.src %>/**/*.less'
    ],
    tasks : [ 'less:dev' ]
  }

};