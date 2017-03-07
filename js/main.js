//$('.gallery').click(function() {
//  $('.gallery').addClass('popout').fadeIn(10000);
//}
//)

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        stagePadding: 20,
        loop: true,
        center: true,
        nav: true,
        /*navText: ["Previous", "Next"]*/
        dotsEach: true,

        responsive: {
            0: {
                items: 1

            },
            640: {
                items: 3

            },
            768: {
                items: 3
            },

            992: {
                items: 3,
            },

            1200: {
                items: 3,
            }
        }
    })
});
