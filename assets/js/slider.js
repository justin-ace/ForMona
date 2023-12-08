/*
$(document).ready(function() {
    var vSliders = $('.v-slider');
    vSliders.css('opacity', 1);
    vSliders.slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300
    });

    var sliders = $('.slider');
    sliders.css('opacity', 1);
    sliders.slick({
        arrows: false,
        slidesToShow: 2,
        centerMode: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        draggable: true
    });

    var responsiveSlider = $('.r-slider');
    responsiveSlider.css('opacity', 1);
    responsiveSlider.slick({
        arrows: true,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: false,
            }
        }]
    });
});*/
//#region  Carousel Controls

/* //#region Who We Are Cards */
var WhoWeAreCardSlider = document.getElementById('whoWeAreCardCarousel')

WhoWeAreCardSlider.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('whoWeAreFirstSlide').classList;
    var cList2 = document.getElementById('whoWeAreLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("whoWeAreCarouselPrev").classList.add("last-page-button");
        document.getElementById("whoWeAreCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("whoWeAreCarouselPrev").classList.remove("last-page-button");
        document.getElementById("whoWeAreCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("whoWeAreCarouselPrev").classList.remove("last-page-button");
        document.getElementById("whoWeAreCarouselNext").classList.remove("last-page-button");
    }
})
/* //#endregion Who We Are Cards */

/* //#endregion Upcoming Events & Classes */

/* //#region Upcoming Events & Classes */
var UpcomingEventsSlider = document.getElementById('eventsCarousel')

UpcomingEventsSlider.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('eventsFirstSlide').classList;
    var cList2 = document.getElementById('eventsLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("eventsCarouselPrev").classList.add("last-page-button");
        document.getElementById("eventsCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("eventsCarouselPrev").classList.remove("last-page-button");
        document.getElementById("eventsCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("eventsCarouselPrev").classList.remove("last-page-button");
        document.getElementById("eventsCarouselNext").classList.remove("last-page-button");
    }
})

var UpcomingEventsSliderMobileAndTablet = document.getElementById('eventsCarouselMobileAndTablet')

UpcomingEventsSliderMobileAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('eventsFirstSlideMobileAndTablet').classList;
    var cList2 = document.getElementById('eventsLastSlideMobileAndTablet').classList;
    if (cList1.contains('active')) {
        document.getElementById("eventsCarouselMobileAndTabletPrev").classList.add("last-page-button");
        document.getElementById("eventsCarouselMobileAndTabletNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("eventsCarouselMobileAndTabletPrev").classList.remove("last-page-button");
        document.getElementById("eventsCarouselMobileAndTabletNext").classList.add("last-page-button");
    }else{
        document.getElementById("eventsCarouselMobileAndTabletPrev").classList.remove("last-page-button");
        document.getElementById("eventsCarouselMobileAndTabletNext").classList.remove("last-page-button");
    }
})
/* //#endregion Upcoming Events & Classes */

/* //#region Projects */

// Project Tabs
var carouselBtnProjectsTablet = document.getElementById('carouselBtnProjects')

carouselBtnProjectsTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('btnProjectsMenuFirstTab').classList;
    var cList2 = document.getElementById('btnProjectsMenuLastTab').classList;
    if (cList1.contains('active')) {
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
    }else if(cList2.contains('active')){
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
    }else{
        
    }
})

// Contents
var landscapeArchitectureMobileCarousel = document.getElementById('landscapeArchitectureCarouselMobile')

landscapeArchitectureMobileCarousel.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('landscapeArchitectureFirstSlide').classList;
    var cList2 = document.getElementById('landscapeArchitectureLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("landscapeArchitectureCarouselPrev").classList.add("last-page-button");
        document.getElementById("landscapeArchitectureCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("landscapeArchitectureCarouselPrev").classList.remove("last-page-button");
        document.getElementById("landscapeArchitectureCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("landscapeArchitectureCarouselPrev").classList.remove("last-page-button");
        document.getElementById("landscapeArchitectureCarouselNext").classList.remove("last-page-button");
    }
})

