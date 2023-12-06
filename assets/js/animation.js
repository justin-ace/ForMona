$(document).ready(function() {
    const animationFillModeProperty = "animation-fill-mode";
    const animationTimingFunctionProperty = "animation-timing-function";
    const animationDurationProperty = "animation-duration";
    const animationDelayProperty = "animation-delay";
    const animationNameProperty = "animation-name";

    const slideDownAnimation = "slide-down";
    const slideDownBounceAnimation = "slide-down-bounce";
    const bounceInAnimation = "bounce-in";

    const parseAnimationDuration = function(duration) {
        return duration + "s";
    };

    const showContent = function(content) {
        content.removeClass("invisible");
    };

    const jqueryWindow = $(window);
    const jqueryScrollEvent = "scroll";

    const removeHandlerWindowScrollEvent = function(callback) {
        jqueryWindow.off(jqueryScrollEvent, callback);
    };

    const canApplyAnimation = function(animationTriggerOffsetTop) {
        const windowScrollTop = jqueryWindow.scrollTop();
        const windowScrollTopPadding = jqueryWindow.height() / 3;

        return animationTriggerOffsetTop < (windowScrollTop + windowScrollTopPadding);
    };

    const tabletMedia = window.matchMedia("(min-width: 768px) and (max-width: 1365px)");
    const mobileMedia = window.matchMedia("(max-width: 767px)");
//-----------------------------
 
    const whoWeAreAnimatableContentOneAnimationDuration = 0.3;
    const whoWeAreAnimatableContentOneInitialAnimationDelay = 0;
    const whoWeAreAnimatableContentOneAnimationInterval = 0.1;
    const whoWeAreAnimatableContentOneAnimationFillMode = "backwards";
    const whoWeAreAnimatableContentOneAnimationTimingFunction = "ease-in";

    const whoWeAreContent = $(".whoweare-content:first");
    const whoWeAreAnimatableContentOne = whoWeAreContent.find(".whoweare-animatable-content-one");

    const whoWeAreAnimatableContentOneAnimations = [];
    let whoWeAreAnimatableContentOneAnimationDelay = whoWeAreAnimatableContentOneInitialAnimationDelay;

    for (i = 0; i < whoWeAreAnimatableContentOne.length; i++) {
        whoWeAreAnimatableContentOneAnimations.push({
            [animationFillModeProperty]: whoWeAreAnimatableContentOneAnimationFillMode,
            [animationTimingFunctionProperty]: whoWeAreAnimatableContentOneAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(whoWeAreAnimatableContentOneAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(whoWeAreAnimatableContentOneAnimationDelay),
            [animationNameProperty]: slideDownAnimation
        });

        whoWeAreAnimatableContentOneAnimationDelay += whoWeAreAnimatableContentOneAnimationDuration + whoWeAreAnimatableContentOneAnimationInterval;
    }

    const whoWeAreAnimatableContentOneAnimationTrigger = $(".whoweare-animatable-content-one-animation-trigger:first");
    const whoWeAreAnimatableContentOneAnimationTriggerOffsetTop = whoWeAreAnimatableContentOneAnimationTrigger.offset().top;

    let isApplyingWhoWeAreAnimatableContentOneAnimation = false;

    const applyWhoWeAreAnimatableContentOneAnimation = function() {
        if (canApplyAnimation(whoWeAreAnimatableContentOneAnimationTriggerOffsetTop) && !isApplyingWhoWeAreAnimatableContentOneAnimation) {
            whoWeAreAnimatableContentOne.each(function(index) {
                const content = $(this);
                content.css(whoWeAreAnimatableContentOneAnimations[index]);
                showContent(content);

                removeHandlerWindowScrollEvent(applyWhoWeAreAnimatableContentOneAnimation);
            });
        }
    }

    jqueryWindow.scroll(applyWhoWeAreAnimatableContentOneAnimation);

/*
    const whoWeAreAnimatableContentOneAnimationDuration = 0.3;
    const whoWeAreAnimatableContentOneInitialAnimationDelay = 0;
    const whoWeAreAnimatableContentOneAnimationInterval = 0.1;
    const whoWeAreAnimatableContentOneAnimationFillMode = "backwards";
    const whoWeAreAnimatableContentOneAnimationTimingFunction = "ease-in";

    let whoWeAreContent;

    if (tabletMedia.matches) {
        whoWeAreContent = $(".whoweare-content-tablet:first");
    }
    else {
        whoWeAreContent = $(".whoweare-content-desktop:first");
    }

    const whoWeAreAnimatableContentOne = whoWeAreContent.find(".whoweare-animatable-content-one");

    const whoWeAreAnimatableContentOneAnimations = [];
    let whoWeAreAnimatableContentOneAnimationDelay = whoWeAreAnimatableContentOneInitialAnimationDelay;

    for (i = 0; i < whoWeAreAnimatableContentOne.length; i++) {
        whoWeAreAnimatableContentOneAnimations.push({
            [animationFillModeProperty]: whoWeAreAnimatableContentOneAnimationFillMode,
            [animationTimingFunctionProperty]: whoWeAreAnimatableContentOneAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(whoWeAreAnimatableContentOneAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(whoWeAreAnimatableContentOneAnimationDelay),
            [animationNameProperty]: slideDownAnimation
        });

        whoWeAreAnimatableContentOneAnimationDelay += whoWeAreAnimatableContentOneAnimationDuration + whoWeAreAnimatableContentOneAnimationInterval;
    }

    const whoWeAreAnimatableContentOneAnimationTrigger = $(".whoweare-animatable-content-one-animation-trigger:first");
    const whoWeAreAnimatableContentOneAnimationTriggerOffsetTop = whoWeAreAnimatableContentOneAnimationTrigger.offset().top;

    let isApplyingWhoWeAreAnimatableContentOneAnimation = false;

    const applyWhoWeAreAnimatableContentOneAnimation = function() {
        if (canApplyAnimation(whoWeAreAnimatableContentOneAnimationTriggerOffsetTop) && !isApplyingWhoWeAreAnimatableContentOneAnimation) {
            whoWeAreAnimatableContentOne.each(function(index) {
                const content = $(this);
                content.css(whoWeAreAnimatableContentOneAnimations[index]);
                showContent(content);

                removeHandlerWindowScrollEvent(applyWhoWeAreAnimatableContentOneAnimation);
            });
        }
    }

    jqueryWindow.scroll(applyWhoWeAreAnimatableContentOneAnimation);*/
//----------------------------
    const whoWeAreAnimatableCardAnimationDuration = 0.3;
    const whoWeAreAnimatableCardInitialAnimationDelay = 0;
    const whoWeAreAnimatableCardAnimationInterval = 0.1;
    const whoWeAreAnimatableCardAnimationFillMode = "backwards";
    const whoWeAreAnimatableCardAnimationTimingFunction = "ease-in";

    const whoWeAreCardAnimatableCirclesAnimationDuration = 0.3;
    const whoWeAreCardAnimatableCirclesAnimationInterval = 0.1;
    const whoWeAreCardAnimatableCirclesAnimationFillMode = "backwards";
    const whoWeAreCardAnimatableCirclesAnimationTimingFunction = "ease-in";

    const whoWeAreCardOneAnimatableCirclesAnimationDelay = whoWeAreAnimatableCardInitialAnimationDelay + whoWeAreAnimatableCardAnimationDuration + whoWeAreCardAnimatableCirclesAnimationInterval;
    const whoWeAreAnimatableCardTwoAnimationDelay = whoWeAreCardOneAnimatableCirclesAnimationDelay + whoWeAreCardAnimatableCirclesAnimationDuration + whoWeAreAnimatableCardAnimationInterval;
    const whoWeAreCardTwoAnimatableCirclesAnimationDelay = whoWeAreAnimatableCardTwoAnimationDelay + whoWeAreAnimatableCardAnimationDuration + whoWeAreAnimatableCardAnimationInterval;
    const whoWeAreAnimatableCardThreeAnimationDelay = whoWeAreCardTwoAnimatableCirclesAnimationDelay + whoWeAreCardAnimatableCirclesAnimationDuration + whoWeAreCardAnimatableCirclesAnimationInterval;
    const whoWeAreCardThreeAnimatableCirclesAnimationDelay = whoWeAreAnimatableCardThreeAnimationDelay + whoWeAreAnimatableCardAnimationDuration + whoWeAreAnimatableCardAnimationInterval;

    const whoWeAreAnimatableCardsContainer = $(".whoweare-animatable-cards-container:first");
    const whoWeAreAnimatableCardOne = whoWeAreAnimatableCardsContainer.find(".whoweare-animatable-card-one:first");
    const whoWeAreCardOneAnimatableCircles = whoWeAreAnimatableCardOne.find(".whoweare-card-one-animatable-circle");
    const whoWeAreAnimatableCardTwo = whoWeAreAnimatableCardsContainer.find(".whoweare-animatable-card-two:first");
    const whoWeAreCardTwoAnimatableCircles = whoWeAreAnimatableCardTwo.find(".whoweare-card-two-animatable-circle");
    const whoWeAreAnimatableCardThree = whoWeAreAnimatableCardsContainer.find(".whoweare-animatable-card-three:first");
    const whoWeAreCardThreeAnimatableCircles = whoWeAreAnimatableCardThree.find(".whoweare-card-three-animatable-circle");

    const applyWhoWeAreAnimatableCardAnimation = function(card, animationDelay, animationName) {
        card.css({
            [animationFillModeProperty]: whoWeAreAnimatableCardAnimationFillMode,
            [animationTimingFunctionProperty]: whoWeAreAnimatableCardAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(whoWeAreAnimatableCardAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(animationDelay),
            [animationNameProperty]: animationName
        });

        showContent(card);
    };

    const applyWhoWeAreCardAnimatableCirclesAnimation = function(circles, animationDelay) {
        circles.css({
            [animationFillModeProperty]: whoWeAreCardAnimatableCirclesAnimationFillMode,
            [animationTimingFunctionProperty]: whoWeAreCardAnimatableCirclesAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(whoWeAreCardAnimatableCirclesAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(animationDelay),
            [animationNameProperty]: bounceInAnimation
        });

        showContent(circles);
    };

    const whoWeAreAnimatableCardsAnimationTrigger = $(".whoweare-animatable-cards-animation-trigger:first");
    const whoWeAreAnimatableCardsAnimationTriggerOffsetTop = whoWeAreAnimatableCardsAnimationTrigger.offset().top;

    let isApplyingWhoWeAreAnimatableCardsAnimation = false;

    const applyWhoWeAreAnimations = function() {
        if (canApplyAnimation(whoWeAreAnimatableCardsAnimationTriggerOffsetTop) && !isApplyingWhoWeAreAnimatableCardsAnimation) {
            isApplyingWhoWeAreAnimatableCardsAnimation = true;

            applyWhoWeAreAnimatableCardAnimation(whoWeAreAnimatableCardOne, whoWeAreAnimatableCardInitialAnimationDelay, slideDownAnimation);
            applyWhoWeAreCardAnimatableCirclesAnimation(whoWeAreCardOneAnimatableCircles, whoWeAreCardOneAnimatableCirclesAnimationDelay);
            applyWhoWeAreAnimatableCardAnimation(whoWeAreAnimatableCardTwo, whoWeAreAnimatableCardTwoAnimationDelay, slideDownBounceAnimation);
            applyWhoWeAreCardAnimatableCirclesAnimation(whoWeAreCardTwoAnimatableCircles, whoWeAreCardTwoAnimatableCirclesAnimationDelay);
            applyWhoWeAreAnimatableCardAnimation(whoWeAreAnimatableCardThree, whoWeAreAnimatableCardThreeAnimationDelay, slideDownAnimation);
            applyWhoWeAreCardAnimatableCirclesAnimation(whoWeAreCardThreeAnimatableCircles, whoWeAreCardThreeAnimatableCirclesAnimationDelay);

            removeHandlerWindowScrollEvent(applyWhoWeAreAnimations);
        }
    };

    jqueryWindow.scroll(applyWhoWeAreAnimations);

//#region Pallete Animation

    /*-pallete desktop & tablet section-*/
    const ourPalleteContent = $(".ourpallete-content:first");
    const ourPalleteAnimatableImagePalletes = ourPalleteContent.find(".ourpallete-animatable-imagepallete");

    const ourPalleteAnimatablePalleteImageOpenClass = "ourpallete-animatable-palleteimage-open";
    const ourPalleteAnimatablePalleteImageCollapsedClass = "ourpallete-animatable-palleteimage-collapsed";

    ourPalleteAnimatableImagePalletes
        .find(".ourpallete-animatable-palleteimage")
        .mouseenter(function() {
            const palleteImage = $(this);
            palleteImage.addClass(ourPalleteAnimatablePalleteImageOpenClass);
            palleteImage.removeClass(ourPalleteAnimatablePalleteImageCollapsedClass);
        })
        .mouseleave(function() {
            const palleteImage = $(this);
            palleteImage.addClass(ourPalleteAnimatablePalleteImageCollapsedClass);
            palleteImage.removeClass(ourPalleteAnimatablePalleteImageOpenClass);
        });

    const ourPalleteAnimatableImagePalletesAnimationTrigger = $(".ourpallete-animatable-imagepallete-animation-trigger:first");
    const ourPalleteAnimatableImagePalletesAnimationTriggerOffsetTop = ourPalleteAnimatableImagePalletesAnimationTrigger.offset().top;

    let isApplyingOurPalleteImagePalletesAnimation = false;

    const applyOurPalleteImagePalletesAnimation = function() {
        if (canApplyAnimation(ourPalleteAnimatableImagePalletesAnimationTriggerOffsetTop) && !isApplyingOurPalleteImagePalletesAnimation) {
            isApplyingOurPalleteImagePalletesAnimation = true;

            ourPalleteAnimatableImagePalletes.addClass("ourpallete-animatable-imagepallete-animation");
            showContent(ourPalleteAnimatableImagePalletes);

            removeHandlerWindowScrollEvent(applyOurPalleteImagePalletesAnimation);
        }
    };

    jqueryWindow.scroll(applyOurPalleteImagePalletesAnimation);
    /*-#end pallete desktop & tablet section-*/
    
    /*-pallete mobile section-*/
    const palleteAnimatableContentOneAnimationDuration = 0.3;
    const palleteAnimatableContentOneInitialAnimationDelay = 0;
    const palleteAnimatableContentOneAnimationInterval = 0.1;
    const palleteAnimatableContentOneAnimationFillMode = "backwards";
    const palleteAnimatableContentOneAnimationTimingFunction = "ease-in";

    const palleteContent = $(".ourpallete-content-mobile:first");
    const palleteAnimatableContentOne = palleteContent.find(".ourpallete-animatable-imagepallete-mobile");

    const palleteAnimatableContentOneAnimations = [];
    let palleteAnimatableContentOneAnimationDelay = palleteAnimatableContentOneInitialAnimationDelay;

    for (i = 0; i < palleteAnimatableContentOne.length; i++) {
        palleteAnimatableContentOneAnimations.push({
            [animationFillModeProperty]: palleteAnimatableContentOneAnimationFillMode,
            [animationTimingFunctionProperty]: palleteAnimatableContentOneAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(palleteAnimatableContentOneAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(palleteAnimatableContentOneAnimationDelay),
            [animationNameProperty]: slideDownAnimation
        });

        palleteAnimatableContentOneAnimationDelay += palleteAnimatableContentOneAnimationDuration + palleteAnimatableContentOneAnimationInterval;
    }

    const palleteAnimatableContentOneAnimationTrigger = $(".ourpallete-animatable-imagepallete-animation-trigger-mobile:first");
    const palleteAnimatableContentOneAnimationTriggerOffsetTop = palleteAnimatableContentOneAnimationTrigger.offset().top;

    let isApplyingpalleteAnimatableContentOneAnimation = false;

    const applypalleteAnimatableContentOneAnimation = function() {
        if (canApplyAnimation(palleteAnimatableContentOneAnimationTriggerOffsetTop) && !isApplyingpalleteAnimatableContentOneAnimation) {
            palleteAnimatableContentOne.each(function(index) {
                const content = $(this);
                content.css(palleteAnimatableContentOneAnimations[index]);
                showContent(content);

                removeHandlerWindowScrollEvent(applypalleteAnimatableContentOneAnimation);
            });
        }
    }

    jqueryWindow.scroll(applypalleteAnimatableContentOneAnimation);
    /*-#end pallete mobile section-*/
//#endregion Pallete Animation

    const upcomingEventsClassesAnimatableCardsToAnimate = 3;

    const upcomingEventsClassesAnimatableCardAnimationDuration = 0.3;
    const upcomingEventsClassesAnimatableCardInitialAnimationDelay = 0;
    const upcomingEventsClassesAnimatableCardAnimationInterval = 0.1;
    const upcomingEventsClassesAnimatableCardAnimationFillMode = "backwards";
    const upcomingEventsClassesAnimatableCardAnimationTimingFunction = "ease-in";

    const upcomingEventsClassesContent = $(".upcomingeventsclasses-content:first");
    const upcomingEventsClassesAnimatableCards = upcomingEventsClassesContent.find(".upcomingeventsclasses-animatable-card");

    const upcomingEventsClassesAnimatableCardsAnimation = [];
    let upcomingEventsClassesAnimatableCardAnimationDelay = upcomingEventsClassesAnimatableCardInitialAnimationDelay;

    for (i = 0; i < upcomingEventsClassesAnimatableCardsToAnimate; i++) {
        upcomingEventsClassesAnimatableCardsAnimation.push({
            [animationFillModeProperty]: upcomingEventsClassesAnimatableCardAnimationFillMode,
            [animationTimingFunctionProperty]: upcomingEventsClassesAnimatableCardAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(upcomingEventsClassesAnimatableCardAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(upcomingEventsClassesAnimatableCardAnimationDelay),
            [animationNameProperty]: slideDownAnimation
        });

        upcomingEventsClassesAnimatableCardAnimationDelay += upcomingEventsClassesAnimatableCardAnimationDuration + upcomingEventsClassesAnimatableCardAnimationInterval;
    }
    //console.log(upcomingEventsClassesAnimatableCardsAnimation);

    const upcomingEventsClassesAnimatableCardsAnimationTrigger = $(".upcomingeventsclasses-animatable-cards-animation-trigger:first");
    const upcomingEventsClassesAnimatableCardAnimationTriggerOffsetTop = upcomingEventsClassesAnimatableCardsAnimationTrigger.offset().top;

    let isApplyingupcomingEventsClassesAnimatableCardsAnimation = false;

    const applyUpcomingEventsClassesAnimatableCardsAnimation = function() {
        if (canApplyAnimation(upcomingEventsClassesAnimatableCardAnimationTriggerOffsetTop) && !isApplyingupcomingEventsClassesAnimatableCardsAnimation) {
            isApplyingupcomingEventsClassesAnimatableCardsAnimation = true;
            
            upcomingEventsClassesAnimatableCards.each(function(index) {
                if(upcomingEventsClassesAnimatableCardsToAnimate > index){
                    const card = $(this);
                    card.css(upcomingEventsClassesAnimatableCardsAnimation[index]);
                    showContent(card);
                }else{
                    return false;
                }
            });

            removeHandlerWindowScrollEvent(applyUpcomingEventsClassesAnimatableCardsAnimation);
        }
    };

    jqueryWindow.scroll(applyUpcomingEventsClassesAnimatableCardsAnimation);
    // Upcoming Events Cards Tablet & Mobile View
    const upcomingEventsClassesAnimatableCardTabletAndMobileAnimationDuration = 0.3;
    const upcomingEventsClassesAnimatableCardTabletAndMobileInitialAnimationDelay = 0;
    const upcomingEventsClassesAnimatableCardTabletAndMobileAnimationInterval = 0.1;
    const upcomingEventsClassesAnimatableCardTabletAndMobileAnimationFillMode = "backwards";
    const upcomingEventsClassesAnimatableCardTabletAndMobileAnimationTimingFunction = "ease-in";

    const upcomingEventsClassesAnimatableCardTabletAndMobileContent = $(".events-content:first");
    const upcomingEventsClassesAnimatableCardTabletAndMobile = upcomingEventsClassesAnimatableCardTabletAndMobileContent.find(".upcomingeventsclasses-animatable-card-mobile");

    const upcomingEventsClassesAnimatableCardTabletAndMobileAnimations = [];
    let upcomingEventsClassesAnimatableCardTabletAndMobileAnimationDelay = upcomingEventsClassesAnimatableCardTabletAndMobileInitialAnimationDelay;

    for (i = 0; i < upcomingEventsClassesAnimatableCardTabletAndMobile.length; i++) {
        upcomingEventsClassesAnimatableCardTabletAndMobileAnimations.push({
            [animationFillModeProperty]: upcomingEventsClassesAnimatableCardTabletAndMobileAnimationFillMode,
            [animationTimingFunctionProperty]: upcomingEventsClassesAnimatableCardTabletAndMobileAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(upcomingEventsClassesAnimatableCardTabletAndMobileAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(upcomingEventsClassesAnimatableCardTabletAndMobileAnimationDelay),
            [animationNameProperty]: slideDownAnimation
        });

        upcomingEventsClassesAnimatableCardTabletAndMobileAnimationDelay += upcomingEventsClassesAnimatableCardTabletAndMobileAnimationDuration + upcomingEventsClassesAnimatableCardTabletAndMobileAnimationInterval;
    }

    const upcomingEventsClassesAnimatableCardTabletAndMobileAnimationTrigger = $(".upcomingeventsclasses-animatable-cards-animation-trigger:first");
    const upcomingEventsClassesAnimatableCardTabletAndMobileAnimationTriggerOffsetTop = upcomingEventsClassesAnimatableCardTabletAndMobileAnimationTrigger.offset().top;

    let isApplyingupcomingEventsClassesAnimatableCardTabletAndMobileAnimation = false;

    const applyupcomingEventsClassesAnimatableCardTabletAndMobileAnimation = function() {
        if (canApplyAnimation(upcomingEventsClassesAnimatableCardTabletAndMobileAnimationTriggerOffsetTop) && !isApplyingupcomingEventsClassesAnimatableCardTabletAndMobileAnimation) {
            upcomingEventsClassesAnimatableCardTabletAndMobile.each(function(index) {
                const content = $(this);
                content.css(upcomingEventsClassesAnimatableCardTabletAndMobileAnimations[index]);
                showContent(content);

                removeHandlerWindowScrollEvent(applyupcomingEventsClassesAnimatableCardTabletAndMobileAnimation);
            });
        }
    }

    jqueryWindow.scroll(applyupcomingEventsClassesAnimatableCardTabletAndMobileAnimation);

//#region Project section
    const projectsAnimatableCardAnimationDuration = 0.3;
    const projectsAnimatableCardInitialAnimationDelay = 0;
    const projectsAnimatableCardAnimationInterval = 0.1;
    const projectsAnimatableCardAnimationFillMode = "backwards";
    const projectsAnimatableCardAnimationTimingFunction = "ease-in";

    const projectsContent = $(".projects-content:first");
    const projectsAnimatableCards = projectsContent.find(".projects-animatable-card");
    const projectsAnimatableCardsOverlay = projectsContent.find(".projects-animatable-card-overlay");
    const projectsAnimatableCardsOverlayReverse = projectsContent.find(".projects-animatable-card-overlay-reverse");

    const projectsAnimatableOverlayOpenClass = "projects-animatable-overlay-open";
    const projectsAnimatableOverlayCollapseClass = "projects-animatable-overlay-collapse";
    const projectsAnimatableOverlayOpenClassReverse = "projects-animatable-overlay-open-reverse";
    const projectsAnimatableOverlayCollapseClassReverse = "projects-animatable-overlay-collapse-reverse";
    
    const projectsAnimatableCardsAnimation = [];
    let projectsAnimatableCardAnimationDelay = projectsAnimatableCardInitialAnimationDelay;

    projectsAnimatableCardsOverlay.each(function(){
        const animatableContent = $(this);
        const animatableContentOverlay = animatableContent.find(".projects-animatable-overlay:first");
        
        animatableContent.mouseenter(function() {
            animatableContentOverlay.addClass(projectsAnimatableOverlayCollapseClass);
            animatableContentOverlay.removeClass(projectsAnimatableOverlayOpenClass);
        });

        animatableContent.mouseleave(function() {
            animatableContentOverlay.addClass(projectsAnimatableOverlayOpenClass);
            animatableContentOverlay.removeClass(projectsAnimatableOverlayCollapseClass);
        });
    });
    projectsAnimatableCardsOverlayReverse.each(function(){
        const animatableContent = $(this);
        const animatableContentOverlay = animatableContent.find(".projects-animatable-overlay-reverse:first");
        
        animatableContent.mouseenter(function() {
            animatableContentOverlay.addClass(projectsAnimatableOverlayCollapseClassReverse);
            animatableContentOverlay.removeClass(projectsAnimatableOverlayOpenClassReverse);
        });

        animatableContent.mouseleave(function() {
            animatableContentOverlay.addClass(projectsAnimatableOverlayOpenClassReverse);
            animatableContentOverlay.removeClass(projectsAnimatableOverlayCollapseClassReverse);
        });
    });

    projectsAnimatableCards.each(function() {
        projectsAnimatableCardsAnimation.push({
            [animationFillModeProperty]: projectsAnimatableCardAnimationFillMode,
            [animationTimingFunctionProperty]: projectsAnimatableCardAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(projectsAnimatableCardAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(projectsAnimatableCardAnimationDelay),
            [animationNameProperty]: slideDownAnimation
        });

        projectsAnimatableCardAnimationDelay += projectsAnimatableCardAnimationDuration + projectsAnimatableCardAnimationInterval;
    });

    const projectsAnimatableCardsAnimationTrigger = $(".projects-animatable-cards-animation-trigger:first");
    const projectsAnimatableCardsAnimationTriggerOffsetTop = projectsAnimatableCardsAnimationTrigger.offset().top;

    let isApplyingProjectsAnimatableCardsAnimation = false;

    const applyProjectsAnimatableCardsAnimation = function() {
        if (canApplyAnimation(projectsAnimatableCardsAnimationTriggerOffsetTop) && !isApplyingProjectsAnimatableCardsAnimation) {
            isApplyingProjectsAnimatableCardsAnimation = true;

            projectsAnimatableCards.each(function(index) {
                const card = $(this);
                card.css(projectsAnimatableCardsAnimation[index]);
                showContent(card);
            });

            removeHandlerWindowScrollEvent(applyProjectsAnimatableCardsAnimation);
        }
    };

    jqueryWindow.scroll(applyProjectsAnimatableCardsAnimation);
    
    /*-pallete mobile section-*/
    const projectMobileAnimatableContentOneAnimationDuration = 0.3;
    const projectMobileAnimatableContentOneInitialAnimationDelay = 0;
    const projectMobileAnimatableContentOneAnimationInterval = 0.1;
    const projectMobileAnimatableContentOneAnimationFillMode = "backwards";
    const projectMobileAnimatableContentOneAnimationTimingFunction = "ease-in";

    const projectMobileContent = $(".projects-content-mobile:first");
    const projectMobileAnimatableContentOne = projectMobileContent.find(".projects-animatable-card-mobile");

    const projectMobileAnimatableContentOneAnimations = [];
    let projectMobileAnimatableContentOneAnimationDelay = projectMobileAnimatableContentOneInitialAnimationDelay;

    for (i = 0; i < projectMobileAnimatableContentOne.length; i++) {
        projectMobileAnimatableContentOneAnimations.push({
            [animationFillModeProperty]: projectMobileAnimatableContentOneAnimationFillMode,
            [animationTimingFunctionProperty]: projectMobileAnimatableContentOneAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(projectMobileAnimatableContentOneAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(projectMobileAnimatableContentOneAnimationDelay),
            [animationNameProperty]: slideDownAnimation
        });

        projectMobileAnimatableContentOneAnimationDelay += projectMobileAnimatableContentOneAnimationDuration + projectMobileAnimatableContentOneAnimationInterval;
    }

    const projectMobileAnimatableContentOneAnimationTrigger = $(".projects-animatable-cards-animation-trigger-mobile:first");
    const projectMobileAnimatableContentOneAnimationTriggerOffsetTop = projectMobileAnimatableContentOneAnimationTrigger.offset().top;

    let isApplyingprojectMobileAnimatableContentOneAnimation = false;

    const applyprojectMobileAnimatableContentOneAnimation = function() {
        if (canApplyAnimation(projectMobileAnimatableContentOneAnimationTriggerOffsetTop) && !isApplyingprojectMobileAnimatableContentOneAnimation) {
            projectMobileAnimatableContentOne.each(function(index) {
                const content = $(this);
                content.css(projectMobileAnimatableContentOneAnimations[index]);
                showContent(content);

                removeHandlerWindowScrollEvent(applyprojectMobileAnimatableContentOneAnimation);
            });
        }
    }

    jqueryWindow.scroll(applyprojectMobileAnimatableContentOneAnimation);
    /*-#end pallete mobile section-*/
//#endregion Project section

    const meetTheTeamContent = $(".meettheteam-content:first");
    const meetTheTeamAnimatableCardOne = meetTheTeamContent.find(".meettheteam-animatable-card-one:first");
    const meetTheTeamAnimatableCardTwo = meetTheTeamContent.find(".meettheteam-animatable-card-two:first");

    const meetTheTeamCardOverlayQuery = ".meettheteam-card-overlay:first";
    const meetTheTeamCardOneOverlay = meetTheTeamAnimatableCardOne.find(meetTheTeamCardOverlayQuery);
    const meetTheTeamCardTwoOverlay = meetTheTeamAnimatableCardTwo.find(meetTheTeamCardOverlayQuery);

    const meetTheTeamCardOverlayOpenClass = "meettheteam-card-overlay-open";
    const meetTheTeamCardOverlayCollapsedClass = "meettheteam-card-overlay-collapsed";

    const openMeetTheTeamCardOverlay = function(overlay) {
        overlay.addClass(meetTheTeamCardOverlayOpenClass);
        overlay.removeClass(meetTheTeamCardOverlayCollapsedClass);
    };

    const collapseMeetTheTeamCardOverlay = function(overlay) {
        overlay.addClass(meetTheTeamCardOverlayCollapsedClass);
        overlay.removeClass(meetTheTeamCardOverlayOpenClass);
    }

    meetTheTeamAnimatableCardOne.mouseenter(function() {
        openMeetTheTeamCardOverlay(meetTheTeamCardOneOverlay);
    });

    meetTheTeamAnimatableCardOne.mouseleave(function() {
        collapseMeetTheTeamCardOverlay(meetTheTeamCardOneOverlay);
    });

    meetTheTeamAnimatableCardTwo.mouseenter(function() {
        openMeetTheTeamCardOverlay(meetTheTeamCardTwoOverlay);
    });

    meetTheTeamAnimatableCardTwo.mouseleave(function() {
        collapseMeetTheTeamCardOverlay(meetTheTeamCardTwoOverlay);
    });

    const meetTheTeamAnimatableCardsAnimationTrigger = $(".meettheteam-animatable-cards-animation-trigger:first");
    const meetTheTeamAnimatableCardsAnimationTriggerOffsetTop = meetTheTeamAnimatableCardsAnimationTrigger.offset().top;

    let isApplyingMeetTheTeamAnimatableCardsAnimation = false;

    const applyMeetTheTeamAnimatableCardsAnimation = function() {
        if (canApplyAnimation(meetTheTeamAnimatableCardsAnimationTriggerOffsetTop) && !isApplyingMeetTheTeamAnimatableCardsAnimation) {
            isApplyingMeetTheTeamAnimatableCardsAnimation = true;

            meetTheTeamAnimatableCardOne.addClass("meettheteam-animatable-card-one-animation");
            showContent(meetTheTeamAnimatableCardOne);
            meetTheTeamAnimatableCardTwo.addClass("meettheteam-animatable-card-two-animation");
            showContent(meetTheTeamAnimatableCardTwo);

            removeHandlerWindowScrollEvent(applyMeetTheTeamAnimatableCardsAnimation);
        }
    };

    jqueryWindow.scroll(applyMeetTheTeamAnimatableCardsAnimation);

    const meetTheTeamAnimatableCollaboratorAnimationDuration = 0.3;
    const meetTheTeamAnimatableCollaboratorInitialAnimationDelay = 0;
    const meetTheTeamAnimatableCollaboratorAnimationInterval = 0.1;
    const meetTheTeamAnimatableCollaboratorAnimationFillMode = "backwards";
    const meetTheTeamAnimatableCollaboratorAnimationTimingFunction = "ease-in";

    const meetTheTeamAnimatableCollaboratorsContainer = $(".meettheteam-animatable-collaborators-container:first");
    const whoWeAreAnimatableCollaborators = meetTheTeamAnimatableCollaboratorsContainer.find(".meettheteam-animatable-collaborator");

    const meetTheTeamAnimatableCollaboratorsAnimation = [];
    let meetTheTeamAnimatableCollaboratorAnimationDelay = meetTheTeamAnimatableCollaboratorInitialAnimationDelay;

    for (i = 0; i < whoWeAreAnimatableCollaborators.length; i++) {
        meetTheTeamAnimatableCollaboratorsAnimation.push({
            [animationFillModeProperty]: meetTheTeamAnimatableCollaboratorAnimationFillMode,
            [animationTimingFunctionProperty]: meetTheTeamAnimatableCollaboratorAnimationTimingFunction,
            [animationDurationProperty]: parseAnimationDuration(meetTheTeamAnimatableCollaboratorAnimationDuration),
            [animationDelayProperty]: parseAnimationDuration(meetTheTeamAnimatableCollaboratorAnimationDelay),
            [animationNameProperty]: slideDownAnimation
        });

        meetTheTeamAnimatableCollaboratorAnimationDelay += meetTheTeamAnimatableCollaboratorAnimationDuration + meetTheTeamAnimatableCollaboratorAnimationInterval;
    }

    const meetTheTeamAnimatableCollaboratorsAnimationTrigger = $(".meettheteam-animatable-collaborators-animation-trigger:first");
    const meetTheTeamAnimatableCollaboratorsAnimationTriggerOffsetTop = meetTheTeamAnimatableCollaboratorsAnimationTrigger.offset().top;

    let isApplyingMeetTheTeamAnimatableCollaboratorsAnimation = false;

    const applymeetTheTeamAnimatableCollaboratorsAnimation = function() {
        if (canApplyAnimation(meetTheTeamAnimatableCollaboratorsAnimationTriggerOffsetTop) && !isApplyingMeetTheTeamAnimatableCollaboratorsAnimation) {
            whoWeAreAnimatableCollaborators.each(function(index) {
                const collaborator = $(this);
                collaborator.css(meetTheTeamAnimatableCollaboratorsAnimation[index]);
                showContent(collaborator);

                removeHandlerWindowScrollEvent(applymeetTheTeamAnimatableCollaboratorsAnimation);
            });
        }
    };

    jqueryWindow.scroll(applymeetTheTeamAnimatableCollaboratorsAnimation);
    
// Meeting Space
    const meetingSpaceContent = $(".meetingspace-content:first");
    const meetingSpaceAnimatableCircles = meetingSpaceContent.find(".meetingspace-animatable-circle");

    const meetingSpaceAnimtableCirclesAnimationTrigger = $(".meetingspace-animatable-circles-animation-trigger:first");
    const meetingSpaceAnimtableCirclesAnimationTriggerOffsetTop = meetingSpaceAnimtableCirclesAnimationTrigger.offset().top;

    let isApplyingMeetingSpaceAnimatableCirclesAnimation = false;

    const applyMeetingSpaceAnimatableCirclesAnimation = function() {
        if (canApplyAnimation(meetingSpaceAnimtableCirclesAnimationTriggerOffsetTop) && !isApplyingMeetingSpaceAnimatableCirclesAnimation) {
            isApplyingMeetingSpaceAnimatableCirclesAnimation = true;

            meetingSpaceAnimatableCircles.addClass("meetingspace-animatable-circle-animation");
            showContent(meetingSpaceAnimatableCircles);

            removeHandlerWindowScrollEvent(applyMeetingSpaceAnimatableCirclesAnimation);
        }
    };

    jqueryWindow.scroll(applyMeetingSpaceAnimatableCirclesAnimation);
    jqueryWindow.trigger(jqueryScrollEvent);
});