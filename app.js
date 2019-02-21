console.log('Init app');

$(window).scroll(() => {
    let scrollTop = $(window).scrollTop()
    if(scrollTop > 0){
        $('.navbar').addClass('scrolled')
    } else {
        $('.navbar').removeClass('scrolled')
    }
})