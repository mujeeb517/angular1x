module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    open: {
                        target: 'http://localhost:9000/my-app/'
                    }
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: ['my-app/**/*'],
            tasks: []
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect', 'watch']);
};
