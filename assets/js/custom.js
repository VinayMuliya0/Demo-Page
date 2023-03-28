// Scroll Animation
new WOW().init();
$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('sticky');
        $('header nav').removeClass('fadeOutUp');
        $('header nav').addClass('fadeInDown');
        $('header nav').addClass('animated');
    } else {
        $('header').removeClass('sticky');
        $('header nav').removeClass('fadeInDown');
        $('header nav').addClass('fadeOutUp');
        $('header nav').removeClass('animated');
    }

    // Top arrow
    if ($(this).scrollTop() > 100) {
        $('.top_arrow').addClass('show');
    } else {
        $('.top_arrow').removeClass('show');
    }

});


// Scroll on top
$('.top_arrow').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 'fast');
    return false;
});

$(document).ready(function () {
    // Banner Slider
    $('.banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        // appendDots: $('.slider-dots'),
        prevArrow: `<a href="javascript:void(0)" class="arrow left"><i class="fa-solid fa-chevron-left"></i></a>`,
        nextArrow: `<a href="javascript:void(0)" class="arrow right"><i class="fa-solid fa-chevron-right"></i></a>`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    // arrows:false
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: false
                }
            }
        ]
    });



});
$(document).ready(function () {
    // Scroll to the section
    var scrollTrigger = $("*[scroll-trigger]");
    scrollTrigger.bind('click', function (e) {
        e.preventDefault();
        var _this = $(this);
        var triggerAttr = _this.attr('scroll-trigger');
        var scrollTarget = $('*[scroll-target=' + triggerAttr + ']');

        $('html, body').stop().animate({
            scrollTop: scrollTarget.offset().top - 100
        }, 100);
        return false;
    });

    const myAnchor = document.querySelectorAll("[scroll-trigger]");
    myAnchor.forEach(function (i) {
        i.addEventListener("click", function (e) {
            myAnchor.forEach(function (ps) {
                ps.classList.remove('active')
            })
            e.preventDefault();
            i.classList.add('active')
            let targetElem = document.querySelector(e.target.getAttribute("href")).offsetTop;
            window.scrollTo(0, targetElem - 100);
        });
    });

    function scrollToAccept() {
        const terms = document.querySelectorAll("[scroll-target]");
        window.addEventListener("mousewheel", function () {
            terms.forEach(function (alcs) {
                alcs.classList.remove('active')
            })
            terms.forEach(function (ws) {
                if (window.scrollY + 200 >= ws.offsetTop && window.scrollY + 200 < ws.offsetTop + ws.clientHeight) {
                    ws.classList.add('active');
                    const getIds = ws.getAttribute('scroll-target');
                    const bass = document.querySelectorAll('[scroll-trigger]')
                    bass.forEach(function (ss) {
                        ss.classList.remove('active')
                        if (ss.getAttribute('scroll-trigger') == getIds) {
                            ss.classList.add('active')
                        }
                    })
                }
            });
        })
    }
    scrollToAccept()


    var $videoSrc;
    $('.play-btn').click(function () {
        $videoSrc = $(this).data("src");
    });

    // stop playing the youtube video when I close the modal
    $('#modalVideo').on('hide.bs.modal', function (e) {
        $(".f-video").attr('src', $videoSrc);
    })


});
