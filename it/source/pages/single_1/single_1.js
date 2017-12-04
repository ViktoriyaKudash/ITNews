import './single_1.sass';

$(function () {

    let $window = $(window);


    //---------------- Methods -----------------
    //------------------------------------------

    function onResize() {
        $('.main-container').find('.main-container__item').css('height', 'auto').equivalent();
    }onResize();

    //------------------------------------------
    //------------------------------------------

    //---------------- Events ------------------
    //------------------------------------------

    $window.on('resize', function () {
        onResize();
    });

    //------------------------------------------
    //------------------------------------------


});

$.fn.equivalent = function () {
    let $blocks = $(this),
        maxH    = $blocks.eq(0).outerHeight(true);

    $blocks.each(function () {
        maxH = ( $(this).outerHeight(true) > maxH ) ? $(this).outerHeight(true) : maxH;
    });

    $blocks.height(maxH);
};