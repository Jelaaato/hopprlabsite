
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
sr.reveal('.web', { duration: 500, delay: 650 });
sr.reveal('.mobile', { duration: 500, delay: 650 });
sr.reveal('.analytics', { duration: 500, delay: 850 });
sr.reveal('.iot', { duration: 500, delay: 850 });
sr.reveal('.ttle', { duration: 500, delay: 350 });
sr.reveal('.descri', { duration: 500, delay: 550 });