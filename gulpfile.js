let gulp = require('gulp');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');
let concat = require('gulp-concat');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
let named = require('vinyl-named');
let clean = require('gulp-clean');
let browserSync = require('browser-sync');

gulp.task('html', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
    gulp.src('src/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('vendorCss', () => {

    let libs = [
        'node_modules/angular-material/angular-material.min.css'
    ];

    gulp.src(libs)
        .pipe(concat('vendor.styles.css'))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('app', () => {

    const markup = {
        test: /\.html$/,
        loaders: ['ngtemplate-loader', 'html-loader']
    };

    const scripts = {
        test: /\.js$/,
        exclude: /src\/app/,
        loaders: ['ng-annotate-loader', 'uglify-loader', 'babel-loader?presets[]=es2015']
    };

    let config = {
        devtool: 'sourcemap',
        module: {
            loaders: [scripts, markup]
        },
        plugins: []
    };
    return gulp.src('src/app/root.module.js')
        .pipe(named())
        .pipe(gulpWebpack(config, webpack))
        .pipe(gulp.dest('dist/app'))
});

gulp.task('vendorJs', () => {

    let libs = [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-material/angular-material.min.js'
    ];

    gulp.src(libs)
        .pipe(concat('vendor.libs.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('builder', ['app', 'vendorJs', 'html', 'css', 'vendorCss']);

gulp.task('build', ['clean'], () => {
    return gulp.start('builder');
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.js', ['app']);
    gulp.watch('src/**/*.css', ['css']);
    gulp.watch('dist/**/*').on('change', browserSync.reload);
});

gulp.task('serve', () => {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'dist'
        }
    });
});

