"use strict"

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const pug = require('gulp-pug');

const $ = gulpLoadPlugins();

gulp.task('babel', () => {
	gulp.src('./src/scripts/**/*.js')
		.pipe($.babel())
		.pipe(gulp.dest('./docs/scripts'));
});

gulp.task('sass', () => {
	gulp.src('./src/sass/**/*sass')
		.pipe(sass({
			preferredSyntax: 'sass'
		}))
		.pipe(postcss([ cssnext() ]))
		.pipe(gulp.dest('./docs/stylesheets'));
});

gulp.task('pug', () => {
	gulp.src('./src/pug/**/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./docs'));
});

gulp.task('watch', () => {
	gulp.watch('./src/pug/**/*.pug', ['pug']);
	gulp.watch('./src/sass/**/*.sass', ['sass']);
	gulp.watch('./src/scripts/**/*.js', ['babel']);
});

gulp.task('dev', ['watch', 'pug', 'sass', 'babel']);