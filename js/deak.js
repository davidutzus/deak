/**
 * @fileOverview Men In Black Global Functions
 * @author Eduard Emandi
 */

/**
 * @name Men In Black Global Functions
*
* @class mib
*/

var mib = (function () {
    
    var animationTimeout1, resizeTimeout;
    var timeout1 = 100;
    var rightZoneIsHidden = false;
    var onTheFirstPage = true;
    var rightZoneOffset = 270;
    var contentScrollBarIsSet = false;
    var currentPage = 'home';
    var smMapping = {
        'request-presentation': 'image0',
        'clients': 'image1',
        'contact': 'image2'
    };
    var content = {};
    var sm = {};
    
    /**
     ** Resize the content zone
     **
     ** @returns {Boolean}
     **/
    function buildContentZone(boxID) {
        $('#mainPageContent').hide();
        $('#innerPageContent').show();
        $('#pageTitle').html(mib.content.pages[boxID]['title']);
        $('#pageDescription').html(mib.content.pages[boxID]['description']);
        if (!mib.contentScrollBarIsSet) {
            mib.verticalScrollInit();
        }
        mib.content.render(boxID);
        return true;
    }

    /**
     * Initialize the vertical scroll
     *
     * @param {function} callback after the vertical scroll is initialized
     * @returns {Boolean}
     */
    /*function verticalScrollInit(callback) {
        $('#pageContent').enscroll({
            showOnHover: true,

            verticalTrackClass: 'track3',
            verticalHandleClass: 'handle3'
        });
        mib.contentScrollBarIsSet = true;

        $('#pageContent').css('width', '70%');

        if (typeof callback === 'function') {
            return callback();
        }

        return true;
    }*/

    function resizeContent(withOffset) {
        var winHeight = $(window).height();
        console.log(winHeight);
        return;
        console.log('Resizing content...');

        var winWidth = $(window).width();
        console.log(winWidth);
        if (winWidth <= 1366) {
            $('html').css('overflow', 'auto');
            $('body').css('overflow', 'auto');
        } else {
            $('html').css('overflow', 'hidden');
            $('body').css('overflow', 'hidden');
        }
        //return;
        console.log('Resizing content...');
        console.log($(window).height());
        console.log($(document).height());
        console.log($(document).scrollTop());

        var resizeTo = $(document).height();
        if (resizeTo < 700) {
            resizeTo = 700;
        }
        //$('#rightMenu').height(resizeTo);
        //console.log($('#rightMenu').height());
        //$('#wrapper').height($('#rightMenu').height());
        return;
        var browserWidth = $(window).width() + 145;
        if (browserWidth < mib.generalMinWidth) {
            browserWidth = mib.generalMinWidth;
        } else {
            browserWidth -= 145;
        }
        var contentWidth = browserWidth - 300;
        if (withOffset === true) {
            contentWidth += mib.rightZoneOffset;
        }
        var contentHeight = (9 / 16) * contentWidth;


        $('#content').css('width', contentWidth).css('height', contentHeight);
        $('.col-pr').css('width', contentWidth);
        $('#pageContent').css('height', contentHeight + 100);
    }

    function clickOnMainMenu(boxID) {
        //$('#mibVideo').get(0).pause();

        if (typeof(mib.content.pages[boxID]) === 'undefined') {
            console.log('Undefined page: ' + boxID);
            return false;
        }
        mib.hideRightZone();
        mib.buildContentZone(boxID);

        mib.onTheFirstPage = false;

        return true;
    }

    function displayRequestPresentationSendMessage(msg) {
        $('#loading').css('display', 'none');
        $('#feedbackForm').html(msg);
        $('#feedbackForm').show();
    }

    function resetRequestPresentationForm() {
        $('#Request_client_name').val('');
        $('#Request_client_phone').val('');
        $('#Request_client_email').val('');
        $('#Request_client_request').val('');
    }

    function activateMenu() {
        deactivateAllMenus();

        if (typeof(mib.smMapping[mib.currentPage]) !== 'undefined' && mib.smMapping[mib.currentPage].indexOf('image') > -1) {
            $('#' + mib.smMapping[mib.currentPage]).prop('href', 'images/secondary-menus/ms-' + mib.currentPage + '-hover.png');
        } else {
            $('#' + mib.currentPage).find('a').css('background', 'url("images/menu-' + mib.currentPage + '-hover.png") no-repeat');
        }
    }

    function deactivateAllMenus() {
        for (var x in mib.content.pages) {
            if (x === mib.currentPage) {
                continue;
            }

            $('#' + x).find('a').css('background', 'url("images/menu-' + x + '.png") no-repeat');
        }

        mib.sm.hideElements(0);
        mib.sm.hideElements(1);
    }

    // expose public methods and properties
    return {
        /* Attributes */
       
       /* animationTimeout1: animationTimeout1,
        resizeTimeout: resizeTimeout,
        timeout1: timeout1,
        rightZoneIsHidden: rightZoneIsHidden,
        onTheFirstPage: onTheFirstPage,
        rightZoneOffset: rightZoneOffset,
        contentScrollBarIsSet: contentScrollBarIsSet,
        currentPage: currentPage,
        smMapping: smMapping,
        content: content,*/
        
        /* Methods */
        /*animateLogo: animateLogo,
        hideRightZone: hideRightZone,
        showRightZone: showRightZone,
        goBackHome: goBackHome,
        buildContentZone: buildContentZone,
        verticalScrollInit: verticalScrollInit,
        resizeContent: resizeContent,
        clickOnMainMenu: clickOnMainMenu,
        displayRequestPresentationSendMessage: displayRequestPresentationSendMessage,
        resetRequestPresentationForm: resetRequestPresentationForm,
        activateMenu: activateMenu,
        deactivateAllMenus: deactivateAllMenus*/
    //};
})();
