'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'src/assets/sass/**/*.scss',
    'dest': 'public/css',
    'watch': 'src/assets/sass/**/*.scss'
  },

  'scripts': {
    'src' : 'src/assets/js/**/*.js',
    'dest': 'public/js'
  },

  'images': {
    'src' : 'src/assets/images/**/*',
    'dest': 'public/img'
  },

  'views': {
    'watch': 'src/views/**/*.jade',
    'src': 'src/views/*.jade'
  },

  'copy': {
    'bower': [
      'bower_components/jquery/dist/jquery.js'
    ]
  },

  'dist': {
    'root'  : 'public'
  }

};