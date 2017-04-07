var gulp          = require('gulp'),
nested        = require('postcss-nested'),
cssvars       = require('postcss-simple-vars'),
postcss       = require('gulp-postcss'),
autoprefixer  = require('autoprefixer'),
mixins        = require('postcss-mixins'),
cssImport     = require('postcss-import');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(err){
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
