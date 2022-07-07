$(document).ready(function () {
    $('#up-page').click(function () {
        $('body, html').animate({
            scrollTop: '0'
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#up-page').slideDown(500, 'linear');
        } else {
            $('#up-page').slideUp(500, 'linear');
        }
    });
});