var newLandscapeCarouselMobileCarousel = document.getElementById('newLandscapeCarouselMobile')

newLandscapeCarouselMobileCarousel.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('newLandscapeCarouselFirstSlide').classList;
    var cList2 = document.getElementById('newLandscapeCarouselLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("newLandscapeCarouselCarouselPrev").classList.add("last-page-button");
        document.getElementById("newLandscapeCarouselCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("newLandscapeCarouselCarouselPrev").classList.remove("last-page-button");
        document.getElementById("newLandscapeCarouselCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("newLandscapeCarouselCarouselPrev").classList.remove("last-page-button");
        document.getElementById("newLandscapeCarouselCarouselNext").classList.remove("last-page-button");
    }
})

var onlineEventDesignAndCollaborationMobileCarousel = document.getElementById('onlineEventDesignAndCollaborationCarouselMobile')

onlineEventDesignAndCollaborationMobileCarousel.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('onlineEventDesignAndCollaborationFirstSlide').classList;
    var cList2 = document.getElementById('onlineEventDesignAndCollaborationLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("onlineEventDesignAndCollaborationCarouselPrev").classList.add("last-page-button");
        document.getElementById("onlineEventDesignAndCollaborationCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("onlineEventDesignAndCollaborationCarouselPrev").classList.remove("last-page-button");
        document.getElementById("onlineEventDesignAndCollaborationCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("onlineEventDesignAndCollaborationCarouselPrev").classList.remove("last-page-button");
        document.getElementById("onlineEventDesignAndCollaborationCarouselNext").classList.remove("last-page-button");
    }
})

var educationAndMentorshipMobileCarousel = document.getElementById('educationAndMentorshipCarouselMobile')

educationAndMentorshipMobileCarousel.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('educationAndMentorshipFirstSlide').classList;
    var cList2 = document.getElementById('educationAndMentorshipLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("educationAndMentorshipCarouselPrev").classList.add("last-page-button");
        document.getElementById("educationAndMentorshipCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("educationAndMentorshipCarouselPrev").classList.remove("last-page-button");
        document.getElementById("educationAndMentorshipCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("educationAndMentorshipCarouselPrev").classList.remove("last-page-button");
        document.getElementById("educationAndMentorshipCarouselNext").classList.remove("last-page-button");
    }
})
//Desktop and Tablet View
var AgaKhanGardenDesktopAndTablet = document.getElementById('agaKhanGardenCarousel')

AgaKhanGardenDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('agaKhanGardenFirstSlide').classList;
    var cList2 = document.getElementById('agaKhanGardenLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("agaKhanGardenCarouselPrev").classList.add("last-page-button");
        document.getElementById("agaKhanGardenCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("agaKhanGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("agaKhanGardenCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("agaKhanGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("agaKhanGardenCarouselNext").classList.remove("last-page-button");
    }
})

var GardenOfLightAtKingsCrossDesktopAndTablet = document.getElementById('gardenOfLightAtKingsCrossCarousel')

GardenOfLightAtKingsCrossDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('gardenOfLightAtKingsCrossFirstSlide').classList;
    var cList2 = document.getElementById('gardenOfLightAtKingsCrossLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("gardenOfLightAtKingsCrossCarouselPrev").classList.add("last-page-button");
        document.getElementById("gardenOfLightAtKingsCrossCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("gardenOfLightAtKingsCrossCarouselPrev").classList.remove("last-page-button");
        document.getElementById("gardenOfLightAtKingsCrossCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("gardenOfLightAtKingsCrossCarouselPrev").classList.remove("last-page-button");
        document.getElementById("gardenOfLightAtKingsCrossCarouselNext").classList.remove("last-page-button");
    }
})

var WoodHavenLibraryDesktopAndTablet = document.getElementById('woodHavenLibraryCarousel')

WoodHavenLibraryDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('woodHavenLibraryFirstSlide').classList;
    var cList2 = document.getElementById('woodHavenLibraryLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("woodHavenLibraryCarouselPrev").classList.add("last-page-button");
        document.getElementById("woodHavenLibraryCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("woodHavenLibraryCarouselPrev").classList.remove("last-page-button");
        document.getElementById("woodHavenLibraryCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("woodHavenLibraryCarouselPrev").classList.remove("last-page-button");
        document.getElementById("woodHavenLibraryCarouselNext").classList.remove("last-page-button");
    }
})

var hamptonHousePoolAndGardenDesktopAndTablet = document.getElementById('hamptonHousePoolAndGardenCarousel')

hamptonHousePoolAndGardenDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('hamptonHousePoolAndGardenFirstSlide').classList;
    var cList2 = document.getElementById('hamptonHousePoolAndGardenLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("hamptonHousePoolAndGardenCarouselPrev").classList.add("last-page-button");
        document.getElementById("hamptonHousePoolAndGardenCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("hamptonHousePoolAndGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("hamptonHousePoolAndGardenCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("hamptonHousePoolAndGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("hamptonHousePoolAndGardenCarouselNext").classList.remove("last-page-button");
    }
})

var southgateStudioPollinatorGardenDesktopAndTablet = document.getElementById('southgateStudioPollinatorGardenCarousel')

southgateStudioPollinatorGardenDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('southgateStudioPollinatorGardenFirstSlide').classList;
    var cList2 = document.getElementById('southgateStudioPollinatorGardenLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("southgateStudioPollinatorGardenCarouselPrev").classList.add("last-page-button");
        document.getElementById("southgateStudioPollinatorGardenCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("southgateStudioPollinatorGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("southgateStudioPollinatorGardenCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("southgateStudioPollinatorGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("southgateStudioPollinatorGardenCarouselNext").classList.remove("last-page-button");
    }
})

var richbellCottageGardenDesktopAndTablet = document.getElementById('richbellCottageGardenCarousel')

richbellCottageGardenDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('richbellCottageGardenFirstSlide').classList;
    var cList2 = document.getElementById('richbellCottageGardenLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("richbellCottageGardenCarouselPrev").classList.add("last-page-button");
        document.getElementById("richbellCottageGardenCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("richbellCottageGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("richbellCottageGardenCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("richbellCottageGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("richbellCottageGardenCarouselNext").classList.remove("last-page-button");
    }
})

var hilltopHouseAndGardenDesktopAndTablet = document.getElementById('hilltopHouseAndGardenCarousel')

hilltopHouseAndGardenDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('hilltopHouseAndGardenFirstSlide').classList;
    var cList2 = document.getElementById('hilltopHouseAndGardenLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("hilltopHouseAndGardenCarouselPrev").classList.add("last-page-button");
        document.getElementById("hilltopHouseAndGardenCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("hilltopHouseAndGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("hilltopHouseAndGardenCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("hilltopHouseAndGardenCarouselPrev").classList.remove("last-page-button");
        document.getElementById("hilltopHouseAndGardenCarouselNext").classList.remove("last-page-button");
    }
})

var enlightenmentStupaLandspaceDesktopAndTablet = document.getElementById('enlightenmentStupaLandspaceCarousel')

enlightenmentStupaLandspaceDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('enlightenmentStupaLandspaceFirstSlide').classList;
    var cList2 = document.getElementById('enlightenmentStupaLandspaceLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("enlightenmentStupaLandspaceCarouselPrev").classList.add("last-page-button");
        document.getElementById("enlightenmentStupaLandspaceCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("enlightenmentStupaLandspaceCarouselPrev").classList.remove("last-page-button");
        document.getElementById("enlightenmentStupaLandspaceCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("enlightenmentStupaLandspaceCarouselPrev").classList.remove("last-page-button");
        document.getElementById("enlightenmentStupaLandspaceCarouselNext").classList.remove("last-page-button");
    }
})

var memorialParkDesktopAndTablet = document.getElementById('memorialParkCarousel')

memorialParkDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('memorialParkFirstSlide').classList;
    var cList2 = document.getElementById('memorialParkLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("memorialParkCarouselPrev").classList.add("last-page-button");
        document.getElementById("memorialParkCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("memorialParkCarouselPrev").classList.remove("last-page-button");
        document.getElementById("memorialParkCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("memorialParkCarouselPrev").classList.remove("last-page-button");
        document.getElementById("memorialParkCarouselNext").classList.remove("last-page-button");
    }
})

var bokTowerGardensDesktopAndTablet = document.getElementById('bokTowerGardensCarousel')

bokTowerGardensDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('bokTowerGardensFirstSlide').classList;
    var cList2 = document.getElementById('bokTowerGardensLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("bokTowerGardensCarouselPrev").classList.add("last-page-button");
        document.getElementById("bokTowerGardensCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("bokTowerGardensCarouselPrev").classList.remove("last-page-button");
        document.getElementById("bokTowerGardensCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("bokTowerGardensCarouselPrev").classList.remove("last-page-button");
        document.getElementById("bokTowerGardensCarouselNext").classList.remove("last-page-button");
    }
})

var powellAvenueStreamPlantDesktopAndTablet = document.getElementById('powellAvenueStreamPlantCarousel')

powellAvenueStreamPlantDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('powellAvenueStreamPlantFirstSlide').classList;
    var cList2 = document.getElementById('powellAvenueStreamPlantLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("powellAvenueStreamPlantCarouselPrev").classList.add("last-page-button");
        document.getElementById("powellAvenueStreamPlantCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("powellAvenueStreamPlantCarouselPrev").classList.remove("last-page-button");
        document.getElementById("powellAvenueStreamPlantCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("powellAvenueStreamPlantCarouselPrev").classList.remove("last-page-button");
        document.getElementById("powellAvenueStreamPlantCarouselNext").classList.remove("last-page-button");
    }
})

var beaverHouseAndFarmDesktopAndTablet = document.getElementById('beaverHouseAndFarmCarousel')

beaverHouseAndFarmDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('beaverHouseAndFarmFirstSlide').classList;
    var cList2 = document.getElementById('beaverHouseAndFarmLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("beaverHouseAndFarmCarouselPrev").classList.add("last-page-button");
        document.getElementById("beaverHouseAndFarmCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("beaverHouseAndFarmCarouselPrev").classList.remove("last-page-button");
        document.getElementById("beaverHouseAndFarmCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("beaverHouseAndFarmCarouselPrev").classList.remove("last-page-button");
        document.getElementById("beaverHouseAndFarmCarouselNext").classList.remove("last-page-button");
    }
})

var reimagineTheNewYorkStateCanalsDesktopAndTablet = document.getElementById('reimagineTheNewYorkStateCanalsCarousel')

reimagineTheNewYorkStateCanalsDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('reimagineTheNewYorkStateCanalsFirstSlide').classList;
    var cList2 = document.getElementById('reimagineTheNewYorkStateCanalsLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselPrev").classList.add("last-page-button");
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselPrev").classList.remove("last-page-button");
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselPrev").classList.remove("last-page-button");
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselNext").classList.remove("last-page-button");
    }
})

var edJohnsonMemorialDesktopAndTablet = document.getElementById('edJohnsonMemorialCarousel')

edJohnsonMemorialDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('edJohnsonMemorialFirstSlide').classList;
    var cList2 = document.getElementById('edJohnsonMemorialLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("edJohnsonMemorialCarouselPrev").classList.add("last-page-button");
        document.getElementById("edJohnsonMemorialCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("edJohnsonMemorialCarouselPrev").classList.remove("last-page-button");
        document.getElementById("edJohnsonMemorialCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("edJohnsonMemorialCarouselPrev").classList.remove("last-page-button");
        document.getElementById("edJohnsonMemorialCarouselNext").classList.remove("last-page-button");
    }
})

var southeastSideStoryDesktopAndTablet = document.getElementById('southeastSideStoryCarousel')

southeastSideStoryDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('southeastSideStoryFirstSlide').classList;
    var cList2 = document.getElementById('southeastSideStoryLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("southeastSideStoryCarouselPrev").classList.add("last-page-button");
        document.getElementById("southeastSideStoryCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("southeastSideStoryCarouselPrev").classList.remove("last-page-button");
        document.getElementById("southeastSideStoryCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("southeastSideStoryCarouselPrev").classList.remove("last-page-button");
        document.getElementById("southeastSideStoryCarouselNext").classList.remove("last-page-button");
    }
})

var earthMovementAndPlayDesktopAndTablet = document.getElementById('earthMovementAndPlayCarousel')

earthMovementAndPlayDesktopAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('earthMovementAndPlayFirstSlide').classList;
    var cList2 = document.getElementById('earthMovementAndPlayLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("earthMovementAndPlayCarouselPrev").classList.add("last-page-button");
        document.getElementById("earthMovementAndPlayCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("earthMovementAndPlayCarouselPrev").classList.remove("last-page-button");
        document.getElementById("earthMovementAndPlayCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("earthMovementAndPlayCarouselPrev").classList.remove("last-page-button");
        document.getElementById("earthMovementAndPlayCarouselNext").classList.remove("last-page-button");
    }
})
//Mobile View
var AgaKhanGardenMobile = document.getElementById('agaKhanGardenCarouselMobile')

AgaKhanGardenMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('agaKhanGardenFirstSlideMobile').classList;
    var cList2 = document.getElementById('agaKhanGardenLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("agaKhanGardenCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("agaKhanGardenCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("agaKhanGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("agaKhanGardenCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("agaKhanGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("agaKhanGardenCarouselNextMobile").classList.remove("last-page-button");
    }
})

var GardenOfLightAtKingsCrossMobile = document.getElementById('gardenOfLightAtKingsCrossCarouselMobile')

GardenOfLightAtKingsCrossMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('gardenOfLightAtKingsCrossFirstSlideMobile').classList;
    var cList2 = document.getElementById('gardenOfLightAtKingsCrossLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("gardenOfLightAtKingsCrossCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("gardenOfLightAtKingsCrossCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("gardenOfLightAtKingsCrossCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("gardenOfLightAtKingsCrossCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("gardenOfLightAtKingsCrossCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("gardenOfLightAtKingsCrossCarouselNextMobile").classList.remove("last-page-button");
    }
})

var WoodHavenLibraryMobile = document.getElementById('woodHavenLibraryCarouselMobile')

WoodHavenLibraryMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('woodHavenLibraryFirstSlideMobile').classList;
    var cList2 = document.getElementById('woodHavenLibraryLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("woodHavenLibraryCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("woodHavenLibraryCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("woodHavenLibraryCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("woodHavenLibraryCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("woodHavenLibraryCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("woodHavenLibraryCarouselNextMobile").classList.remove("last-page-button");
    }
})

var hamptonHousePoolAndGardenMobile = document.getElementById('hamptonHousePoolAndGardenCarouselMobile')

hamptonHousePoolAndGardenMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('hamptonHousePoolAndGardenFirstSlideMobile').classList;
    var cList2 = document.getElementById('hamptonHousePoolAndGardenLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("hamptonHousePoolAndGardenCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("hamptonHousePoolAndGardenCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("hamptonHousePoolAndGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("hamptonHousePoolAndGardenCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("hamptonHousePoolAndGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("hamptonHousePoolAndGardenCarouselNextMobile").classList.remove("last-page-button");
    }
})

var southgateStudioPollinatorGardenMobile = document.getElementById('southgateStudioPollinatorGardenCarouselMobile')

southgateStudioPollinatorGardenMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('southgateStudioPollinatorGardenFirstSlideMobile').classList;
    var cList2 = document.getElementById('southgateStudioPollinatorGardenLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("southgateStudioPollinatorGardenCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("southgateStudioPollinatorGardenCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("southgateStudioPollinatorGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("southgateStudioPollinatorGardenCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("southgateStudioPollinatorGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("southgateStudioPollinatorGardenCarouselNextMobile").classList.remove("last-page-button");
    }
})

