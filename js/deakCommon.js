$(function() {

    if(Modernizr.history){

        var newHash      = "",
            $mainContent = $("#maincontent"),
            $pageWrap    = $("#page-wrap"),
            baseHeight   = 0,
            $el;

        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $mainContent.height();

        $("nav").delegate("a", "click", function() {
            _link = $(this).attr("href");
            history.pushState(null, null, _link);
            loadContent(_link);
            return false;
        });

        function loadContent(href){
            $mainContent
                .find("#guts")
                .fadeOut(200, function() {
                    $mainContent.hide().load(href + " #guts", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        console.log(href);
                        $("nav a[href$="+href+"]").addClass("current");
                    });
                });
        }

        $(window).bind('popstate', function(){
            _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
            loadContent(_link);
        });

    } // otherwise, history is not supported, so nothing fancy here.


});
//importat din pagini
var content;
function getPage () {
    $.getJSON("js/test_deak.json", function (json) {
        content = json;
        initContent();
    });
}
function renderDespre () {
    //$( "#content" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
    $('#content').html('<div class="sidebar"></div><div class="col-pr"><div class="innerCol"><div id="despre_img"></div><p id="despre_noi_text"></p></div></div>');
    //  get image
    var pageDespreimg= "";
    pageDespreimg = '<img src= "' + content.pages.despre_page.despre_content_img + '"alt="DEAK" style="float: left;padding-right: 10px;"/>';
    $('#despre_img').html(pageDespreimg);
    //  get text
    $("#despre_noi_text").append(content.pages.despre_page.despre_content_main_txt);
    $('body').css("background-image", "none");
    $('.col-pr').enscroll();
    resizeAll();
    console.log("despre");
}
function renderPortofoliu () {
    //$( "#content" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
    $('#content').html('<div id="sidebar" class="sidebar"></div><div class="col-pr"><div id="proiecte_ans"></div><div id="proiecte_rez"></div></div>');
    $( "#sidebar" ).load( "ksidebar.html");
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
    $('.col-pr').enscroll();
    resizeAll();
    console.log("portofoliu");
}
function renderConstructii () {
    //$( "#content" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
    $('#content').html('<div id="sidebar" class="sidebar"></div><div class="col-pr"><div id="constructii-nerezidentiale"></div><div id="constructii-rezidentiale"></div></div>');
    $( "#sidebar" ).load( "ksidebar.html");
    // constructii nerezidentiale
    var pageConstructii_nerez= "";
    $.each(content.pages.constructii_page.constructii.nerezidentiale, function () {
        pageConstructii_nerez += '<div class="project" >';
        pageConstructii_nerez += '<a href = "' + this.construction_link + '">';
        pageConstructii_nerez += '<img class="lazy" src="' + this.main_image + '"/>';
        pageConstructii_nerez += '<div class="project_name">' + this.construction_name + '</div>';
        pageConstructii_nerez += '</a>';
        pageConstructii_nerez += '</div>';
    });

    $('#constructii-nerezidentiale').append(pageConstructii_nerez).before( '<div id="pag-constructii-nerezidentiale"></div>' );

    //  constructii rezidentiale
    var pageConstructii_rez= "";
    $.each(content.pages.constructii_page.constructii.rezidentiale, function () {
        pageConstructii_rez += '<div class="project" >';
        pageConstructii_rez += '<a href = "' + this.construction_link + '">';
        pageConstructii_rez += '<img class="lazy" src="' + this.main_image + '"/>';
        pageConstructii_rez += '<div class="project_name">' + this.construction_name + '</div>';
        pageConstructii_rez += '</a>';
        pageConstructii_rez += '</div>';
    });
    $('#constructii-rezidentiale').append(pageConstructii_rez).before( '<div id="pag-constructii-rezidentiale"></div>' );
    $('body') .css("background-image", "url(/images/about.jpg)");
    $('.col-pr').enscroll();
    resizeAll();
    console.log("constructii");
}
function renderInfoProiecte () {
    //$( "#content" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
    $('#content').html('<div id="sidebar" class="sidebar"></div><div class="col-pr"><div id="autorizatie-constructie"></div><div id="studiul-temale"></div></div>');
    $( "#sidebar" ).load( "ksidebar.html");
    // autorizatie
    var pageInfoProiecte_autorizatie= "";
        pageInfoProiecte_autorizatie += '<div class="innerCol autorizatie-constructie" >';
        pageInfoProiecte_autorizatie +=  content.pages.info_proiectare_page.autorizatie_constructie ;
        pageInfoProiecte_autorizatie += '</div>';

    $('#autorizatie-constructie').append(pageInfoProiecte_autorizatie).before( '<div id="pag-info-proiecte-autorizatie"></div>' );

    // temale
    var pageInfoProiecte_temale= "";
        pageInfoProiecte_temale += '<div class="innerCol studiul-temale" >';
        pageInfoProiecte_temale +=  content.pages.info_proiectare_page.studiu_temale ;
        pageInfoProiecte_temale += '</div>';
    $('#studiul-temale').append(pageInfoProiecte_temale).before( '<div id="pag-info-proiecte-temale"></div>' );
    $('body') .css("background-image", "url(/images/info.jpg)");
    $('.col-pr').enscroll();
    resizeAll();
    console.log("info proiecte");
}
var hashTag = location.hash;
function initContent () {
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
        $(":backstretch").each(function() {
            $(this).data("backstretch").destroy();
        });
    }
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