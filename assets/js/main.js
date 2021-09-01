jQuery(function($) {
    $(document).ready(function(){

        // new WOW().init();

        var header_sticky = $('header.header')
        $(window).scroll(function(){
            stickyHeight = header_sticky.outerHeight() + $('.home-slider').outerHeight();

            $(this).scrollTop()>stickyHeight?header_sticky.addClass("is-sticky"):header_sticky.removeClass("is-sticky")
        })
        // var header_sticky_mb = $('.header__mb')
        // $(window).scroll(function(){
        //     stickyHeight_mb = header_sticky_mb.outerHeight();

        //     $(this).scrollTop()>stickyHeight_mb?header_sticky_mb.addClass("is-sticky"):header_sticky_mb.removeClass("is-sticky")
        // })
        //===========================
        var buttonAnimations = {
            init: function() {
                var th = buttonAnimations;
                th.$btns = $('.js-check-scroll');
                if (!th.$btns.length) return
                th.check();
                th.events();
            },
        
            check: function() {
                var th = buttonAnimations;
                client_windowH = $(window).height();
                var scrollTop = $(document).scrollTop();
                var checkpoint = scrollTop + client_windowH - 30;
                th.$btns.each(function() {
                    var $btn = $(this);
                    var topPosition = $btn.offset().top;
                    if (checkpoint >= topPosition && !$btn.hasClass('el--active')) {
                        setTimeout(function() {
                            $btn.addClass('el--active');
                        }, 1000);
                    };
                })
            },
            events: function() {
                var th = buttonAnimations;
                $(document).scroll(function() {
                    th.check();
                });
                $(window).resize(function() {
                    th.check();
                });
            }
        };
        buttonAnimations.init();

        //-------------------------------------------------
        // Menu
        //-------------------------------------------------
        $('.menu-mb__btn').click(function(e){
            e.preventDefault()
            if($('.menu-mb__btn').hasClass('active')){

                $('body').removeClass('modal-open')
                $('.menu-mb__btn').removeClass('active')
                $('.nav__mobile').removeClass('active')

            } else {
                $('body').addClass('modal-open')
                $('.menu-mb__btn').addClass('active')
                $('.nav__mobile').addClass('active')
            }
        });
        // $('.nav__mobile__close').click(function(){
        //     $('body').removeClass('modal-open')
        //     $(this).removeClass('active')
        //     $('.nav__mobile').removeClass('active')
        // })

        // var e=$(".nav__mobile .nav__mobile--ul");
        // e.find(".menu-item-has-children>a").after('<button class="nav__mobile__btn"><i></i></button>'),

        // e.find(".nav__mobile__btn").on("click",function(e){
        //     e.stopPropagation(),
        //     $(this).parent().find('.sub-menu').first().is(":visible")?$(this).parent().removeClass("sub-active"):
        //     $(this).parent().addClass("sub-active"),
        //     $(this).parent().find('.sub-menu').first().slideToggle()
        // })
    });
    //-------------------------------------------------

     // Optimalisation: Store the references outside the event handler:
   

    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        if (windowWidth < 991) {
            $('.sc-footer__menu .menu-item-has-children').removeClass('js-active')
        }else{
            if(!$('.sc-footer__menu .menu-item-has-children').hasClass('js-active')){
                $('.sc-footer__menu .menu-item-has-children').addClass('js-active')
            }
        }
    }
    
    windowSize();
    $(window).resize(function() {
        windowSize();
    })


    var e=$(".sc-footer__menu");
    e.find(".menu-item-has-children>a").after('<button class="togglez"><span class="icon-caret-down"></span></button>'),
    e.find(".togglez").on("click",function(e){
        e.stopPropagation()
        if($(this).closest('li').hasClass("js-active")){
            $(this).closest('li').removeClass("js-active")
        }else{
            $(this).closest('li').addClass("js-active")
        }
    })

    //==========================
    $('.dnselect__box').mousedown(function(e){ e.stopPropagation(); });

    $(document).mousedown(function(e){
        $('.dnselect__current').removeClass('has_under_open');
        $('.dnselect__content').removeClass('show').slideUp();
    });

    function open_under(elem) {
     
        $(elem).click(function(e) {
            e.preventDefault();
            $(this).toggleClass('has_under_open');
            $(this).next().slideToggle();
        });
    }
    open_under('.dnselect__current')

});