var richbellCottageGardenMobile = document.getElementById('richbellCottageGardenCarouselMobile')

richbellCottageGardenMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('richbellCottageGardenFirstSlideMobile').classList;
    var cList2 = document.getElementById('richbellCottageGardenLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("richbellCottageGardenCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("richbellCottageGardenCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("richbellCottageGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("richbellCottageGardenCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("richbellCottageGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("richbellCottageGardenCarouselNextMobile").classList.remove("last-page-button");
    }
})

var hilltopHouseAndGardenMobile = document.getElementById('hilltopHouseAndGardenCarouselMobile')

hilltopHouseAndGardenMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('hilltopHouseAndGardenFirstSlideMobile').classList;
    var cList2 = document.getElementById('hilltopHouseAndGardenLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("hilltopHouseAndGardenCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("hilltopHouseAndGardenCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("hilltopHouseAndGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("hilltopHouseAndGardenCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("hilltopHouseAndGardenCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("hilltopHouseAndGardenCarouselNextMobile").classList.remove("last-page-button");
    }
})

var enlightenmentStupaLandspaceMobile = document.getElementById('enlightenmentStupaLandspaceCarouselMobile')

enlightenmentStupaLandspaceMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('enlightenmentStupaLandspaceFirstSlideMobile').classList;
    var cList2 = document.getElementById('enlightenmentStupaLandspaceLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("enlightenmentStupaLandspaceCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("enlightenmentStupaLandspaceCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("enlightenmentStupaLandspaceCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("enlightenmentStupaLandspaceCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("enlightenmentStupaLandspaceCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("enlightenmentStupaLandspaceCarouselNextMobile").classList.remove("last-page-button");
    }
})

var memorialParkMobile = document.getElementById('memorialParkCarouselMobile')

memorialParkMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('memorialParkFirstSlideMobile').classList;
    var cList2 = document.getElementById('memorialParkLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("memorialParkCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("memorialParkCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("memorialParkCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("memorialParkCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("memorialParkCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("memorialParkCarouselNextMobile").classList.remove("last-page-button");
    }
})

var bokTowerGardensMobile = document.getElementById('bokTowerGardensCarouselMobile')

bokTowerGardensMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('bokTowerGardensFirstSlideMobile').classList;
    var cList2 = document.getElementById('bokTowerGardensLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("bokTowerGardensCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("bokTowerGardensCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("bokTowerGardensCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("bokTowerGardensCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("bokTowerGardensCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("bokTowerGardensCarouselNextMobile").classList.remove("last-page-button");
    }
})

var powellAvenueStreamPlantMobile = document.getElementById('powellAvenueStreamPlantCarouselMobile')

powellAvenueStreamPlantMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('powellAvenueStreamPlantFirstSlideMobile').classList;
    var cList2 = document.getElementById('powellAvenueStreamPlantLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("powellAvenueStreamPlantCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("powellAvenueStreamPlantCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("powellAvenueStreamPlantCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("powellAvenueStreamPlantCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("powellAvenueStreamPlantCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("powellAvenueStreamPlantCarouselNextMobile").classList.remove("last-page-button");
    }
})

var beaverHouseAndFarmMobile = document.getElementById('beaverHouseAndFarmCarouselMobile')

beaverHouseAndFarmMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('beaverHouseAndFarmFirstSlideMobile').classList;
    var cList2 = document.getElementById('beaverHouseAndFarmLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("beaverHouseAndFarmCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("beaverHouseAndFarmCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("beaverHouseAndFarmCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("beaverHouseAndFarmCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("beaverHouseAndFarmCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("beaverHouseAndFarmCarouselNextMobile").classList.remove("last-page-button");
    }
})

var reimagineTheNewYorkStateCanalsMobile = document.getElementById('reimagineTheNewYorkStateCanalsCarouselMobile')

reimagineTheNewYorkStateCanalsMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('reimagineTheNewYorkStateCanalsFirstSlideMobile').classList;
    var cList2 = document.getElementById('reimagineTheNewYorkStateCanalsLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("reimagineTheNewYorkStateCanalsCarouselNextMobile").classList.remove("last-page-button");
    }
})

var edJohnsonMemorialMobile = document.getElementById('edJohnsonMemorialCarouselMobile')

edJohnsonMemorialMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('edJohnsonMemorialFirstSlideMobile').classList;
    var cList2 = document.getElementById('edJohnsonMemorialLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("edJohnsonMemorialCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("edJohnsonMemorialCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("edJohnsonMemorialCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("edJohnsonMemorialCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("edJohnsonMemorialCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("edJohnsonMemorialCarouselNextMobile").classList.remove("last-page-button");
    }
})

var southeastSideStoryMobile = document.getElementById('southeastSideStoryCarouselMobile')

southeastSideStoryMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('southeastSideStoryFirstSlideMobile').classList;
    var cList2 = document.getElementById('southeastSideStoryLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("southeastSideStoryCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("southeastSideStoryCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("southeastSideStoryCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("southeastSideStoryCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("southeastSideStoryCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("southeastSideStoryCarouselNextMobile").classList.remove("last-page-button");
    }
})

var earthMovementAndPlayMobile = document.getElementById('earthMovementAndPlayCarouselMobile')

earthMovementAndPlayMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('earthMovementAndPlayFirstSlideMobile').classList;
    var cList2 = document.getElementById('earthMovementAndPlayLastSlideMobile').classList;
    if (cList1.contains('active')) {
        document.getElementById("earthMovementAndPlayCarouselPrevMobile").classList.add("last-page-button");
        document.getElementById("earthMovementAndPlayCarouselNextMobile").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("earthMovementAndPlayCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("earthMovementAndPlayCarouselNextMobile").classList.add("last-page-button");
    }else{
        document.getElementById("earthMovementAndPlayCarouselPrevMobile").classList.remove("last-page-button");
        document.getElementById("earthMovementAndPlayCarouselNextMobile").classList.remove("last-page-button");
    }
})
/* //#endregion Projects */

/* //#region Social Press and Media */

var PalettePlantsSliderDesktop = document.getElementById('meetingYouCarousel')

