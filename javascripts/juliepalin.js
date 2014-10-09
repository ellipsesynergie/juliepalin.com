
$(document).ready(function() {

	$.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });

	$('#header header a').on('click', function() {
        $('html, body').animate({
            scrollTop: ($($(this).attr('href')).offset().top - 60)
        }, 600);

        return false;
    });

    $('#photos .photos a[data-fluidbox]').fluidbox();

    var h = $('#photos .photos .col-md-6').height() * 2 - 35;
    $('.videos > div > div').height(h + 'px');
    $('.videos > div > div').css('line-height', h + 'px');
});