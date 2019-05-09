$(document).ready(function() {
	//img
	$("body img").not( ".not_change img, img.not_change, .menu img, .logo img, .scroll_motion img, .headline img" ).attr("src","images/assets_1.jpg");
	//$("body img").not(".not_change img, img.not_change").attr("src","images/assets_1.jpg");
	$(".assets_2 img").attr("src","images/assets_2.jpg");
	$(".headline__thumb__img img").attr("src","images/assets_2.jpg");

	//text
	$("body p, body a").css( "color", "#ddd" );
	$(".not_textblock, .not_textblock p, .not_textblock li, .not_textblock li a, .not_textblock p, .not_textblock a").css({
   'font-family' : 'Roboto, sans-serif',
   'color' : '#000',
	});

});
