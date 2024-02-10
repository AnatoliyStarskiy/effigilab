anime({
    targets: '.preloader__logo-path',
    stroke: '#3C3B3B',
    strokeDashoffset: {
       value: [anime.setDashoffset, 0],
       delay: function(el, i) { return i * 250 },
       duration: 1000,
    },
    fill: {
        value: '#3C3B3B',
        delay: 1000,
        duration: 500,
    },
    easing: 'easeInOutSine',
});
anime({
    targets: '.preloader__logo-path-1',
    stroke: '#47ab08',
    strokeDashoffset: {
       value: [anime.setDashoffset, 0],
       delay: function(el, i) { return i * 250 },
       duration: 2000,
    },
    fill: {
        value: '#3C3B3B',
        delay: 2500,
        duration: 500,
    },
    easing: 'easeInOutSine',
});
anime({
    targets: '.preloader__logo-item',
    fill: {
        value: '#3C3B3B',
        duration: 250,
        delay: function(el, i) { return i * 150 },
    },
    easing: 'easeInOutSine',
});
//
window.addEventListener('load', function() {
    setTimeout(
        function tick() {
            $(".preloader").addClass('_start');
        },3250
    );
    setTimeout(
        function tick() {
            $(".preloader").addClass('_end');
            $('body').removeClass('_overflow');
        },3750
    );
    setTimeout(
        function tick() {
            $(".preloader").hide(0);
            new WOW().init();
        },4250
    );
});

document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(
        function tick() {
            $(".preloader__close").fadeIn(250);
            $(".preloader__close").click(function(){
                $(".preloader").fadeOut(250);
                new WOW().init();
            });
            $('body').removeClass('_overflow');
        },100
    );
});




const onLoad = (e) => {
  e.preventDefault();

  setTimeout(() => window.location.replace(e.target.href), 1000)
}