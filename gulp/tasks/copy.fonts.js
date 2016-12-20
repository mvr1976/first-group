'use strict';

module.exports = function() {
  $.gulp.task('copy:fonts', function() {
    return $.gulp.src([
    	'./source/fonts/**/*.*',
    	'./bower_components/font-awesome/fonts/fontawesome-webfont.*',
    	'./node_modules/slick-carousel/slick/fonts/slick.*'
    	])
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};
