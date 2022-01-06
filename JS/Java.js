/* global $ , alert , console */

$(function () {
    'use strict';
    var myheader =$('.header')
    var myslider = $('.slider')
    myheader.height($(window).height());
    $(window).resize(function () {

        myheader.height($(window).height());
        myslider.each(function(){
            $(this).css('paddingTop', ( $(window).height() - $('.slider li').height()) / 2 );
        });

    });

    $('.links li a').click(function(){

        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    //bxslider

    myslider.each(function(){
        $(this).css('paddingTop', ( $(window).height() - $('.slider li').height()) / 2 );
    });

    myslider.bxSlider({
        pager : false
    });

    //scroll

    $('.links li a').click(function(){

        $('html,body').animate({

            scrollTop : $('#' + $(this).data('value') ).offset().top

        },1000)

    });
    // auto slider

    (function Slider(){

        $('.slider2 .active').each(function(){

            if(!$(this).is(':last-child')) {

                $(this).delay(2000).fadeOut(1000,function() {

                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);

                    Slider();

                })

            }
            else{
                $(this).delay(2000).fadeOut(1000,function(){

                    $(this).removeClass('active');

                    $('.slider2 div').eq(0).addClass('active').fadeIn(1000);

                    Slider();

                });
            }

        })

    }());
    //trigger Mixitup

    $('#container').mixItUp();

    $('.shuffle li').click(function(){

        $(this).addClass('selected').siblings().removeClass('selected');

    })

    //Trigger Nice Scroll

    $('html').niceScroll({

        cursorcolor: '#55efc4',
        cursorwidth: '8px'

    });


})