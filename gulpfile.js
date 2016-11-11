"use strict"

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const pug = require('gulp-pug');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');

const $ = gulpLoadPlugins();

gulp.task('babel', () => {
	return gulp.src([
			'./src/scripts/fullscreen.js',
			'./src/scripts/driver.js',
			'./src/scripts/entry.js'
		])
		.pipe(plumber())
		.pipe($.babel())
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('./docs/scripts'));
});

gulp.task('sass', () => {
	gulp.src('./src/sass/**/*sass')
		.pipe(plumber())
		.pipe(sass({
			preferredSyntax: 'sass'
		}))
		.pipe(postcss([ cssnext() ]))
		.pipe(gulp.dest('./docs/stylesheets'));
});

gulp.task('pug', () => {
	gulp.src('./src/pug/**/*.pug')
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest('./docs'));
});

gulp.task('watch', () => {
	gulp.watch('./src/pug/**/*.pug', ['pug']);
	gulp.watch('./src/sass/**/*.sass', ['sass']);
	gulp.watch('./src/scripts/**/*.js', ['babel']);
});

gulp.task('dev', ['watch', 'pug', 'sass', 'babel']);