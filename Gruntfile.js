module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    base: 'app',
                    open: {
                        target: 'http://localhost:9000/my-app/'
                    },
                    // middleware: function (connect, options, middlewares) {
                    //     var modRewrite = require('connect-modrewrite');
                    //     middlewares.unshift(modRewrite(['!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png$ /index.html [L]']));
                    //     return middlewares;
                    // }
                    middleware: function (connect, options, middlewares) {
                        var modRewrite = require('connect-modrewrite');
                        middlewares.unshift(modRewrite([
                            '^(?!^/my-app/).*[.html|.js|.css|.svg|.jpg|.jpeg|.png] /index.html [L]'
                        ]));
                        return middlewares;
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
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'my-app',
                        src: 'index.html',
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        cwd: 'my-app',
                        src: 'app/views/*.html',
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        cwd: '.',
                        src: 'bower_components/**/*',
                        dest: 'dist/'
                    }
                ]
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            dist: {
                files: {
                    'dist/app/js/app.js': ['my-app/app/js/app.js'],
                    'dist/app/js/homeCtrl.js': ['my-app/app/js/homeCtrl.js'],
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/app/styles/app.css': ['my-app/app/styles/*.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', [
        'uglify',
        'cssmin',
        'copy',
    ]);

    grunt.registerTask('default', ['connect', 'watch']);
};
