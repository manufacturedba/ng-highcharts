module.exports = function(grunt){
    grunt.initConfig({
        watch: {
            public: {
                files: 'app/**/*.*',
                options: {
                    livereload: true
                }
            },
			karma: {
				files: ['app/**/*.js', 'test/unit/**/*.js'],
				tasks: ['karma:unit:run']
			}
        },
		karma: {
			unit: {
				configFile: 'test/karma.conf.js',
				background: true
			}
		}
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	grunt.task.registerTask('serve', ['karma:unit','watch']);
}