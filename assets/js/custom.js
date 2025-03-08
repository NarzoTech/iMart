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
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
    });


    //=====CATEGORY SLIDER===== 
    $('.category_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
    });

    //=====FLASH SELL SLIDER===== 
    $('.flash_sell_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
    });


    //=====MARQUEE SLIDER===== 
    $('.brand_marquee').marquee({
        speed: 70,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });

    //======TRENDING PRODUCT FILTER========== 
    $('.product_tabs').pwstabs({
        effect: 'slidedown',
        defaultTab: 1,
    });

    //=====BANNER SLIDER===== 
    $('.banner_2_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
    });

    //=====FLASH SELL 2 SLIDER===== 
    $('.flash_sell_2_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
    });

    //=====CATEGORY SLIDER===== 
    $('.category_2_slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
    });


    //=====FAVOURITE PRODUCT 2 SLIDER===== 
    $('.favourite_product_2_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
    });


    //=====GROCERY BEST SELL SLIDER====== 
    $('.grocery_best_sell_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });


    //=====TESTIMONIAL SLIDER====== 
    $('.testi_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //=====BEAUTI BANNER SLIDER===== 
    $('.beauty_banner_slider_large').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.beauty_banner_slider_small'
    });

    $('.beauty_banner_slider_small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.beauty_banner_slider_large',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        vertical: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    //=====BEAUTY FEATURED SLIDER=====
    $('.beauty_featured_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    //=====BEAUTY CATEGORY SLIDER=====
    $('.beauty_category_slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    //======BEAUTY INSTAGRAM SLIDER======
    $('.beauty_instagram_slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //=====BEAUTY BRAND SLIDER=====
    $('.beauty_brand_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    //=====TESTIMONIAL 2 SLIDER====== 
    $('.testi_slider_2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //======STICKY SIDEBAR====== 
    $("#sticky_sidebar").stickit({
        top: 70,
    });


    //=====RANGE SLIDER===== 
    $('.basic').alRangeSlider();
    const options = {
        range: { min: 0, max: 1000, step: 1 },
        initialSelectedValues: { from: 100, to: 500 },
        grid: { minTicksStep: 1, marksStep: 5 },
        theme: "dark",
    };

    $('.range_slider').alRangeSlider(options);
    const options2 = {
        orientation: "vertical"
    };


    //======PRODUCT FILTER====== 
    $(".shop_filter_btn").on("click", function () {
        $(".shop_filter_btn").toggleClass("show");
    });
    $(".shop_filter_btn").on("click", function () {
        $(".shop_filter_area").toggleClass("show");
    });


    //======PRODUCT DETAILS SLIDER====== 
    $('.details_slider_thumb').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        asNavFor: '.details_slider_nav',
    });
    $('.details_slider_nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.details_slider_thumb',
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        vertical: true,
    });


    //======ELEVATE ZOOM=======
    // $(".zoom").elevateZoom({
    //     zoomType: 'inner',
    //     cursor: 'crosshair'
    // });



});
