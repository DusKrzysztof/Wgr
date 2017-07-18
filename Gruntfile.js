module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    './css/main.css': './scss/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '/css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        autoprefixer: {
            scss: {
                options: {
                    browsers: ["last 4 version"]
                },
                files: 'css/*.css'
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt: grunt.registerTask('default', [ 'sass', 'autoprefixer', 'browserSync', 'watch']);
};