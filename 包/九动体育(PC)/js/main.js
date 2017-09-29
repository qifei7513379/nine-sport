
//index轮播01
$(function(){
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false,
		slideshowSpeed: 1000, //展示时间间隔ms
		animationSpeed: 1000, //滚动时间ms
		touch: true, //是否支持触屏滑动
		pauseOnHover:true     //鼠标移动上面去停止
	});
});




//index 轮播02

/*********************/


/*******************************/
$(function() {
	var _visible = 4;
	var $pagers = $('#pager2 a');
	var _onBefore = function() {
		$(this).find('img').stop().fadeTo( 300, 1 );
		$pagers.removeClass( 'selected' );
	};

	$('#carousel2').carouFredSel({
		items: _visible,
		width: '100%',
		auto: true,
		scroll: {
			duration: 750
		},
		prev: {
			button: '#prev2',
			items: 4,
			onBefore: _onBefore
		},
		next: {
			button: '#next2',
			items: 4,
			onBefore: _onBefore
		},
	});

	$pagers.click(function( e ) {
		e.preventDefault();
		
		var group = $(this).attr( 'href' ).slice( 1 );
		var slides = $('#carousel2 div.' + group);
		var deviation = Math.floor( ( _visible - slides.length ) / 2 );
		if ( deviation < 0 ) {
			deviation = 0;
		}

		$('#carousel2').trigger( 'slideTo', [ $('#' + group), -deviation ] );
		$('#carousel2 div img').stop().fadeTo( 300, 0.3 );
		slides.find('img').stop().fadeTo( 300, 1 );

		$(this).addClass( 'selected' );
	});
});
/*********************************/



//点击到顶部


/**超出多少显示**/
 $(window).scroll(function(){
     var sc=$(window).scrollTop();
     var rwidth=$(window).width()
         if(sc>0){
    $("#goTopBtn").css("display","block");
    $("#goTopBtn").css("right",0+"px")
    }else{
   $("#goTopBtn").css("display","none");
    }
    })
/****/
   $("#goTopBtn").click(function(){
    var sc=$(window).scrollTop();
   $('body,html').animate({scrollTop:0},500);
    })  
    


/*
*placeholder兼容ie9以下 author： add 2017-9-13
*/
$(function(){  
 
  //判断浏览器是否支持placeholder属性
  supportPlaceholder='placeholder'in document.createElement('input'),
 
  placeholder=function(input){
 
    var text = input.attr('placeholder'),
    defaultValue = input.defaultValue;
 
    if(!defaultValue){
 
      input.val(text).addClass("phcolor");
    }
 
    input.focus(function(){
 
      if(input.val() == text){
   
        $(this).val("");
      }
    });
 
  
    input.blur(function(){
 
      if(input.val() == ""){
       
        $(this).val(text).addClass("phcolor");
      }
    });
 
    //输入的字符不为灰色
    input.keydown(function(){
  
      $(this).removeClass("phcolor");
    });
  };
 
  //当浏览器不支持placeholder属性时，调用placeholder函数
  if(!supportPlaceholder){
 
    $('input').each(function(){
 
      text = $(this).attr("placeholder");
 
      if($(this).attr("type") == "text"){
 
        placeholder($(this));
      }
    });
  }
 
});