module.exports = function(grunt) {

  grunt.initConfig({
    mocha_istanbul: {
      coverage: {
        src: ["test"], // load used folders
        options: {
          mask: '**/*.js',
          excludes: ["**/test/**"], //we dont care about test coverage of our testing code
          print: "both", //prints both detailed and summary test data
          mochaOptions: [],
          istanbulOptions: ['--handle-sigint']
        }
      }
    },
    istanbul_check_coverage: {
      default: {
        options: {
          coverageFolder: 'coverage*', // will check both coverage folders and merge the coverage results
          check: {
            lines: 80,
            statements: 80
          }
        }
      }
    },
    jshint:{
      options:{
        esnext:true,
        curly: true,
        eqeqeq: true,
        node:true,
        predef: [ "$M", "$V" ]
      },
      all:["Gruntfile.js", "index.js", "lib/**/*.js"]
    }
  });

  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //grunt.registerTask('jshint', ['jshint:all']);
  grunt.registerTask('test', ['jshint', 'mocha_istanbul:coverage']);

};
