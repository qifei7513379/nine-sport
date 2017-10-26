


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