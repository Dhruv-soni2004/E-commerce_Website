// Dhruv Soni

$(document).ready(function () {
    // About Section
    $('.about-part1').waypoint(function (direction) {
        $('.about-part1').addClass('animate__animated animate__zoomIn')
    }, {
        offset: '80%'
    });

    $('.about-part2').waypoint(function (direction) {
        $('.adobe-pro').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '80%'
    });

    $('.about-part2').waypoint(function (direction) {
        $('.ui-pro').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '70%'
    });

    $('.about-part2').waypoint(function (direction) {
        $('.word-pro').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '60%'
    });

    $('.about-part2').waypoint(function (direction) {
        $('.graph-pro').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '50%'
    });


    //Our Services
    $('.our-services').waypoint(function () {
        $('.our-services').addClass('animate__animated animate__slideInLeft')
    }, {
        offset: '80%'
    });

    $('.webDev').waypoint(function () {
        $('.webDev').addClass('animate__animated animate__slideInUp')
    }, {
        offset: '80%'
    });

    $('.appDev').waypoint(function () {
        $('.appDev').addClass('animate__animated animate__slideInDown')
    }, {
        offset: '80%'
    });

    $('.digiMark').waypoint(function () {
        $('.digiMark').addClass('animate__animated animate__slideInUp')
    }, {
        offset: '80%'
    });

    $('.graphDesi').waypoint(function () {
        $('.graphDesi').addClass('animate__animated animate__slideInDown')
    }, {
        offset: '80%'
    });


    //Our Team Section
    $('.our-team-head').waypoint(function () {
        $('.our-team-head').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '80%'
    });

    $('.image').waypoint(function () {
        $('.image').addClass('animate__animated animate__fadeInDown')
    }, {
        offset: '80%'
    });

    $('.name').waypoint(function () {
        $('.name').addClass('animate__animated animate__fadeInDown')
    }, {
        offset: '80%'
    });

    $('.post').waypoint(function () {
        $('.post').addClass('animate__animated animate__slideInLeft')
    }, {
        offset: '80%'
    });

    $('.info').waypoint(function () {
        $('.info').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '80%'
    });


    //Promo Section
    $('#web-hosting').waypoint(function () {
        $('#web-hosting').addClass('animate__animated animate__bounceInLeft')
    }, {
        offset: '80%'
    });

    $('.contact-a').waypoint(function () {
        $('.contact-a').addClass('animate__animated animate__bounceIn')
    }, {
        offset: '80%'
    });


    //Price Plan Section
    $('.prices').waypoint(function () {
        $('.prices').addClass('animate__animated animate__slideInLeft')
    }, {
        offset: '80%'
    });

    $('.flip-price').waypoint(function () {
        $('.flip-price').addClass('animate__animated animate__flipInY')
    }, {
        offset: '80%'
    });


    //Testimonials Section
    $('.testi-head').waypoint(function () {
        $('.testi-head').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '80%'
    });

    $('.testi-para').waypoint(function () {
        $('.testi-para').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '80%'
    });

    $('.man3-testi-img').waypoint(function () {
        $('.man3-testi-img').addClass('animate__animated animate__rotateInDownLeft')
    }, {
        offset: '80%'
    });

    $('.woman1-testi-img').waypoint(function () {
        $('.woman1-testi-img').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '80%'
    });

    $('.man2-testi-img').waypoint(function () {
        $('.man2-testi-img').addClass('animate__animated animate__rotateInDownRight')
    }, {
        offset: '80%'
    });


    //Get In Touch Section
    $('.contact-head').waypoint(function () {
        $('.contact-head').addClass('animate__animated animate__slideInLeft')
    }, {
        offset: '90%'
    });

    $('.text-input').waypoint(function () {
        $('.text-input').addClass('animate__animated animate__slideInLeft')
    }, {
        offset: '80%'
    });

    $('.number-input').waypoint(function () {
        $('.number-input').addClass('animate__animated animate__slideInLeft')
    }, {
        offset: '70%'
    });

    $('.email-input').waypoint(function () {
        $('.email-input').addClass('animate__animated animate__slideInLeft')
    }, {
        offset: '60%'
    });

    $('.text-area-input').waypoint(function () {
        $('.text-area-input').addClass('animate__animated animate__slideInLeft')
    }, {
        offset: '55%'
    });

    $('.myAddress').waypoint(function () {
        $('.myAddress').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '80%'
    });

    $('.myPhone').waypoint(function () {
        $('.myPhone').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '75%'
    });

    $('.myEmail').waypoint(function () {
        $('.myEmail').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '70%'
    });

    $('.myLinks').waypoint(function () {
        $('.myLinks').addClass('animate__animated animate__slideInRight')
    }, {
        offset: '65%'
    });


    //Footer Section
    $('.about-sec').waypoint(function () {
        $('.about-sec').addClass('animate__animated animate__fadeInLeft')
    }, {
        offset: '100%'
    });

    $('.social-sec').waypoint(function () {
        $('.social-sec').addClass('animate__animated animate__fadeInRight')
    }, {
        offset: '100%'
    });
});