function hideAnnouncement() {
    var announcementBar = $('.event-container');
    var mainNavBar = $('.main-navbar');

    announcementBar.addClass('hide');
    mainNavBar.addClass('hide-event');
}

$(function() {
    // init carousel
    $('.no-wrap').carousel({
        pause: true,        // init without autoplay (optional)
        interval: false,    // do not autoplay after sliding (optional)
        wrap:false          // do not loop
    });
    // init carousels with hidden left control:
    //$('.carousel').children('.left.carousel-control').hide();
    
});
/* 

*/
function showNewLandscape(){//newLandscapeTab
    document.getElementById("newLandscapeTab").classList.remove("d-none");
    document.getElementById("newLandscapeTab").classList.add("d-flex");
    document.getElementById("onlineEventDesignAndCollaboration").classList.remove("d-flex");
    document.getElementById("onlineEventDesignAndCollaboration").style.display = 'none';
    document.getElementById("landscapeArchitecture").classList.remove("d-flex");
    document.getElementById("landscapeArchitecture").style.display = 'none';
    document.getElementById("educationAndMentorshipTab").classList.remove("d-flex");
    document.getElementById("educationAndMentorshipTab").classList.add("d-none");
    document.getElementById("prjct_btn1").classList.remove("active");
    document.getElementById("prjct_btn2").classList.add("active");
    document.getElementById("prjct_btn3").classList.remove("active");
    document.getElementById("prjct_btn4").classList.remove("active");
    document.getElementById("prjct_btn1_tablet").classList.remove("active");
    document.getElementById("prjct_btn2_tablet").classList.add("active");
    document.getElementById("prjct_btn3_tablet").classList.remove("active");
    document.getElementById("prjct_btn4_tablet").classList.remove("active");
}
function showEventDesignAndCollaboration(){//onlineEventDesignAndCollaboration
    document.getElementById("newLandscapeTab").classList.remove("d-flex");
    document.getElementById("newLandscapeTab").style.display = 'none';
    document.getElementById("onlineEventDesignAndCollaboration").classList.remove("d-none");
    document.getElementById("onlineEventDesignAndCollaboration").classList.add("d-flex");
    document.getElementById("landscapeArchitecture").classList.remove("d-flex");
    document.getElementById("landscapeArchitecture").style.display = 'none';
    document.getElementById("educationAndMentorshipTab").classList.remove("d-flex");
    document.getElementById("educationAndMentorshipTab").classList.add("d-none");
    document.getElementById("prjct_btn1").classList.remove("active");
    document.getElementById("prjct_btn2").classList.remove("active");
    document.getElementById("prjct_btn3").classList.add("active");
    document.getElementById("prjct_btn4").classList.remove("active");
    document.getElementById("prjct_btn1_tablet").classList.remove("active");
    document.getElementById("prjct_btn2_tablet").classList.remove("active");
    document.getElementById("prjct_btn3_tablet").classList.add("active");
    document.getElementById("prjct_btn4_tablet").classList.remove("active");
}
function showLandscapeArchitecture(){//landscapeArchitecture
    document.getElementById("newLandscapeTab").classList.remove("d-flex");
    document.getElementById("newLandscapeTab").style.display = 'none';
    document.getElementById("onlineEventDesignAndCollaboration").classList.remove("d-flex");
    document.getElementById("onlineEventDesignAndCollaboration").style.display = 'none';
    document.getElementById("landscapeArchitecture").classList.remove("d-none");
    document.getElementById("landscapeArchitecture").classList.add("d-flex");
    document.getElementById("educationAndMentorshipTab").classList.remove("d-flex");
    document.getElementById("educationAndMentorshipTab").classList.add("d-none");
    document.getElementById("prjct_btn1").classList.add("active");
    document.getElementById("prjct_btn2").classList.remove("active");
    document.getElementById("prjct_btn3").classList.remove("active");
    document.getElementById("prjct_btn4").classList.remove("active");
    document.getElementById("prjct_btn1_tablet").classList.add("active");
    document.getElementById("prjct_btn2_tablet").classList.remove("active");
    document.getElementById("prjct_btn3_tablet").classList.remove("active");
    document.getElementById("prjct_btn4_tablet").classList.remove("active");
}
function showEducationAndMentorship(){//landscapeArchitecture
    document.getElementById("newLandscapeTab").classList.remove("d-flex");
    document.getElementById("newLandscapeTab").style.display = 'none';
    document.getElementById("onlineEventDesignAndCollaboration").classList.remove("d-flex");
    document.getElementById("onlineEventDesignAndCollaboration").style.display = 'none';
    document.getElementById("landscapeArchitecture").classList.remove("d-flex");
    document.getElementById("landscapeArchitecture").classList.add("d-none");
    document.getElementById("educationAndMentorshipTab").classList.remove("d-none");
    document.getElementById("educationAndMentorshipTab").classList.add("d-flex");
    document.getElementById("prjct_btn1").classList.remove("active");
    document.getElementById("prjct_btn2").classList.remove("active");
    document.getElementById("prjct_btn3").classList.remove("active");
    document.getElementById("prjct_btn4").classList.add("active");
    document.getElementById("prjct_btn1_tablet").classList.remove("active");
    document.getElementById("prjct_btn2_tablet").classList.remove("active");
    document.getElementById("prjct_btn3_tablet").classList.remove("active");
    document.getElementById("prjct_btn4_tablet").classList.add("active");
}
//Mobile Project Tabs

