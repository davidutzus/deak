/*--------------------------Resize script------------------------------------------------------*/
function resizeAll() {
    var width = $(window).width() - 342;
    $(".col-pr").width(width);
    $(".col-prs").width(width);

    var height = $(window).height() -165;
    $("#content").height(height);
    $(".col-pr").height(height);
    /*$(".col-prs").height(height);*/

    var winWidth = $(window).width()/2-10;
    $('.portofoliu-slider-interior').find('img').css('width', winWidth  + 'px');
    $('.portofoliu-slider-exterior').find('img').css('width', winWidth  + 'px');
    $(".portofoliuLeft").width(winWidth);
    $(".portofoliuRight").width(winWidth);
    $("#videoPlayer").width(winWidth);

    var winHeight = winWidth*(9/16);
    $('#portofoliu-slider-interior').find('img').height(winHeight);
    $('#portofoliu-slider-exterior').find('img').height(winHeight);
    $("#videoPlayer").height(winHeight);

    var origWidth  = $(window).width();
    $(".portofoliu").width(origWidth);
    $(".portofoliuTop").width(origWidth);
    $("#portofoliuFullScreen").width(origWidth);
    $("#col-fullscreen").width(origWidth);
    $('.slide').find('img').width(origWidth);
    $('.slide').width(origWidth);

    var slickArrowLeftWidth = $(window).width()/2 - 35;
    $('#portofoliuFullScreen').find('.slick-prev').css('left', slickArrowLeftWidth + 'px');
    $('#slickFullscreenLeft').find('.slick-prev').css('left', slickArrowLeftWidth + 'px');

    var slickArrowRightWidth = $(window).width()/2 - 63;
    $('#portofoliuFullScreen').find('.slick-next').css('right', slickArrowRightWidth + 'px');
    $('#slickFullscreenLeft').find('.slick-next').css('right', slickArrowRightWidth + 'px');

    var slickImgHeight = $(window).height () - 45;
    $('#slickFullscreenLeft').find('img').height(slickImgHeight);

    var menuWidth = $(window).height ();
    $('.slider-client').find('img').css('width', menuWidth + 'px');
}
/**
 *  active state menu
 */
$("nav li").click(function ( e ) {
    e.preventDefault();
    $("nav li a.active").removeClass("active"); //Remove any "active" class
    $("a", this).addClass("active"); //Add "active" class to selected tab
});


/*--------------------------End of Resize script---------------------------------------------------*/
$(document).ready(function() {
/*--------------------------Scroll script----------------------------------------------------------*/

//$('.col-pr').enscroll({
//    showOnHover: true,
//    verticalTrackClass: 'track3',
//    verticalHandleClass: 'handle3'
//});
//$('.portofoliu').enscroll({
//    showOnHover: true,
//    verticalTrackClass: 'track3',
//    verticalHandleClass: 'handle3'
//
//});

/*-------------------------- End of Scroll script-----------------------------------------------*/


/*--------------------------Resize script------------------------------------------------------*/

window.onload = resizeAll;
window.onresize = resizeAll;

/*--------------------------End of Resize script---------------------------------------------------*/
    $(".test").click(function(event){
        $('.portofoliu').animate({scrollTop: '+=' + $(window).height() + 'px'}, 800);
    });
/*--------------------------Slick galleries script-------------------------------------------------*/

    $('.slideshow-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        autoplaySpeed: 2000,
        arrows: false,
        autoplay : true,
        speed: 300
    });


$('.portofoliu-top-image').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	arrows: true,
	autoplay : true,
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
            $(this).html('<div style="float: left; margin-left: -10px; width: 25px; height: 15px; border: 1px solid #4DC7E9; -webkit-border-radius: 0 0 10px 0; -moz-border-radius: 0 0 10px 0; -khtml-border-radius: 0 0 10px 0; border-radius: 0 0 10px 0; z-index: 15;"></div>');
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
        centerMode: true,
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
});

    $('#portofoliuFullScreen1 ul li').each(function (index) {
        $(this).html('<div style="position: relative; bottom: 10px; left: 10px; width: 25px; height: 15px; border: 1px solid #4DC7E9; -webkit-border-radius: 0 0 10px 0; -moz-border-radius: 0 0 10px 0; -khtml-border-radius: 0 0 10px 0; border-radius: 0 0 10px 0;"></div>');
    });

    $('#slider-client').slick({
        dots: true,
        infinite: true,
        autoplay : true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('#slider-client ul li').each(function (index) {
        $(this).html('<div style="float: left; margin-left: -10px; width: 25px; height: 15px; border: 1px solid #4DC7E9; -webkit-border-radius: 0 0 10px 0; -moz-border-radius: 0 0 10px 0; -khtml-border-radius: 0 0 10px 0; border-radius: 0 0 10px 0; z-index: 15;"></div>');
    });

    $('form[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('.col-pr').animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });
/*--------------------------End of Slick galleries script----------------------------------------------------*/

/*--------------------------Lazy loading for portofoliu------------------------------------------------------*/
    $(document).ready(function() {
        $("div.col-pr img.lazy").lazy(
            {
                appendScroll: $("div.col-pr"),
                effect: "fadeIn",
                effectTime: 1500
            });
    });


/*-------------------------- End of Lazy loading for portofoliu---------------------------------------------*/
    function scrollTo(rezidentiale)
    {
        // Scroll
        $('html,body').animate({scrollTop: $("#"+rezidentiale).offset().top},'slow');
    }



});
