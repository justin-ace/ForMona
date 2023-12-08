// bind scroll event in medium and small screen for animation
$('.navbar-collapse').bind('scroll', function() {
    var goToTop = $('.go-to-top');
    var goToBottom = $('.go-to-bottom');
    if ($(this).scrollTop() + $(this).innerHeight() + 1 >= $(this)[0].scrollHeight) {
        goToBottom.css('opacity', 0);
        goToTop.css('opacity', 1);
    } else if ($(this).scrollTop() == 0) {
        goToTop.css('opacity', 0);
        goToBottom.css('opacity', 1);
    }
});

// function for the scroll-to-top or scroll-to-bottom 
function navigate(bool) {
    var position = bool; // 0 for top, 1 for bottom.
    if (position) {
        $('.navbar-collapse').animate({ scrollTop: 0 }, 'slow');
    } else {
        $('.navbar-collapse').animate({ scrollTop: $(this).scrollTop() + $(this).innerHeight() }, 'slow');
    }
}
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    //var x = $("#whoweare").offset();
    //alert("Top: " + x.top + " Left: " + x.left);
});
/*
$(document).ready(function () {
    $('body').scrollspy({
      target: "#main-nav", offset: 800
    });
});*/