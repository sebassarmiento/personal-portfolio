
window.onscroll = () => {
    let windowHeight = window.innerHeight

    let scrollTop = document.documentElement.scrollTop

    if (scrollTop < 460) {
        scrollTop /= 10;
        document.getElementById('introtext').style.filter = `blur(${scrollTop}px)`
    }


    if (scrollTop > (windowHeight + 60)) {
        document.querySelector('.portfolio-title').classList.add('scrolled-title')
        setTimeout(() => {
            document.querySelector('.project-title').classList.add('test')
        })
    } else {
        document.querySelector('.portfolio-title').classList.remove('scrolled-title')
        document.querySelector('.project-title').classList.remove('test')
    }

    let maxScroll = document.body.scrollHeight

    if (scrollTop > maxScroll - (windowHeight + 200)) {
        document.querySelector('.contact-title').classList.add('scrolled-title')
    } else {
        document.querySelector('.contact-title').classList.remove('scrolled-title')
    }


    if (scrollTop > windowHeight - 100 && scrollTop < windowHeight * 3) {
        document.querySelector('.phone-img-1').style.transform = `translateY(${scrollTop / -4}px)`
    }

}

let portfolioOffsetTop = document.querySelector('.portfolio').offsetTop

document.querySelector('.see-portfolio').onclick = () => {
    window.scrollTo({
        top: portfolioOffsetTop + 260,
        behavior: 'smooth'
    })
}
