$(document).ready(function() {
    let fadeInDownAnimationDurationValue;

    $(".project-card").each(function(index) {
        let currentElement = $(this);
        
        if (index == 0) {
            let fadeInDownAnimationDuration = currentElement.css("animation-duration");
            fadeInDownAnimationDurationValue = parseFloat(fadeInDownAnimationDuration.replace("s", ""));
        }
        else {
            currentElement.css("animation-delay", (fadeInDownAnimationDurationValue * index) + "s");
        }

        let overlay = currentElement.children(".project-card-overlay");

        currentElement.mouseenter(function() {
            overlay.addClass("project-card-overlay-collapsed");
            overlay.removeClass("project-card-overlay-open");
        });

        currentElement.mouseleave(function() {
            overlay.addClass("project-card-overlay-open");
            overlay.removeClass("project-card-overlay-collapsed");
        });
    });
    
    // let fadeInDownAnimationDurationValue2;
    // $(".whoweare-card").each(function(index) {
    //     let currentElement = $(this);
        
    //     if (index == 0) {
    //         let fadeInDownAnimationDuration = currentElement.css("animation-duration");
    //         fadeInDownAnimationDurationValue2 = parseFloat(fadeInDownAnimationDuration.replace("s", ""));
    //     }
    //     else {
    //         currentElement.css("animation-delay", (fadeInDownAnimationDurationValue2 * index) + "s");
    //     }
    // });

    $(".ourpallete-container .ourpallete-image-container").each(function() {
        let currentElement = $(this);

        currentElement.mouseenter(function() {
            currentElement.css("flex-grow", 3);
        });

        currentElement.mouseleave(function() {
            currentElement.css("flex", 1);
        });
    });

    $(".meettheteam-image").each(function() {
        let currentElement = $(this);
        let overlay = currentElement.children(".meettheteam-image-overlay");

        currentElement.mouseenter(function() {
            overlay.css("height", "100%");
            overlay.css("background-color", "#db3b86");
        });

        currentElement.mouseleave(function() {
            overlay.css("height", "50px");
            overlay.css("background-color", "#000000");
        });
    });

    let whoWeAreCardLeft = $(".whoweare-card-left");
    let whoWeAreCardLeftCircle = $(".whoweare-card-left-circle");

    let whoWeAreCardCenter = $(".whoweare-card-center");
    let whoWeAreCardCenterCircle = $(".whoweare-card-center-circle");

    let whoWeAreCardRight = $(".whoweare-card-right");
    let whoWeAreCardCircleRight = $(".whoweare-card-center-right");

    // $(window).scroll(function() {
    //     $(".whoweare-cards-conatiner").each(function() {
    //         let currentElement = $(this);
    //         let currentElementTopOffset = currentElement.offset().top;
    //         let windowScrollTop = $(window).scrollTop();

    //         if (currentElementTopOffset < (windowScrollTop + ($(window).height() / 3))) {
    //             whoWeAreCardLeft.addClass("whoweare-card-left-fadeindown");
    //             whoWeAreCardLeftCircle.addClass("whoweare-card-left-circle-bouncein");
    //             whoWeAreCardCenter.addClass("whoweare-card-center-fadeindownbounce");
    //             whoWeAreCardCenterCircle.addClass("whoweare-card-center-circle-bouncein");
    //             whoWeAreCardRight.addClass("whoweare-card-right-fadeindown");
    //             whoWeAreCardCircleRight.addClass("whoweare-card-right-circle-bouncein");
    //         }
    //     });
    // });

    
});