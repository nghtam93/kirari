jQuery(function($) {
    $(document).ready(function(){

        new WOW().init();
        if($('body').hasClass( "home" )){
            $('.el__marquee').marquee({
                startVisible : true,
                gap: 0,
                duration: 30000,
                duplicated: true
            });
        }
        
        var header_sticky = $('header.header')
        $(window).scroll(function(){
            stickyHeight = 0
            if($('body').hasClass('home')){
                stickyHeight = header_sticky.outerHeight() + $('.home-slider').outerHeight();
            }
            $(this).scrollTop()>=stickyHeight?header_sticky.addClass("is-sticky"):header_sticky.removeClass("is-sticky")
        })

        //
        var doc = document.documentElement;
        var w = window;
      
        var prevScroll = w.scrollY || doc.scrollTop;
        var curScroll;
        var direction = 0;
        var prevDirection = 0;
      
        var header = $('.header__mb')
      
        var checkScroll = function() {
          /*
          ** Find the direction of scroll
          ** 0 - initial, 1 - up, 2 - down
          */
          curScroll = w.scrollY || doc.scrollTop;
          if (curScroll > prevScroll) { 
            //scrolled up
            direction = 2;
          }
          else if (curScroll < prevScroll) { 
            //scrolled down
            direction = 1;
          }
          if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
          }
          prevScroll = curScroll;
        };
      
        var toggleHeader = function(direction, curScroll) {
          if (direction === 2 && curScroll > header.outerHeight()) { 
            //replace 52 with the height of your header in px
            header.addClass('hide');
            prevDirection = direction;
          }
          else if (direction === 1) {
            header.removeClass('hide')
            prevDirection = direction;
          }
        };
      
        window.addEventListener('scroll', checkScroll);


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