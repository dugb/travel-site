var gulp          = require('gulp'),
    watch         = require('gulp-watch'),
    browserSync   = require('browser-sync').create();


gulp.task('watch', function(){

  browserSync.init({
    notify:false,
    server: {
      baseDir: "app"
    }
  });
  
  watch('./app/assets/**/*.css', function(){
    gulp.start('cssInject');
  })
});


  watch('./app/index.html', function(){
    browserSync.reload();
  });

  gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
      .pipe(browserSync.stream());
  });
