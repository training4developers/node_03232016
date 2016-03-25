module.exports = function(grunt) {

	grunt.loadNpmTasks('intern');

  grunt.initConfig({
    intern: {
      main: {
        options: {
          config: 'tests/intern',
          reporters: [ 'Console' ],
        }
      }
    }
  });

	grunt.registerTask("test", ["intern"]);

}
