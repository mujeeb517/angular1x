module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    base: 'my-app',
                    open: {
                        target: 'http://localhost:9000/my-app/'
                    },
                    middleware: function (connect, options, middlewares) {
                        var modRewrite = require('connect-modrewrite');
                        middlewares.unshift(modRewrite(['!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png$ /index.html [L]']));
                        return middlewares;
                    }
                    // middleware: function (connect, options, middlewares) {
                    //     var modRewrite = require('connect-modrewrite');
                    //     middlewares.unshift(modRewrite([
                    //         '^(?!^/my-app/).*[.html|.js|.css|.svg|.jpg|.jpeg|.png] /index.html [L]'
                    //     ]));
                    //     return middlewares;
                    // }
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
