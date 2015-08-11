module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: [
					{
						src: ['css/Uncompressed/**/*.scss'],
						dest: 'css/Core.css'
					}
				]
			}
		},

      	concat: {
        	js: {
          		src: ["js/Uncompressed/**/*.js"],
          		dest: "js/Core.js"
        	}
      	},

		watch: {
			css: {
				files: 'css/Uncompressed/**/*.scss',
				tasks: ['sass']
			},

			js: {
				files: 'js/Uncompressed/**/*.js',
				tasks: ['concat:js']
			},
		}

	});

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('js', ['concat:js']);

}