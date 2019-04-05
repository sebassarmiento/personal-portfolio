document.getElementById('see-work').onclick = e => {
    window.scrollTo({
        top: 850,
        behavior: 'smooth'
    })
}

document.getElementById('scroll-to-projects').onclick = e => {
    console.log(document.getElementById('portfolio').getBoundingClientRect(), 'ACAAA')
    var scrollAmount = document.getElementById('portfolio').getBoundingClientRect().top
    window.scrollTo({
        top: document.getElementById('portfolio').offsetTop - 50,
        behavior: 'smooth'
    })
}


window.onscroll = () => {
    var windowHeight = window.innerHeight

    var scrollTop = document.documentElement.scrollTop

    if (scrollTop < windowHeight) {
        scrollTop /= 10;
        document.getElementById('intro').style.webkitFilter = `blur(${scrollTop / 5}px)`
        document.getElementById('intro').style.filter = `blur(${scrollTop / 5}px)`
    }

    var maxScroll = document.body.scrollHeight

    scrollTop = document.documentElement.scrollTop


    if (scrollTop > windowHeight - 200) {
        document.getElementById('navbar').classList.add('scrolled')
        document.querySelector('.phone-img-1').style.webkitTransform = `translateY(${scrollTop / 4}px)`
        document.querySelector('.phone-img-1').style.transform = `translateY(${scrollTop / 4}px)`
    } else {
        document.getElementById('navbar').classList.remove('scrolled')
    }

    if (scrollTop > windowHeight) {
        document.getElementById('be-info').classList.add('show-info')
    }

    if (scrollTop > windowHeight + 700) {
        document.getElementById('mowser-info').classList.add('show-info')
    }

    if (scrollTop > windowHeight + 1300) {
        document.getElementById('twitter-info').classList.add('show-info')
    }



}

var portfolioOffsetTop = document.querySelector('.portfolio').offsetTop


var mobileMenu = document.getElementById('mb-menu')

mobileMenu.onclick = () => {
    if (mobileMenu.classList.contains('mb-open')) {
        mobileMenu.classList.remove('mb-open')
        mobileMenu.classList.add('mb-closed')
        document.getElementById('navbar').classList.remove('mb-open')
    } else {
        mobileMenu.classList.remove('mb-closed')
        mobileMenu.classList.add('mb-open')
        document.getElementById('navbar').classList.add('mb-open')
    }
}

var contactForm = document.getElementById('contact-form')


contactForm.onsubmit = e => {
    e.preventDefault()
    var name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        message = document.getElementById('message').value

    console.log(name, email, message)
    if (name.length > 1 && email.length > 1 && message.length > 1) {
        console.log('Valid form')

        document.getElementById('send-btn').innerHTML = '<span class="loading" ></span>'

        fetch('http://localhost:3000/email', {
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
                if (res.success) {
                    setTimeout(() => {
                        document.getElementById('send-btn').innerHTML = 'Send <i class="fas fa-paper-plane"></i>'
                        document.getElementById('name').value = ''
                        document.getElementById('email').value = ''
                        document.getElementById('message').value = ''
                        document.getElementById('success-contact').classList.add('show-success')
                        document.getElementById('success-text').classList.add('show-success-text')
                        document.getElementById('success-contact').classList.remove('hide-success')
                        document.getElementById('success-text').classList.remove('hide-success-text')
                    }, 2000)
                }
            })
    } else {
        console.log('Invalid form')
    }
}


document.getElementById('success-close').onclick = e => {
    document.getElementById('success-text').classList.add('hide-success-text')
    document.getElementById('success-contact').classList.add('hide-success')
}