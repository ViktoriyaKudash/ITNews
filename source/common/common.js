//Fonts
import '../fonts/fonts.sass';

//Common plugin style
import '../libs/bootstrap/bootstrap.css';
import '../components/mmenu/dist/jquery.mmenu.custom.css';

//Common components
import '../components/mmenu/dist/jquery.mmenu.custom';


//Common style
import './common.sass';

import infoXML from '../xml/info.xml';

$(function () {

    let
        $window = $(window),
        mainFooterContainer = $('.main-footer__container');

    let mmenu = $('#mmenu').mmenu({
        extensions: {
            all: ['pagedim-black'],
            '(min-width: 1200px)': ['widescreen']
        },
        offCanvas: {
            position: 'right'
        },
        navbar: {
            title: ''
        }
    },{
        classNames: {
            fixedElements: {
                fixed: "fixed"
            }
        }
    });

    //---------------- Methods -----------------
    //------------------------------------------

    function onResize() {
        mainFooterContainer.find('.main-footer__elem').css('height', 'auto').equivalent();
    }onResize();

    let api = mmenu.data( 'mmenu' );

    api.bind( 'open:finish', function(  ) {
        setTimeout(function() {
            $('.hamburger--collapse').addClass('is-active')
        }, 100)
    });

    api.bind( 'close:finish', function(  ) {
        setTimeout(function() {
            $('.hamburger--collapse').removeClass('is-active')
        }, 100)
    });

    //------------------------------------------
    //------------------------------------------



    //---------------- Events ------------------
    //------------------------------------------

    $window.on('resize', function () {
        onResize();
    });

    //------------------------------------------
    //------------------------------------------


    let infoXMLContent = "<table class='info-table'>";

    let dataXML = infoXML.items.item[0];

    infoXMLContent += "<tr><td><span>ФИО: </span>" + dataXML['fio'] + "</td></tr>";
    infoXMLContent += "<tr><td><span>Факультет:  </span>" + dataXML['faculty'] + "</td></tr>";
    infoXMLContent += "<tr><td><span>Специальность: </span>" + dataXML['specialty'] + "</td></tr>";
    infoXMLContent += "<tr><td><span>Курс: </span>" + dataXML['class'] + "</td></tr>";
    infoXMLContent += "<tr><td><span>Группа: </span>" + dataXML['group'] + "</td></tr>";

    infoXMLContent += "</table>";

    $('.info-table-wrapper').append(infoXMLContent);


});

$.fn.equivalent = function () {
    let $blocks = $(this),
        maxH    = $blocks.eq(0).height();

    $blocks.each(function () {
        maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
    });

    $blocks.height(maxH);
};

