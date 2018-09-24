var gulp = require('gulp');
var sass = require('gulp-ruby');
var watch = require('gulp-watch');

//task para o sass
gulp.task('sass', function(){
    return sass('sass/**/*.sass').pipe(gulp.dest('css'));
});
//task para o watch
gulp.task('watch', function(){
    gulp.watch('sass/**/*.sass', ['sass'])
});
//task para o default
gulp.task('default', ['sass', 'watch']);