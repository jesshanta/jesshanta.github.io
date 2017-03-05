$(document).ready(function(){
  /* $('#homepage').on('focus mouseenter', function(){
    $(this).parent().css("background", "url(img/main.jpg) no-repeat ");
   });
   $('#homepage').css({
        'background-size': '200% 200%' 
   });*/
});

$(window).load(function(){
	console.log('text height '+ $('#atext').height());
	$('#acontainer').css("padding-top", $('#atext').height()+20);
});

$(window).resize(function(){
	console.log('text height '+ $('#atext').height());
	console.log('top padding '+ $('#atext').height()+20);
	
	$('#acontainer').css("padding-top", $('#atext').height()+20);

});