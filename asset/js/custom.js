$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');


    // start section 2 wheel slider
    
    var owl = $('.section2SliderActive');
owl.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    smartSpeed: 1000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    responsive:{
        0:{
            items:1,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
        },
        600:{
            items:1
        },            
        960:{
            items:1
        },
        1200:{
            items:1
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
//Firefox:
owl.on('DOMMouseScroll','.owl-stage',function(e){
    if (e.originalEvent.detail > 0){ 
        owl.trigger('next.owl');
        } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
    });

//Chrome, IE
owl.on('mousewheel','.owl-stage',function(e){
    if (e.originalEvent.wheelDelta > 0){
        owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
    }
    e.preventDefault();
});

owl.on('translate.owl.carousel', function (event) {
    $('.section2SliderItem h4').removeClass('animate__animated animate__fadeInDown').css("opacity","0");
})
owl.on('translated.owl.carousel', function (event) {
    $('.section2SliderItem h4').addClass('animate__animated animate__fadeInDown').css("opacity","1");
})








    
});