function projectSelectMobile(){
    var selectedValue = document.getElementById("projectSelectMobile").value;
    if(selectedValue == "LandscapeArchitecture"){
        document.getElementById("newLandscapeTabMobile").classList.remove("d-block");
        document.getElementById("newLandscapeTabMobile").style.display = 'none';
        document.getElementById("onlineEventDesignAndCollaborationMobile").classList.remove("d-block");
        document.getElementById("onlineEventDesignAndCollaborationMobile").style.display = 'none';
        document.getElementById("landscapeArchitectureMobile").classList.remove("d-none");
        document.getElementById("landscapeArchitectureMobile").classList.add("d-block");
        document.getElementById("educationAndMentorshipTabMobile").classList.remove("d-block");
        document.getElementById("educationAndMentorshipTabMobile").classList.add("d-none");
    }else if(selectedValue == "NewLandscape"){
        document.getElementById("newLandscapeTabMobile").classList.remove("d-none");
        document.getElementById("newLandscapeTabMobile").classList.add("d-block");
        document.getElementById("onlineEventDesignAndCollaborationMobile").classList.remove("d-block");
        document.getElementById("onlineEventDesignAndCollaborationMobile").style.display = 'none';
        document.getElementById("landscapeArchitectureMobile").classList.remove("d-block");
        document.getElementById("landscapeArchitectureMobile").style.display = 'none';
        document.getElementById("educationAndMentorshipTabMobile").classList.remove("d-block");
        document.getElementById("educationAndMentorshipTabMobile").classList.add("d-none");
    }else if(selectedValue == "EventDesignAndCollaboration"){
        document.getElementById("newLandscapeTabMobile").classList.remove("d-block");
        document.getElementById("newLandscapeTabMobile").style.display = 'none';
        document.getElementById("onlineEventDesignAndCollaborationMobile").classList.remove("d-none");
        document.getElementById("onlineEventDesignAndCollaborationMobile").classList.add("d-block");
        document.getElementById("landscapeArchitectureMobile").classList.remove("d-block");
        document.getElementById("landscapeArchitectureMobile").style.display = 'none';
        document.getElementById("educationAndMentorshipTabMobile").classList.remove("d-block");
        document.getElementById("educationAndMentorshipTabMobile").classList.add("d-none");
    }else if(selectedValue == "EducationAndMentorship"){
        document.getElementById("newLandscapeTabMobile").classList.remove("d-block");
        document.getElementById("newLandscapeTabMobile").style.display = 'none';
        document.getElementById("onlineEventDesignAndCollaborationMobile").classList.remove("d-block");
        document.getElementById("onlineEventDesignAndCollaborationMobile").classList.add("d-none");
        document.getElementById("landscapeArchitectureMobile").classList.remove("d-block");
        document.getElementById("landscapeArchitectureMobile").style.display = 'none';
        document.getElementById("educationAndMentorshipTabMobile").classList.remove("d-none");
        document.getElementById("educationAndMentorshipTabMobile").classList.add("d-block");
    }
}
//Desktop and Tablet homeCarouselBtn1 bg-color-inactiveDot educationAndMentorshipTabMobile
/*
$('document').ready(function(){
    var offset = 80;

    $('.navbar-nav li a').click(function(event) {
        $($(this).attr('href'))[0].scrollIntoView();
        scrollBy(0, -offset);
    });
});
*/
