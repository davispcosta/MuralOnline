// -----------------------------------------------------------------------------
// Main Javascript
// -----------------------------------------------------------------------------
(function($) {
    "use strict";

    $(window).load(function(){

        // Preloader
        // ----------------------------------------
        if($('#preloader').length > 0){
            $('#preloader').fadeOut('slow',function(){$(this).remove();});
        }

        // Custom Gallery Slider
        // ----------------------------------------
        if($('.gallery-slider').length > 0){
            $('.gallery-slider-2').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
            });
        }
    });

    $(document).ready(function($) {

        // Animating the navbar toggle
        // ----------------------------------------
        $('.navbar-toggle').on('click', function () {
            $(this).toggleClass('active');
        });

        // Header search bar
        // ----------------------------------------
        $('.navbar-search').on('click', function(){
            $(".header-search").fadeIn("slow");
        });

        $('.header-search-close').on('click', function(){
            $('.header-search').fadeOut('slow');
        });

        // Shop Notification Icon
        // ----------------------------------------
        if($('.notification-icon').length > 0){
            $('.notification-icon').on("click", function(){
                $('.notification-box').slideToggle("fast");
            });
        }

        // Sliders
        // ----------------------------------------

        // home splash slider
        if($('.splash-slider').length > 0){
            $('.splash-slider').owlCarousel({
                singleItem: true,
                transitionStyle: 'fade',
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='icon-arrows-left'></i>","<i class='icon-arrows-right'></i>"]
            });
        }

        // shop splash slider
        if($('.shop-splash-slider').length > 0){
            $('.shop-splash-slider').owlCarousel({
                singleItem: true,
                transitionStyle: 'fade',
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }

        // simple gallery slider
        if($('.gallery-slider').length > 0){
            $('.gallery-slider').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true
            });
        }

        // simple gallery slider
        if($('.gallery-slider-3').length > 0){
            $('.gallery-slider-3').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='icon-arrows-left'></i>","<i class='icon-arrows-right'></i>"]
            });
        }

        // slider with rectangle thumbnails
        if($('.gallery-slider-4').length > 0){
            $('.gallery-slider-4').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<i class="fa fa-chevron-left"></i>',
                nextArrow: '<i class="fa fa-chevron-right"></i>',
                asNavFor: '.gallery-slider-4-thumbnails'
            });
        }

        if($('.gallery-slider-4-thumbnails').length > 0){
            $('.gallery-slider-4-thumbnails').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                asNavFor: '.gallery-slider-4',
                focusOnSelect: true,
                responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

        // slider with circular thumbnails
        if($('.gallery-slider-5').length > 0){
            $('.gallery-slider-5').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.gallery-slider-5-thumbnails'
            });
        }

        if($('.gallery-slider-5-thumbnails').length > 0){
            $('.gallery-slider-5-thumbnails').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                asNavFor: '.gallery-slider-5',
                focusOnSelect: true
            });
        }

        // full width gallery slider
        if($('.full-gallery-slider').length > 0){
            $('.full-gallery-slider').owlCarousel({
                itemsDesktop: [1199,4],
                itemsDesktopSmall: [992,3],
                itemsTablet: [768,3],
                itemsMobile: [479,1],
                slideSpeed: 1000,
                autoPlay: 5000,
                pagination: true,
                navigation: true,
                navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
            });
        }

        // testimonials slider
        if($('.testimonials-slider').length > 0){
            $('.testimonials-slider').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
            });
        }

        // testimonials slider - style 1
        if($('.testimonials-slider-1').length > 0){
            $('.testimonials-slider-1').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: true,
                navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
            });
        }

        // testimonials slider - style 2
        if($('.testimonials-slider-2').length > 0){
            $('.testimonials-slider-2').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false,
            });
        }

        // testimonial slider with thumbnails
        if($('.testimonials-slider-3').length > 0){
            $('.testimonials-slider-3').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<i class="icon-arrows-left"></i>',
                nextArrow: '<i class="icon-arrows-right"></i>',
                asNavFor: '.testimonials-slider-3-thumbnails'
            });
        }

        if($('.testimonials-slider-3-thumbnails').length > 0){
            $('.testimonials-slider-3-thumbnails').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                asNavFor: '.testimonials-slider-3',
                focusOnSelect: true,
                responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

        // portfolio slider
        if($('.portfolio-slider').length > 0){
            $('.portfolio-slider').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: false
            });
        }

        // selected work
        if($('.selected-work-slider').length > 0){
            $('.selected-work-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<i class="icon-arrows-left"></i>',
                nextArrow: '<i class="icon-arrows-right"></i>',
                responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

        // clients slider
        if($('.clients-slider').length > 0){
            $('.clients-slider').owlCarousel({
                itemsDesktop: [1199,6],
                itemsDesktopSmall: [992,3],
                itemsTablet: [768,3],
                itemsMobile: [479,1],
                slideSpeed: 1000,
                autoPlay: 5000,
                pagination: true,
                navigation: false
            });
        }

        // shop clients slider
        if($('.shop-clients-slider').length > 0){
            $('.shop-clients-slider').owlCarousel({
                items: 4,
                itemsDesktop: [1199,4],
                itemsDesktopSmall: [992,2],
                itemsTablet: [768,2],
                itemsMobile: [479,1],
                slideSpeed: 1000,
                autoPlay: 5000,
                pagination: true,
                navigation: false
            });
        }

        // shop products slider
        if($('.shop-products-slider').length > 0){
            $('.shop-products-slider').owlCarousel({
                items: 4,
                itemsDesktop: [1199,4],
                itemsDesktopSmall: [992,3],
                itemsTablet: [768,3],
                itemsMobile: [479,1],
                slideSpeed: 1000,
                autoPlay: 5000,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
            });
        }

        // shop single product slider with thumbnails
        if($('.selected-work-slider').length > 0){
            $('.selected-work-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                asNavFor: '.product-slider-thumbnails'
            });
        }

        if($('.product-slider-thumbnails').length > 0){
            $('.product-slider-thumbnails').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3000,
                prevArrow: '<i class="fa fa-caret-left"></i>',
                nextArrow: '<i class="fa fa-caret-right"></i>',
                asNavFor: '.product-slider',
                focusOnSelect: true
            });
        }

        // tweets slider 
        if($('.tweets-slider').length > 0){
            $('.tweets-slider').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false,
            });
        }

        // Back to top
        // ----------------------------------------
        if($('.back-to-top').length > 0){
            $('.back-to-top').on("click", function(){
                $('html, body').animate({scrollTop: 0}, 800);
                return false;
            });
        }

        // Gallery Popup
        // ----------------------------------------

        // image popup
        if($('.popup').length > 0){
            $('.popup').magnificPopup({
              type: 'image'
            });
        }

        // video popup
        if($('.popup-video').length > 0){
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }

        // Progress
        // ----------------------------------------
        if($('.back-to-top').length > 0){
            $('.progress-circle').circleProgress({
                size: 140,
                startAngle: -Math.PI / 2,
                thickness: 8,
                emptyFill: "rgba(0, 0, 0, .05)",
                fill: {
                    color: "#fff"
                }
            });
        }

        // Progress
        // ----------------------------------------
        if($('.progress-circle-2-lightblue').length > 0){
            $('.progress-circle-2-lightblue').circleProgress({
                size: 190,
                startAngle: -Math.PI / 2,
                thickness: 8,
                lineCap: 'round',
                emptyFill: "#f9f9f9",
                fill: {
                    color: "#26a7ce"
                }
            });
        }

        if($('.progress-circle-2-darkblue').length > 0){
            $('.progress-circle-2-darkblue').circleProgress({
                size: 190,
                startAngle: -Math.PI / 2,
                thickness: 8,
                lineCap: 'round',
                emptyFill: "#f9f9f9",
                fill: {
                    color: "#5d7abb"
                }
            });
        }

        if($('.progress-circle-2-purple').length > 0){
            $('.progress-circle-2-purple').circleProgress({
                size: 190,
                startAngle: -Math.PI / 2,
                thickness: 8,
                lineCap: 'round',
                emptyFill: "#f9f9f9",
                fill: {
                    color: "#964ca8"
                }
            });
        }

        if($('.progress-circle-2-pink').length > 0){
            $('.progress-circle-2-pink').circleProgress({
                size: 190,
                startAngle: -Math.PI / 2,
                thickness: 8,
                lineCap: 'round',
                emptyFill: "#f9f9f9",
                fill: {
                    color: "#e30e8e"
                }
            });
        }

        // Portfolio Filtering
        // ----------------------------------------
        if($('.filter').length > 0){
            $(".filter").on("click", function () {
                var $this = $(this);
                // if we click the active tab, do nothing
                if ( !$this.hasClass("active") ) {
                    $(".filter").removeClass("active");
                    $this.addClass("active"); // set the active tab
                    // get the data-rel value from selected tab and set as filter
                    var $filter = $this.data("rel");
                    // if we select view all, return to initial settings and show all
                    $filter == 'all' ?
                        $(".item")
                        .css('opacity', 1)
                    : // otherwise
                        $(".item")
                        .css('opacity', .2)
                        .filter(function () {
                            // set data-filter value as the data-rel value of selected tab
                            return $(this).data("filter") == $filter;
                        })
                        .css('opacity', 1);
                } // if
            });
        }

        // Fancy Persons Filtering
        // ----------------------------------------
        if($('.person-filter').length > 0){
            $(".person-filter").on("click", function () {
                var $this = $(this);
                // if we click the active tab, do nothing
                if ( !$this.hasClass("active") ) {
                    $(".person-filter").removeClass("active");
                    $this.addClass("active"); // set the active tab
                    // get the data-rel value from selected tab and set as filter
                    var $filter = $this.data("rel");
                    // if we select view all, return to initial settings and show all
                    $filter == 'all' ?
                        $(".person-content")
                        .css('display', 'block')
                    : // otherwise
                        $(".person-content")
                        .css('display', 'none')
                        .filter(function () {
                            // set data-filter value as the data-rel value of selected tab
                            return $(this).data("filter") == $filter;
                        })
                        .css('display', 'block');
                } // if
            });
        }


        // Masonry Grid
        // ----------------------------------------
        if($('.masonry').length > 0){
            $(".masonry").gridalicious({
                gutter: 20,
                width: 330,
                selector: '.post'
            });
        }

        if($('.masonry-gallery').length > 0){
            $('.masonry-gallery').isotope({
                itemSelector: '.gallery-item',
                masonry: {
                // use element for option
                    columnWidth: '.grid-sizer'
                },
                percentPosition: true
            });
        }

        // Footer Collapsing 
        // ----------------------------------------

        // footer
        if($('.footer-control-collapse').length > 0){
            $(".footer-control-collapse").on("click", function(e) {
                e.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".footer-control-expand").removeClass("active");
                $(".footer-collapsed").slideUp();
            });
        }

        if($('.footer-control-expand').length > 0){
            $(".footer-control-expand").on("click", function(e) {
                e.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".footer-control-collapse").removeClass("active");
                $(".footer-collapsed").slideDown();
            });
        }
    });
})(jQuery);
