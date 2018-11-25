var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    nunjucksRender = require('gulp-nunjucks-render'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

// the paths of where each item resides

var jsSources = ['Src/scripts/**/*.js'],
    sassSources = ['Src/styles/main.scss'],
    htmlSources = ['Dist/**/*.html'],
    nunjuckSources = ['Src/pages/**/*.+(html|nunjucks)'],
    outputDir = 'Dist';

gulp.task('sass', function() {
  gulp.src(sassSources)
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('Dist'))
  .pipe(connect.reload())
});

gulp.task('js', function() {
  gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(['Src/styles/**/*.scss'], ['sass']);
  gulp.watch(nunjuckSources, ['nunjucks']);
  gulp.watch(['Src/templates/**/*.+(html|nunjucks)'], ['nunjucks']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: './Dist',
    livereload: true
  })
});

gulp.task('nunjucks', function() {
  return gulp.src(nunjuckSources)
  .pipe(nunjucksRender({
    path: ['Src/templates']
  }))
  .pipe(gulp.dest('Dist'))
  .pipe(connect.reload())
});

gulp.task('html', function() {
  return gulp.src(htmlSources)
  .pipe(connect.reload())
});


gulp.task('default', ['html', 'nunjucks', 'js', 'sass', 'connect', 'watch']);
