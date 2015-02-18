module.exports =  function(grunt){
	grunt.initConfig ({
		less: {
			development: {
				options: {
					compress: false,
					yuicompress: true,
					optimization: 2
				},
				files: {
					// target file.css: source file.less
					"src/css/valiant-left.css" : "src/less/left-folded/left-folded.less",
					"src/css/valiant-right.css" : "src/less/right-folded/right-folded.less",
					"src/css/demo.css" : "src/less/demo/main-layout.less"
				}
			}
		},
		watch: {
			files: ['**/*.less'],
			tasks: ['less'],
			options: {
				nospawn: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};