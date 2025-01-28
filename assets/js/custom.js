$(function () {

    "use strict";


    //======MENU FIX JS=======   
    var navoff = $('.main_menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });


    //======HEADER FIX JS=======   
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {
            $('header').addClass('header_fix');
        } else {
            $('header').removeClass('header_fix');
        }
    });


    //=====CATEGORY MENU======  
    $('.menu_category_bar').on('click', function () {
        $('.menu_category_area').toggleClass('show_category');
    });

    $('.menu_category_bar').on('click', function () {
        $('.menu_category_bar').toggleClass('ratate_arrow');
    });


    //===venobox js===
    $('.venobox').venobox();


    //=======Simply Countdown======   
    var d = new Date(),
        countUpDate = new Date();
    d.setDate(d.getDate() + 365);
    simplyCountdown('.simply-countdown-one', {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
        enableUtc: true
    });


    //======countUp js=========   
    $('.counter').countUp();


    //=======SELECT2======== 
    $(document).ready(function () {
        $('.select_2').select2();
    });


    //======NICE SELECT=======
    $('.select_js').niceSelect();


    //=====WOW JS====== 
    new WOW().init();


    //=====BANNER SLIDER===== 
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        fade: true,
    });



});
