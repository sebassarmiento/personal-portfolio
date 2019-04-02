document.getElementById('see-work').onclick = e => {
    window.scrollTo({
        top: 850,
        behavior: 'smooth'
    })
}

document.getElementById('scroll-to-projects').onclick = e => {
    window.scrollTo({
        top: 850,
        behavior: 'smooth'
    })
}


window.onscroll = () => {
    let windowHeight = window.innerHeight

    let scrollTop = document.documentElement.scrollTop

    if (scrollTop < windowHeight) {
        scrollTop /= 10;
        document.getElementById('intro').style.webkitFilter = `blur(${scrollTop / 5}px)`
        document.getElementById('intro').style.filter = `blur(${scrollTop / 5}px)`
    }

    let maxScroll = document.body.scrollHeight

    scrollTop = document.documentElement.scrollTop
    console.log(scrollTop)


    if (scrollTop > windowHeight - 200) {
        document.getElementById('navbar').classList.add('scrolled')
        document.querySelector('.phone-img-1').style.webkitTransform = `translateY(${scrollTop / 4}px)`
        document.querySelector('.phone-img-1').style.transform = `translateY(${scrollTop / 4}px)`
    } else {
        document.getElementById('navbar').classList.remove('scrolled')
    }

    if(scrollTop > windowHeight){
        document.getElementById('be-info').classList.add('show-info')
    }

    if(scrollTop > windowHeight + 700){
        document.getElementById('mowser-info').classList.add('show-info')
    }

    if(scrollTop > windowHeight + 1300){
        document.getElementById('twitter-info').classList.add('show-info')
    }



}

let portfolioOffsetTop = document.querySelector('.portfolio').offsetTop


let mobileMenu = document.getElementById('mb-menu')

mobileMenu.onclick = () => {
    if(mobileMenu.classList.contains('mb-open')){
        mobileMenu.classList.remove('mb-open')
        mobileMenu.classList.add('mb-closed')
        document.getElementById('navbar').classList.remove('mb-open')
    } else {
        mobileMenu.classList.remove('mb-closed')
        mobileMenu.classList.add('mb-open')
        document.getElementById('navbar').classList.add('mb-open')
    }
}

let contactForm = document.getElementById('contact-form')


contactForm.onsubmit = e => {
    e.preventDefault()
    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        message = document.getElementById('message').value
    if(name.length > 1 && email.length > 1 && message.length > 1){
        console.log('Valid form')
        fetch('https://localhost:3000/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        })
        .then(d => d.json())
        .then(res => {
            console.log(res)
        })
    } else {
        console.log('Invalid form')
    }
}