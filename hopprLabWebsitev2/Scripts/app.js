
//sidebar
function openSidebar() {
    document.getElementById("sidebar").style.width = "100%";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

//slick carousel
$(document).ready(function () {
    var slickSettings = {
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    };

    $('#slider').slick(slickSettings);
});


//scroll reveal
window.sr = ScrollReveal();
sr.reveal('.web', { duration: 1500, delay: 650, origin: 'bottom', distance: '100px'});
sr.reveal('.mobile', { duration: 1500, delay: 650, origin: 'bottom', distance: '100px' });
sr.reveal('.analytics', { duration: 1500, delay: 650, origin: 'bottom', distance: '100px' });
sr.reveal('.iot', { duration: 1500, delay: 650, origin: 'bottom', distance: '100px' });
sr.reveal('.ttle', { duration: 1000, delay: 350, origin: 'bottom', distance: '20px' });
sr.reveal('.descri', { duration: 1000, delay: 350, origin: 'bottom', distance: '20px' });

$(document).ready(function () {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

    $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}