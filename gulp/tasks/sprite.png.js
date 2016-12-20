'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function(cb) {
    var spriteData = $.gulp.src('./source/to-sprite-png/*.png')
      .pipe($.gp.imagemin())
      .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                imgPath: '../img/sprite.png'
            }))      
      spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img/'))
      spriteData.css.pipe($.gulp.dest($.config.root + '/assets/css/'))
      cb();
  })
};

 
