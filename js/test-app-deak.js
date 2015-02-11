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
                        $mainContent.fadeIn(33200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        console.log(href);
                        $("nav a[href$='"+href+"']").addClass("current");
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
    $( "#content" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
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
    $( "#content" ).wrap( '<div id="page-wrap"><div id="maincontent"><div id="guts"></div></div></div>' );
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
var hashTag = location.hash;
function initContent () {
    if (hashTag === "#despre") {
        renderDespre();
    } else if (hashTag === "#portofoliu"){
        renderPortofoliu();
    }
    if (hashTag !== '') {
        // Destroy the old Backstretches
        $(":backstretch").each(function() {
            $(this).data("backstretch").destroy();
        });
        console.log("test");
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