PalettePlantsSliderDesktop.addEventListener('slid.bs.carousel', function () {
    var pList1 = document.getElementById('meetingYouFirstSlide').classList;
    var pList2 = document.getElementById('meetingYouLastSlide').classList;
    if (pList1.contains('active')) {
        document.getElementById("meetingYouCarouselPrev").classList.add("last-page-button");
        document.getElementById("meetingYouCarouselNext").classList.remove("last-page-button");
    }else if(pList2.contains('active')){
        document.getElementById("meetingYouCarouselPrev").classList.remove("last-page-button");
        document.getElementById("meetingYouCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("meetingYouCarouselPrev").classList.remove("last-page-button");
        document.getElementById("meetingYouCarouselNext").classList.remove("last-page-button");
    }
})

var PalettePlantsSliderDesktop = document.getElementById('WeekThreeCarousel')

PalettePlantsSliderDesktop.addEventListener('slid.bs.carousel', function () {
    var pList1 = document.getElementById('WeekThreeFirstSlide').classList;
    var pList2 = document.getElementById('WeekThreeLastSlide').classList;
    if (pList1.contains('active')) {
        document.getElementById("WeekThreeCarouselPrev").classList.add("last-page-button");
        document.getElementById("WeekThreeCarouselNext").classList.remove("last-page-button");
    }else if(pList2.contains('active')){
        document.getElementById("WeekThreeCarouselPrev").classList.remove("last-page-button");
        document.getElementById("WeekThreeCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("WeekThreeCarouselPrev").classList.remove("last-page-button");
        document.getElementById("WeekThreeCarouselNext").classList.remove("last-page-button");
    }
})

var PalettePlantsSliderDesktop = document.getElementById('palletePlantsCarousel')

PalettePlantsSliderDesktop.addEventListener('slid.bs.carousel', function () {
    var pList1 = document.getElementById('palettePlantsFirstSlide').classList;
    var pList2 = document.getElementById('palettePlantsLastSlide').classList;
    if (pList1.contains('active')) {
        document.getElementById("palletePlantsCarouselPrev").classList.add("last-page-button");
        document.getElementById("palletePlantsCarouselNext").classList.remove("last-page-button");
    }else if(pList2.contains('active')){
        document.getElementById("palletePlantsCarouselPrev").classList.remove("last-page-button");
        document.getElementById("palletePlantsCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("palletePlantsCarouselPrev").classList.remove("last-page-button");
        document.getElementById("palletePlantsCarouselNext").classList.remove("last-page-button");
    }
})

var SocialPressSliderDesktop = document.getElementById('socialpressCarousel')

SocialPressSliderDesktop.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('socialpressFirstSlide').classList;
    var cList2 = document.getElementById('socialpressLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("socialpressCarouselPrev").classList.add("last-page-button");
        document.getElementById("socialpressCarouselNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("socialpressCarouselPrev").classList.remove("last-page-button");
        document.getElementById("socialpressCarouselNext").classList.add("last-page-button");
    }else{
        document.getElementById("socialpressCarouselPrev").classList.remove("last-page-button");
        document.getElementById("socialpressCarouselNext").classList.remove("last-page-button");
    }
})

var SocialPressSliderMobileAndTablet = document.getElementById('socialpressCarouselTabletAndMobile')

SocialPressSliderMobileAndTablet.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('socialpressTabletAndMobileFirstSlide').classList;
    var cList2 = document.getElementById('socialpressTabletAndMobileLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("socialpressCarouselTabletAndMobilePrev").classList.add("last-page-button");
        document.getElementById("socialpressCarouselTabletAndMobileNext").classList.remove("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("socialpressCarouselTabletAndMobilePrev").classList.remove("last-page-button");
        document.getElementById("socialpressCarouselTabletAndMobileNext").classList.add("last-page-button");
    }else{
        document.getElementById("socialpressCarouselTabletAndMobilePrev").classList.remove("last-page-button");
        document.getElementById("socialpressCarouselTabletAndMobileNext").classList.remove("last-page-button");
    }
})
/* //#endregion Social Press and Media */

/* //#endregion Resources */
var ResourcesSlider = document.getElementById('resroucesCarousel')

ResourcesSlider.addEventListener('slid.bs.carousel', function () {
    var cList2 = document.getElementById('slide2').classList;
    if (cList2.contains('active')) {
        document.getElementById("resroucesCarouselNext").classList.add("last-page-button");
        document.getElementById("resroucesCarouselPrev").classList.remove("last-page-button");
    }else{
        document.getElementById("resroucesCarouselNext").classList.remove("last-page-button");
        document.getElementById("resroucesCarouselPrev").classList.add("last-page-button");
    }
})

var ResourcesSliderTabletAndMobile = document.getElementById('resroucesCarouselTabletAndMobile')

ResourcesSliderTabletAndMobile.addEventListener('slid.bs.carousel', function () {
    var cList1 = document.getElementById('resourcesTabletAndMobileFirstSlide').classList;
    var cList2 = document.getElementById('resourcesTabletAndMobileLastSlide').classList;
    if (cList1.contains('active')) {
        document.getElementById("resroucesCarouselNextTabletAndMobile").classList.remove("last-page-button");
        document.getElementById("resroucesCarouselPrevTabletAndMobile").classList.add("last-page-button");
    }else if(cList2.contains('active')){
        document.getElementById("resroucesCarouselNextTabletAndMobile").classList.add("last-page-button");
        document.getElementById("resroucesCarouselPrevTabletAndMobile").classList.remove("last-page-button");
    }else{
        document.getElementById("resroucesCarouselNextTabletAndMobile").classList.remove("last-page-button");
        document.getElementById("resroucesCarouselPrevTabletAndMobile").classList.remove("last-page-button");
    }
})
/* //#endregion Resources */

//-- #endregion Carousel Controls
