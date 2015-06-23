var gulp = require('gulp');
var autoPrefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var imageMin = require('gulp-imagemin');
var cssbeautify = require('gulp-cssbeautify');

/* ==================================================
     SERVER
================================================== */

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./assets/css/*.css', ['styles']);
    gulp.watch('./*.html').on('change', browserSync.reload);
    
});

/* ==================================================
     STYLES
================================================== */

gulp.task('styles', function () {
    gulp.src('./assets/css/*.css')
        .pipe(
            autoPrefixer({
                browsers: ['> 5%', 'IE 10']

            })
        )
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream());

});

/* ==================================================
     OPTIMISATION DES IMAGES
================================================== */

gulp.task('opt-images', function () {
    return gulp.src('./assets/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./assets/img/'))
});

/* ==================================================
     INDENTATION CSS
================================================== */

gulp.task('indent-css', function() {
    return gulp.src('./assets/css/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./assets/css/'));;
});