
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
});