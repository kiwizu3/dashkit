var gulp = require("gulp"),
    sass = require("gulp-sass"),
    rename = require("gulp-rename"),
    livereload = require("gulp-livereload"),
    minifyCss = require("gulp-cssnano"),
    pug = require("gulp-pug"),
    watch = require("gulp-watch");

gulp.task('sass', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch-sass', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('jade', function () {
  return gulp.src('./*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch-pug', function () {
  gulp.watch('./**/*.pug', gulp.series('jade'));
});

gulp.task('default', gulp.parallel('sass', 'watch-sass', 'jade', 'watch-pug'));