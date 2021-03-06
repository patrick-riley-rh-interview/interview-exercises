var gulp = require('gulp');
var source = require('vinyl-source-stream');
var babelify = require("babelify");
var watchify = require('watchify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var notify = require("gulp-notify");
var path = require('path');
var eslint = require('gulp-eslint');
var reload = browserSync.reload;

var opts = {
  appJs: './src/AngularJs/es6/js/main.js',
  appFolder: './src/AngularJs/es6/js/',
  jsOutfile: 'bundle.js',
  jsOutFolder: './src/AngularJs/es6/dist/'
};

gulp.task('serve', function () {
  browserSync({
    server: './src'
  });

  gulp.watch('src/**/*.less', ['less']);
  gulp.watch('src/**/*.html').on('change', reload);
  gulp.watch('src/**/*.css').on('change', reload);
  gulp.watch('src/**/*.js').on('change', reload);
});

gulp.task('lint', function () {

  return gulp.src(['**/*.js', '!node_modules/**', '!src/AngularJs/es6/dist/**', '!src/bower_components/**/*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('less', function () {
  return gulp.src(['./src/HtmlCss/less/main.less'])
    .pipe(less({
      paths: [path.join(__dirname)]
    }))
    .pipe(gulp.dest('./src/HtmlCss/css'))
    .pipe(reload({stream: true}));
});

gulp.task('browserify', function () {
  var bundler = watchify(browserify(opts.appJs, watchify.args));
  bundler.transform(babelify, {presets: ["es2015"]});
  bundler.on('update', rebundle);

  function rebundle () {
    return bundler.bundle()
      .on('error', swallowError)
      .pipe(source(opts.jsOutfile))
      .pipe(gulp.dest(opts.jsOutFolder))
      .pipe(reload({stream: true}))
      .pipe(notify("Browser reloaded after watchify update!"));
  }

  return rebundle();
});

function swallowError () {
  this.emit('end');
}

gulp.task('default', ['lint', 'less', 'serve', 'browserify']);