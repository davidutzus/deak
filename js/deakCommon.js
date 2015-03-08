$(function () {

    if (Modernizr.history) {

        var newHash = "",
            $mainContent = $("#maincontent"),
            $pageWrap = $("#page-wrap"),
            baseHeight = 0,
            $el;

        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $mainContent.height();

        $("nav").delegate("a", "click", function () {
            _link = $(this).attr("href");
            history.pushState(null, null, _link);
            loadContent(_link);
            return false;
        });

        function loadContent(href) {
            $mainContent
                .find("#guts")
                .fadeOut(200, function () {
                    $mainContent.hide().load(href + " #guts", function () {
                        $mainContent.fadeIn(200, function () {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        console.log(href);
                        $("nav a[href$=" + href + "]").addClass("current");
                    });
                });
        }

        $(window).bind('popstate', function () {
            _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
            loadContent(_link);
        });

    } // otherwise, history is not supported, so nothing fancy here.


});
//importat din pagini
var content;
function getPage() {
    $.getJSON("js/test_deak.json", function (json) {
        content = json;
        //ordineProiecte = content['results_ordered'];
        initContent();
    });
}
function renderDespre() {
    //$( "#content" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
    $('.col-pr').html('<div class="innerCol"><div id="despre_img"></div><p id="despre_noi_text"></p></div>');
    //  get image
    var pageDespreimg = "";
    pageDespreimg = '<img src= "' + content.pages.despre_page.despre_content_img + '"alt="DEAK" style="float: left;padding-right: 10px;"/>';
    $('#despre_img').html(pageDespreimg);
    //  get text
    $("#despre_noi_text").append(content.pages.despre_page.despre_content_main_txt);
    $('body').css("background-image", "none");
    $('.col-pr').enscroll();
    resizeAll();
    console.log("despre");
    $('#sidebar .list-group').addClass('hidden');
}
function renderPortofoliu () {
    //$( "#content" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
    $('.col-pr').html('<div id="proiecte_ans"></div><div id="proiecte_rez"></div>');
    //$( "#sidebar" ).load( "ksidebar.html");
    //ansambluri
    var pagePortofoliu_ans= "";

    $.each(content.pages.portofoliu_page.proiecte.ansambluri, function () {
        pagePortofoliu_ans += '<div class="project" >';
        pagePortofoliu_ans += '<a href = "' + this.prj_link + '">';
        pagePortofoliu_ans += '<img class="lazy" src="' + this.main_image + '"/>';
        pagePortofoliu_ans += '<div class="project_name">' + this.prj_name + '</div>';
        pagePortofoliu_ans += '</a>';
        pagePortofoliu_ans += '</div>';
    });

    $('#proiecte_ans').append(pagePortofoliu_ans).before( '<div id="ansambluri"></div>' );

    // rezidentiale
    var pagePortofoliu_rez= "";
    $.each(content.pages.portofoliu_page.proiecte.rezidentiale, function () {
        pagePortofoliu_rez += '<div class="project" >';
        pagePortofoliu_rez += '<a href = "' + this.prj_link + '">';
        pagePortofoliu_rez += '<img class="lazy" src="' + this.main_image + '"/>';
        pagePortofoliu_rez += '<div class="project_name">' + this.prj_name + '</div>';
        pagePortofoliu_rez += '</a>';
        pagePortofoliu_rez += '</div>';
    });
    $('#proiecte_rez').append(pagePortofoliu_rez).before( '<div id="rezidentiale"></div>' );
    $('body') .css("background-image", "url(/images/about.jpg)");
    //$('.col-pr').enscroll();
    resizeAll();
    $('#portofoliu-ans').removeClass('hidden');
    $('#portofoliu-rez').removeClass('hidden');
    $('#constructii-nerez').addClass('hidden');
    $('#constructii-rez').addClass('hidden');
    $('#sidebar-autorizatie-constructie').addClass('hidden');
    $('#sidebar-studiul-temale').addClass('hidden');


    console.log("portofoliu");
}
function renderConstructii() {
    //$( ".col-pr" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
    $('.col-pr').html('<div id="constructii-nerezidentiale"></div><div id="constructii-rezidentiale"></div>');
    //$("#sidebar").load("ksidebar.html");
    // constructii nerezidentiale
    var pageConstructii_nerez = "";
    $.each(content.pages.constructii_page.constructii.nerezidentiale, function () {
        pageConstructii_nerez += '<div class="project" >';
        pageConstructii_nerez += '<a href = "' + this.construction_link + '">';
        pageConstructii_nerez += '<img class="lazy" src="' + this.main_image + '"/>';
        pageConstructii_nerez += '<div class="project_name">' + this.project_id + ' - ' + this.construction_name + '</div>';
        pageConstructii_nerez += '</a>';
        pageConstructii_nerez += '</div>';
    });

    $('#constructii-nerezidentiale').append(pageConstructii_nerez).before('<div id="pag-constructii-nerezidentiale"></div>');

    //  constructii rezidentiale
    var pageConstructii_rez = "";
    $.each(content.pages.constructii_page.constructii.rezidentiale, function () {
        pageConstructii_rez += '<div class="project" >';
        pageConstructii_rez += '<a href = "' + this.construction_link + '">';
        pageConstructii_rez += '<img class="lazy" src="' + this.main_image + '"/>';
        pageConstructii_rez += '<div class="project_name">' + this.project_id + ' - ' + this.construction_name + '</div>';
        pageConstructii_rez += '</a>';
        pageConstructii_rez += '</div>';
    });
    $('#constructii-rezidentiale').append(pageConstructii_rez).before('<div id="pag-constructii-rezidentiale"></div>');
    $('body').css("background-image", "url(/images/about.jpg)");
    //$('.col-pr').enscroll();
    resizeAll();
    $('#constructii-nerez').removeClass('hidden');
    $('#constructii-rez').removeClass('hidden');
    $('#portofoliu-ans').addClass('hidden');
    $('#portofoliu-rez').addClass('hidden');
    $('#sidebar-autorizatie-constructie').addClass('hidden');
    $('#sidebar-studiul-temale').addClass('hidden');
    console.log("constructii");
}

function renderInfoProiecte() {
    //$( ".col-pr" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
    $('.col-pr').html('<div id="autorizatie-constructie"></div><div id="studiul-temale"></div>');
    //$("#sidebar").load("ksidebar.html");
    // autorizatie
    var pageInfoProiecte_autorizatie = "";
    pageInfoProiecte_autorizatie += '<div class="innerCol autorizatie-constructie" >';
    pageInfoProiecte_autorizatie += content.pages.info_proiectare_page.autorizatie_constructie;
    pageInfoProiecte_autorizatie += '</div>';

    $('#autorizatie-constructie').append(pageInfoProiecte_autorizatie).before('<div id="pag-info-proiecte-autorizatie"><h2>AUTORIZATIA DE CONSTRUCTIE</h2></div>');

    // temale
    var pageInfoProiecte_temale = "";
    pageInfoProiecte_temale += '<div class="innerCol studiul-temale" >';
    pageInfoProiecte_temale += content.pages.info_proiectare_page.studiu_temale;
    pageInfoProiecte_temale += '</div>';
    $('#studiul-temale').append(pageInfoProiecte_temale).before('<div id="pag-info-proiecte-temale"><h2>STUDIUL DE TEMALE</h2></div>');
    $('body').css("background-image", "url(/images/info.jpg)");
    //$('.col-pr').enscroll();
    resizeAll();
    $('#prj-all').addClass('hidden');
    $('#sidebar-autorizatie-constructie').removeClass('hidden');
    $('#sidebar-studiu-temale').removeClass('hidden');
    $('#portofoliu-ans').addClass('hidden');
    $('#portofoliu-rez').addClass('hidden');
    $('#constructii-nerez').addClass('hidden');
    $('#constructii-rez').addClass('hidden');
    $('#client_project').addClass('hidden');
    $('#log_in').addClass('hidden');
    $('#log_out').addClass('hidden');
    //console.log("info proiecte");
}
/*--------------------------Slick galleries script-------------------------------------------------*/
function initializareSlider() {
    $('.slideshow-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        autoplaySpeed: 2000,
        arrows: false,
        autoplay: true,
        speed: 300
    });


    $('.portofoliu-top-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        autoplay: true,
        speed: 300
    });

    $('#portofoliu-slider-interior').slick({
        dots: true,
        infinite: true,
        autoplay: false,
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
        autoplay: false,
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
        autoplay: false,
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
        autoplay: false,
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
        autoplay: true,
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
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('#slider-client ul li').each(function (index) {
        $(this).html('<div style="float: left; margin-left: -10px; width: 25px; height: 15px; border: 1px solid #4DC7E9; -webkit-border-radius: 0 0 10px 0; -moz-border-radius: 0 0 10px 0; -khtml-border-radius: 0 0 10px 0; border-radius: 0 0 10px 0; z-index: 15;"></div>');
    });

    $('form[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('.col-pr').animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });
}
function showclientproject() {

    $('.col-pr').html('<div id="informatii-proiect" class="tab-info-proiect"></div>');
    //$("#sidebar").load("ksidebar.html");
    var proiectINFO = '';
    //if ($.cookie('isLoggedIn') == 'true') {
    proiectINFO += '<div role="tabpanel">';
    proiectINFO += '<ul class="nav nav-tabs" role="tablist">';
    proiectINFO += '<li role="presentation" class="active"><a href="#randari-imagini" aria-controls="randari-imagini" role="tab" data-toggle="tab">RANDARI 3D</a></li>';
    proiectINFO += '<li role="presentation"><a href="#piese-desenate" aria-controls="piese-desenate" role="tab" data-toggle="tab">PIESE DESENATE</a></li>';
    proiectINFO += '<li role="presentation"><a href="#piese-scrise" aria-controls="piese-scrise" role="tab" data-toggle="tab">PIESE SCRISE</a></li>';
    proiectINFO += '<li role="presentation"><a href="#simulare-3d" aria-controls="simulare-3d" role="tab" data-toggle="tab">SIMULARE 3D</a></li>';
    proiectINFO += '</ul>';
    proiectINFO += '<div class="tab-content">';
    proiectINFO += '<div role="tabpanel" class="tab-pane active" id="randari-imagini">' + tabSliderProiect() + '</div>';
    proiectINFO += '<div role="tabpanel" class="tab-pane" id="piese-desenate">';
    proiectINFO += '</div>';
    proiectINFO += '<div role="tabpanel" class="tab-pane" id="piese-scrise">';
    proiectINFO += '<div class="documents">';
    proiectINFO += '<div class="pdf-title">DOCUMENTE PDF</div>';
    proiectINFO += '<div style="position: relative; float: left;">';
    proiectINFO += '<div style="float: left; padding-bottom: 50px; padding-right: 120px;"> <a class="pdf_documents" href="document.pdf" target="_blank"><p>1</p>piese scrise</a></div>';
    proiectINFO += '<div style="float: left; padding-bottom: 50px; padding-right: 120px;"> <a class="pdf_documents" href="document.pdf" target="_blank"><p>2</p>piese scrise</a></div>';
    proiectINFO += '<div style="float: left; padding-bottom: 50px; "> <a class="pdf_documents" href="document.pdf" target="_blank"><p>3</p>piese scrise</a></div>';
    proiectINFO += '</div>';
    proiectINFO += '</div>';
    proiectINFO += '</div>';
    proiectINFO += '<div role="tabpanel" class="tab-pane" id="simulare-3d">...</div>';
    proiectINFO += '</div>';
    //}
    return $('#informatii-proiect').append(proiectINFO);

}
function tabSliderProiect () {
    var sliderProiect = '';

    sliderProiect += '<div class="documents">';
    //sliderProiect += '<span>RANDARI 3D</span>';
    sliderProiect += '<div id="slider-client" style="width: 770px;">';
    sliderProiect += '<div index="0" ><a id="fullscreen" href="javascript:toggle();" style="cursor: url(\'images/zoom.ico\'), auto; z-index: 10;"><img src="images/clients/2014.48/small/1.jpg" /></a></div>';
    sliderProiect += '<div index="1" ><a id="fullscreen" href="javascript:toggle();" style="cursor: url(\'images/zoom.ico\'), auto; z-index: 10;"><img src="images/clients/2014.48/small/2.jpg" /></a></div>';
    sliderProiect += '<div index="2" ><a id="fullscreen" href="javascript:toggle();" style="cursor: url(\'images/zoom.ico\'), auto; z-index: 10;"><img src="images/clients/2014.48/small/3.jpg" /></a></div>';
    sliderProiect += '<div index="3" ><a id="fullscreen" href="javascript:toggle();" style="cursor: url(\'images/zoom.ico\'), auto; z-index: 10;"><img src="images/clients/2014.48/small/4.jpg" /></a></div>';
    sliderProiect += '</div>';
    sliderProiect += '</div>';
    sliderProiect += '<div id="col-fullscreen" style="visibility: hidden; position: fixed; z-index: 999;  top: 0; right: 0; bottom: 0; left: 0; background: #333333;">';
    sliderProiect += '<div id="slickFullscreenLeft1">';
    sliderProiect += '<div id="slickFullscreenLeft"  >';
    sliderProiect += '<div index="0" ><img src="images/clients/2014.48/large/1.jpg"  /></div>';
    sliderProiect += '<div index="1" ><img src="images/clients/2014.48/large/2.jpg" /></div>';
    sliderProiect += '<div index="2" ><img src="images/clients/2014.48/large/3.jpg" /></div>';
    sliderProiect += '<div index="3" ><img src="images/clients/2014.48/large/4.jpg"  /></div>';
    sliderProiect += '</div>';
    sliderProiect += '<div style="position: absolute; left:50%; margin-left: -29px; bottom: 70px; z-index: 20000; width: 40px; height: 40px; "><a id="closeFullscreen" href="javascript:toggle();"  ><img src="images/slick-close.png" /></a></div>';
    sliderProiect += '</div>';
    sliderProiect += '</div>';

    return sliderProiect;
}
function toggle() {
    var ele = document.getElementById("col-fullscreen");
    var showfs = document.getElementById("fullscreen");
    var closefs = document.getElementById("closeFullscreen");
    if(ele.style.visibility == "visible") {
        ele.style.visibility = "hidden";
        //showfs.innerHTML = "show";
    }
    else {
        ele.style.visibility = "visible";
        closefs.innerHTML;
    }
}
function hidePortofoliuRezidentiale() {
    //renderPortofoliu();
    //$('#proiecte_ans').addClass('show').removeClass('hidden');
    //$('#proiecte_rez').addClass('hidden').removeClass('show');
}
function hidePortofoliuNerezidentiale() {
    //renderPortofoliu();
    //$('#proiecte_rez').addClass('show').removeClass('hidden');
    //$('#proiecte_ans').addClass('hidden').removeClass('show');
}
function hideConstructiiRezidentiale() {
}
function hideConstructiiNerezidentiale() {
}
var hashTag = location.hash;
function displayAllProject() {
    if (hashTag === '#portofoliu') {
        renderPortofoliu();
        $('#portofoliu-rez a').removeClass('currentLink');
        $('#portofoliu-ans a').removeClass('currentLink');
        $('#prj-all a').addClass('currentLink');
    } else if (hashTag === '#constructii') {
        renderConstructii;
    }
}
function initContent() {
    if (hashTag === '#despre') {
        renderDespre();
    } else if (hashTag === '#portofoliu') {
        renderPortofoliu();
    } else if (hashTag === '#constructii') {
        renderConstructii();
    } else if (hashTag === '#info-proiectare') {
        renderInfoProiecte();
    }
    if (hashTag !== '') {
        // Destroy the old Backstretches
        $(":backstretch").each(function () {
            $(this).data("backstretch").destroy();
        });
    }
    $('.nav-section').on('click',function(){
        $('.nav-section').removeClass('currentLink');
        $(this).addClass('currentLink');
    });
}

//end cod importat din pagini
//
//function pageContent (){
//    $.getJSON("js/test_deak.json", function (json) {
//            //-------Despre page
//        $( "#content" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
//        $('#content').html('<div class="sidebar"></div><div class="col-pr"><div class="innerCol"><div id="despre_img"></div><p id="despre_noi_text"></p></div></div>');
//            //  get image
//        var pageDespreimg= "";
//        pageDespreimg = '<img src= "' + json.pages.despre_page.despre_content_img + '"alt="DEAK" style="float: left;padding-right: 10px;"/>';
//        $('#despre_img').html(pageDespreimg);
//            //  get text
//        $("#despre_noi_text").append(json.pages.despre_page.despre_content_main_txt);
//        $('body').css("background-image", "none");
//
//                //Portofoliu page
//        $('#page-portofoliu').on( "click", (function () {
//            $('#content').html('<div id="sidebar" class="sidebar"></div><div class="col-pr"><div id="proiecte_ans"></div><div id="proiecte_rez"></div></div>');
//            $( "#sidebar" ).load( "ksidebar.html");
//               //ansambluri
//            var pagePortofoliu_ans= "";
//            $.each(json.pages.portofoliu_page.proiecte.ansambluri, function () {
//                pagePortofoliu_ans += '<div class="project" >';
//                pagePortofoliu_ans += '<a href = "' + this.prj_link + '">';
//                pagePortofoliu_ans += '<img class="lazy" src="' + this.main_image + '"/>';
//                pagePortofoliu_ans += '<div class="project_name">' + this.prj_name + '</div>';
//                pagePortofoliu_ans += '</a>';
//                pagePortofoliu_ans += '</div>';
//            });
//
//            $('#proiecte_ans').append(pagePortofoliu_ans).before( '<div id="ansambluri"></div>' );
//
//                // rezidentiale
//            var pagePortofoliu_rez= "";
//            $.each(json.pages.portofoliu_page.proiecte.rezidentiale, function () {
//                pagePortofoliu_rez += '<div class="project" >';
//                pagePortofoliu_rez += '<a href = "' + this.prj_link + '">';
//                pagePortofoliu_rez += '<img class="lazy" src="' + this.main_image + '"/>';
//                pagePortofoliu_rez += '<div class="project_name">' + this.prj_name + '</div>';
//                pagePortofoliu_rez += '</a>';
//                pagePortofoliu_rez += '</div>';
//            });
//            $('#proiecte_rez').append(pagePortofoliu_rez).before( '<div id="rezidentiale"></div>' );
//            $('body').css("background-image", "url(/images/about.jpg)");
//            $('.col-pr').enscroll();
//            resizeAll();
//        }));
//            //used for all pages
//        $('.col-pr').enscroll();
//        resizeAll();
//        $(":backstretch").each(function() {
//            $(this).data("backstretch").destroy();
//        });
//    });
//};

//$(window).ready(function () {
//            //$("nav a").not(":last").click(function(){
//            //    // Destroy the old Backstretches
//            //    $(":backstretch").each(function() {
//            //        $(this).data("backstretch").destroy();
//            //    });
//            //});
//    $.getJSON("js/test_deak.json", function (json) {
//////            --------Portofoliu
////        $('#page-portofoliu').on( "click", (function () {
////            $('#content').html('<div id="sidebar" class="sidebar"></div><div class="col-pr"><div id="proiecte_ans"></div><div id="proiecte_rez"></div></div>');
////            $( "#sidebar" ).load( "ksidebar.html");
//////                ansambluri
////            var pagePortofoliu_ans= "";
////            $.each(json.pages.portofoliu_page.proiecte.ansambluri, function () {
////                pagePortofoliu_ans += '<div class="project" >';
////                pagePortofoliu_ans += '<a href = "' + this.prj_link + '">';
////                pagePortofoliu_ans += '<img class="lazy" src="' + this.main_image + '"/>';
////                pagePortofoliu_ans += '<div class="project_name">' + this.prj_name + '</div>';
////                pagePortofoliu_ans += '</a>';
////                pagePortofoliu_ans += '</div>';
////            });
////
////            $('#proiecte_ans').append(pagePortofoliu_ans).before( '<div id="ansambluri"></div>' );
////
//////                rezidentiale
////            var pagePortofoliu_rez= "";
////
////            $.each(json.pages.portofoliu_page.proiecte.rezidentiale, function () {
////                pagePortofoliu_rez += '<div class="project" >';
////                pagePortofoliu_rez += '<a href = "' + this.prj_link + '">';
////                pagePortofoliu_rez += '<img class="lazy" src="' + this.main_image + '"/>';
////                pagePortofoliu_rez += '<div class="project_name">' + this.prj_name + '</div>';
////                pagePortofoliu_rez += '</a>';
////                pagePortofoliu_rez += '</div>';
////            });
////
////            $('#proiecte_rez').append(pagePortofoliu_rez).before( '<div id="rezidentiale"></div>' );
////                $('body').css("background-image", "url(/images/about.jpg)");
////                $('.col-pr').enscroll();
////                resizeAll();
////        }));
//    });
//});