$(function(){
	$('#navbar a')
		.css( {backgroundPosition: "0 0"} )
		.mouseover(function(){
			$(this).stop().animate({backgroundPosition:"(-150px 0)"}, {duration:500})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(-300px 0)"}, {duration:200, complete:function(){
				$(this).css({backgroundPosition: "0 0"})
			}})
		})
});
