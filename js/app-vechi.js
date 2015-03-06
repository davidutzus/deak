
$(document).ready(function() {
$('.col-pr').enscroll({
    showOnHover: true,
    verticalTrackClass: 'track3',
    verticalHandleClass: 'handle3'
});
$('.portofoliu').enscroll({
    showOnHover: true,
    verticalTrackClass: 'track3',
    verticalHandleClass: 'handle3'
});

function resizeAll() {
	var width = $(window).width() - 342;
	$(".col-pr").width(width);

	var height = $(window).height() -180;
	$("#content").height(height);
	$(".col-pr").height(height);

	var winWidth = $(window).width()/2-5;
	$(".portofoliuLeft").width(winWidth);
	$(".portofoliuRight").width(winWidth);


	var origWidth  = $(window).width();
	$(".portofoliu").width(origWidth);
    $(".portofoliuTop").width(origWidth);
   $("#portofoliuFullScreen").width(origWidth);
    $("#col-fullscreen").width(origWidth);


    var slickWidth = $(window).width()-70;
    $("#test").width(slickWidth);

    var slickArrowLeftWidth = $(window).width()/2 - 35;
    $('#portofoliuFullScreen').find('.slick-prev').css('left', slickArrowLeftWidth + 'px');
    $('#slickFullscreenLeft').find('.slick-prev').css('left', slickArrowLeftWidth + 'px');

    var slickArrowRightWidth = $(window).width()/2 - 63;
    $('#portofoliuFullScreen').find('.slick-next').css('right', slickArrowRightWidth + 'px');
    $('#slickFullscreenLeft').find('.slick-next').css('right', slickArrowRightWidth + 'px');

    var slickImgHeight = $(window).height () - 45;
    $('#portofoliuFullScreen').find('img').css('height', slickImgHeight + 'px');
    $('#slickFullscreenLeft').find('img').css('height', slickImgHeight + 'px');
   // $('#portofoliuFullScreen').find('img').css('margin-left','50%' );

}
window.onload = resizeAll;
window.onresize = resizeAll;

    $('.portofoliu-top-image').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	arrows: true,
	autoplay : false,
	speed: 300
});

$('#portofoliu-slider-interior').slick({
	dots: true,
	infinite: true,
	autoplay : false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1
});

$('#portofoliu-slider-interior ul li').each(function (index) {
            $(this).html('<div style="float: left; margin-left: -10px; width: 25px; height: 15px; border: 1px solid #4DC7E9; -webkit-border-radius: 0 0 10px 0; -moz-border-radius: 0 0 10px 0; -khtml-border-radius: 0 0 10px 0; border-radius: 0 0 10px 0;"></div>');
        });
        
$('#portofoliu-slider-exterior').slick({
	dots: true,
	infinite: true,
	autoplay : false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1
});

$('#portofoliu-slider-exterior ul li').each(function (index) {
            $(this).html('<div style="width: 25px; height: 15px; border: 1px solid #4DC7E9; -webkit-border-radius: 0 0 10px 0; -moz-border-radius: 0 0 10px 0; -khtml-border-radius: 0 0 10px 0; border-radius: 0 0 10px 0;"></div>');
        });

    $('#slickFullscreenLeft').slick({
        dots: true,
        infinite: true,
        autoplay : false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        /* centerMode: true,*/
        centerPadding: '130px',
        slidesToScroll: 1
    });

    $('#slickFullscreenLeft ul li').each(function (index) {
        $(this).html('<div style="float: left; margin-left: -10px; width: 25px; height: 15px; border: 1px solid #4DC7E9; -webkit-border-radius: 0 0 10px 0; -moz-border-radius: 0 0 10px 0; -khtml-border-radius: 0 0 10px 0; border-radius: 0 0 10px 0;"></div>');
    });

$('#portofoliuFullScreen').slick({
        dots: true,
        infinite: true,
        autoplay : false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    centerPadding: '130px'
    /*centerMode: true,
     centerPadding: '0px'
     variableWidth: true,
        adaptiveHeight: true*/
});
$('#portofoliuFullScreen ul li').each(function (index) {
            $(this).html('<div style="position: relative; bottom: 10px; left: 10px; width: 25px; height: 15px; border: 1px solid #4DC7E9; -webkit-border-radius: 0 0 10px 0; -moz-border-radius: 0 0 10px 0; -khtml-border-radius: 0 0 10px 0; border-radius: 0 0 10px 0;"></div>');
        });

    $('#portofoliuFullScreen1').slick({
        dots: true,
        infinite: true,
        autoplay : true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: '130px'
        /*centerMode: true,
         centerPadding: '0px'
         variableWidth: true,
         adaptiveHeight: true*/
    });
    $('#portofoliuFullScreen1 ul li').each(function (index) {
        $(this).html('<div style="position: relative; bottom: 10px; left: 10px; width: 25px; height: 15px; border: 1px solid #4DC7E9; -webkit-border-radius: 0 0 10px 0; -moz-border-radius: 0 0 10px 0; -khtml-border-radius: 0 0 10px 0; border-radius: 0 0 10px 0;"></div>');
    });



    /*$(".gotoAnsambluri").click(function() {
        $(".col-pr").animate({
                scrollTop: $("#ansambluri").offset().top-165+'px'},
            'slow');
        return false;
    });

    $(".gotoRezidentiale").click(function() {
        console.log("rezidentiale");
        $(".col-pr").animate({
                scrollTop: $("#rezidentiale").offset().top-165+'px'},
            'slow');
        return false;
    });*/


    /*$(".gotoRezidentiale").on ('click', function(e) {


        $(".col-pr").animate({
                scrollTop: $("#rezidentiale").position().top-165+'px'},
            'slow');
        console.log("rezidentiale");

    });*/


    /*$('form[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('.col-pr').animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });*/



});
