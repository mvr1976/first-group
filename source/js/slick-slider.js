$(document).ready(function(){
      // $('.slider-index').slick({        
      //   accessibility: true,
      //   adaptiveHeight: true,
      //   autoplay: true,
      //   autoplaySpeed: 2000
      // });
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

 