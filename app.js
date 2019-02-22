console.log('Init app');



$(window).on('scroll', function () {
    let windowHeight = $(window).height()

    let pixs = $(document).scrollTop()
    console.log('scroll', pixs)
    if(pixs < 460){
        pixs = pixs / 20;
        $(".text").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" }) 
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
});



$(".see-portfolio").click(() => {
    console.log('click')
    $('.see-portfolio').addClass('clicked')
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top - 150},
        {
            duration: 1000
        });
});