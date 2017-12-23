$(function() {

	// Custom JS

    //menu
    $('#block-menu').append('<div class="mob-btn"><div class="icon-bar"></div><div class="icon-bar"></div><div class="icon-bar"></div><div class="icon-bar"></div></div>');
    $('.mob-btn').click(function () {
        $(this).toggleClass('active-mob-btn');
        $('.menu').slideToggle(250);
    });

    // for placeholder
    $('input, textarea').each(function(){
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function(){ $(this).attr('placeholder', '');});
        $(this).focusout(function(){
            $(this).attr('placeholder', placeholder);
        });
    });

    // owl carousel
    if($('.js-carousel-clients').length) {
        $('.js-carousel-clients').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,

            responsive:{
                0:{
                    nav:true,
                    margin: 15,
                    items:2
                },
                480:{
                    nav:true,
                    margin: 15,
                    items:3
                },
                768:{
                    nav:true,
                    margin: 15,
                    items:4
                },
                910:{
                    items:5,
                    margin: 20,
                    nav:true
                },
                1100:{
                    items:6,
                    margin: 20,
                    nav:true
                },
                1250:{
                    items:6,
                    margin: 30,
                    nav:true
                }
            }
        });
    }

    // ui-tabs
    $( ".box-tab, .box-tab-second" ).tabs();

    // tabs
    if($('.box-tab, .box-tab-second').length) {
        $('.tab-content__list:not(.js-tab-content__list_first)').hide();
        $('.tab-content-second__list:not(.js-tab-content__list_first)').hide();

        var $tabContent = $('.tab-content');
        var $tabContentSecond = $('.tab-content-second');

        //btn-tab
        $('.btn-tab').click(function () {
            $(this).children('.btn-tab__icon').toggleClass('active');

            var $TabContent = $(this).parent($tabContent);
            var $TabContentSecond = $(this).parent($tabContentSecond);
            $TabContent.children('.tab-content__list:not(.js-tab-content__list_first)').slideToggle(200);
            $TabContentSecond.children('.tab-content-second__list:not(.js-tab-content__list_first)').slideToggle(200);
        });
    }

    // scroll body to 0px on click
    $('.scrolltop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

});




