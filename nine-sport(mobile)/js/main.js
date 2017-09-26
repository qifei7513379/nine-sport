
//index轮播01

$(document).ready(function () {
	
  var mySwiper = new Swiper ('#swiper1', {
//  direction : 'vertical',
    loop: true,
    autoplay:2000,
    autoplayDisableOnInteraction : false,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
//  nextButton: '.swiper-button-next',
//  prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
//  scrollbar: '.swiper-scrollbar',
  })
  
})




//index 轮播02

/*********************/

$(document).ready(function () {
	
  var mySwiper = new Swiper ('#swiper2', {
//  direction : 'vertical',
    loop: true,
    autoplay:2000,
    autoplayDisableOnInteraction : false,
    // 如果需要分页器
//  pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
//  scrollbar: '.swiper-scrollbar',
  })
  
})

/*********************************/



//点击到顶部


/**超出多少显示**/
 $(window).scroll(function(){
     var sc=$(window).scrollTop();
     var rwidth=$(window).width()
        
    })
/****/
   $("#goTopBtn").click(function(){
    var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},500);
    })  
    


//侧边栏


! function(a) {
	"use strict";

	function b(b, d) {
		this.$el = a(b), this.opt = a.extend(!0, {}, c, d), this.init(this)
	}
	var c = {};
	b.prototype = {
		init: function(a) {
			a.initToggle(a), a.initDropdown(a)
		},
		initToggle: function(b) {
			a(document).on("click", function(c) {
				var d = a(c.target);
				d.closest(b.$el.data("sidenav-toggle"))[0] ? (b.$el.toggleClass("show"), a("body").toggleClass("sidenav-no-scroll"), b.toggleOverlay()) : d.closest(b.$el)[0] || (b.$el.removeClass("show"), a("body").removeClass("sidenav-no-scroll"), b.hideOverlay())
			})
		},
		initDropdown: function(b) {
			b.$el.on("click", "[data-sidenav-dropdown-toggle]", function(b) {
				var c = a(this);
				c.next("[data-sidenav-dropdown]").slideToggle("fast"), c.find("[data-sidenav-dropdown-icon]").toggleClass("show"), b.preventDefault()
			})
		},
		toggleOverlay: function() {
			var b = a("[data-sidenav-overlay]");
			b[0] || (b = a('<div data-sidenav-overlay class="sidenav-overlay"/>'), a("body").append(b)), b.fadeToggle("fast")
		},
		hideOverlay: function() {
			a("[data-sidenav-overlay]").fadeOut("fast")
		}
	}, a.fn.sidenav = function(c) {
		return this.each(function() {
			a.data(this, "sidenav") || a.data(this, "sidenav", new b(this, c))
		})
	}
}(window.jQuery);



//点击弹出层

$(".big-link").on("click",function(){
	
	
		$("#myModal").fadeIn("slow")
		$(".reveal-modal-bg").fadeIn("slow")
	$('.reveal-modal-bg').bind("touchmove",function(e){
                e.preventDefault();
     });	

})

$(".close-reveal-modal").on("click",function(){
	
		$("#myModal").fadeOut("slow")
		$(".reveal-modal-bg").fadeOut("slow")
	
	
})

