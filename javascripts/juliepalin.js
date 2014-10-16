
$(document).ready(function() {

	$.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });

    $('.navbar a').on('click', function() {
        $("a.active").removeClass("active");
        $(this).not("[href=#header], [target=_blank]").addClass("active");

        $('html, body').animate({
            scrollTop: ($($(this).attr('href')).offset().top - 120)
        }, 600);

        return false;
    });

    var stop = 0;
    var headerbottom = $('#about').offset().top - 160;
    $(window).on('scroll',function(){
        stop = Math.round($(window).scrollTop());
        if (stop > headerbottom) {
            $('.navbar').addClass('after-header');
        } else {
            $('.navbar').removeClass('after-header');
        }
    });

	$('#header header a').on('click', function() {
        $('html, body').animate({
            scrollTop: ($($(this).attr('href')).offset().top - 60)
        }, 600);

        return false;
    });

    $('#photos .photos a[data-fluidbox]').fluidbox({
        stackIndex: 1030
    });

    var h = $('#photos .photos .col-md-6').height() * 2 - 35;
    $('.videos > div > div').height(h + 'px');
    $('.videos > div > div').css('line-height', h + 'px');

    $('.tooltips').tooltip().on("click", function(){
        $(this).tooltip("hide");
    });
});