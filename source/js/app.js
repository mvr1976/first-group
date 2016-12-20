$(document).ready(function(){
      $('.slider-index').slick({ 
      	dots: true,
      	// dotsClass: 'custom-dots',
      	initialSlide:1,
        accessibility: true,
       //  // adaptiveHeight: true,
        arrows: false,
       //  appendDots: '.slider-index',
        // autoplay: true
        // appendArrows: $('.slider-index')
        // autoplaySpeed: 2000
      });
    });
//wood-slider
$(document).ready(function(){
      // $('.wood-slider').slick({ 
      //   dots: true,
        
      //   initialSlide:1,
      //   accessibility: true,
       
      //   arrows: true
       
      // });
      // var x = $('.wood-slide').filter('.slick-active');
      // var y = x.data('class');
      // console.log(y);
      $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
      });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
      
    });
//wood-slider
//another-page
$(document).ready(function(){
      $('.test-slider').slick({ 
      	dots: true,
      	speed: 500,
      	pauseOnFocus: false
      	// dotsClass: 'dots-cont'
      	// initialSlide:1,
       //  accessibility: true,
       //  // adaptiveHeight: true,
        //arrows: false,
       //  appendDots: '.slider-index',
        //autoplay: true
        // appendArrows: $('.slider-index')
        // autoplaySpeed: 2000
      });
    });
$(document).ready(function(){
  $(".inner-pages-container").css("display","none").fadeIn(1500);
});
$(document).ready(function(){
  $(".single-page-container").css("display","none").fadeIn(1500);
});

//adoptive img height
var sliderHeight = (function(){
	var currentContainerHeight = $('.slider-container').innerHeight();
	$('.slider-index').height(currentContainerHeight);
	$(window).on('resize', function(){
		location.reload();
		
	});
	
}());

//mobile-nav
$(document).ready(function() {

  var $demo = $(".demo");
  var menuTextAT = 500;

  $(document).on("click", ".demo__menu-btn", function() {
    $demo.addClass("menu-active");
  });

  $(document).on("click", ".demo__menu-item", function() {
    var $item = $(this);
    var targetSection = $item.data("section");
    $item.addClass("clicked");
    $demo.removeClass("menu-active");
    $(".demo__section.active-section").removeClass("active-section");
    $(".demo__section--"+ targetSection).addClass("active-section");

    setTimeout(function() {
      $item.removeClass("clicked");
    }, menuTextAT);
  });

});
//mobile-nav -end

//inner pages css animate
$(document).ready(function() {
  $(".sample__link").on("click", function() {
    $(".sample__item").addClass("zoomOut");
  });
});
//handle inner menu active class
$(function () {     // Когда страница загрузится
    $('.nav-link__inner').each(function () {// получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href;  // получаем адрес ссылки
        if(location == link) {  //ри совпадении адреса ссылки и адреса окна
            $(this).addClass('active');  //добавляем класс
        }
    });
});

//hide-menu
$(document).ready(function(f) {
 var element = f('.single-page-header-sticky');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);           
    });
});

//parallax mouse move
$(window).on('mousemove', function(e){
  var mouseX = e.pageX,
    mouseY = e.pageY,
    w = window.innerWidth/2 - mouseX,
    h = window.innerHeight/2 - mouseY;   
  $('.parallax__bg').css({
    'transform': 'translate3D('+ w *(1/50) +'px,'+ h *(1/50) + 'px,'+ 0 +')'
  });
});
//end parallax mouse move











