
$(document).ready(function() {

	$('#header header a').on('click', function() {
        $('html, body').animate({
            scrollTop: ($($(this).attr('href')).offset().top - 60)
        }, 600);

        return false;
    });
});