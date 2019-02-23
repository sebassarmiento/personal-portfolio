console.log('Init app');



$(window).on('scroll', function () {
    let windowHeight = $(window).height()

    let pixs = $(document).scrollTop()
    console.log('scroll', pixs)
    if(pixs < 460){
        pixs = pixs / 50;
        $(".text").css({
            "-webkit-filter": `blur(${pixs}px)`,
            "filter": `blur(${pixs}px)`, 
            "transform": `translateY(${pixs * 10}px)` 
        }) 
    }

    console.log('HEIGHT', windowHeight)
    
    if(pixs > (windowHeight + 94)){
        $('.portfolio-title').css({ "font-size": '16px' })
    } else {
        $('.portfolio-title').css({ "font-size": '2em' })
    }

    var maxScroll = $("body")[0].scrollHeight;

    if(pixs > maxScroll - 730){
        $('.contact-title').css({ "font-size": '16px' })
    } else {
        $('.contact-title').css({ "font-size": '2em' })
    }

    if(pixs > windowHeight - 100 && pixs < windowHeight * 2){
        $('.phone-img-1').css({ transform: `translateY(${pixs / -4}px)` })
    }

    if(pixs > (windowHeight * 2) + 0){
        $('.phone-img-2').css({ transform: `translateY(${pixs / -10}px)` })
    }



});



$(".see-portfolio").click(() => {
    console.log('click')
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top + 300},
        {
            duration: 1000
        });
});