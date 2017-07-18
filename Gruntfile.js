module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // sass:{
        //     files: {
        //         expand: true,
        //         src: ['css/style.scss'],
        //         dest: 'sass/style.css',
        //         ext: '.css'
        //     }
        // },

         sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['css/*.scss'],
                    dest: './sass',
                    ext: '.css'
                }]
                }
            },
              

        watch: {
            scss: {                     
                files: ['css/*.scss'], 
                task: ['sass'] 
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
    grunt: grunt.registerTask('default', [ 'sass', 'autoprefixer', 'watch']);
};