let windowHeight = window.innerHeight

let myScrollTo = val => {

    if(document.documentElement.scrollTop < val){
        let interval = setInterval(() => {
            document.documentElement.scrollTop += 10
            if(document.documentElement.scrollTop > val){
                clearInterval(interval)
            }
        }, 5)
    } else {
        let interval = setInterval(() => {
            document.documentElement.scrollTop -= 10
            if(document.documentElement.scrollTop < val){
                clearInterval(interval)
            }
        }, 5)
    }

}

document.getElementById('see-work').onclick = e => {
    myScrollTo(windowHeight + 125)
}

document.getElementById('scroll-to-projects').onclick = e => {
    myScrollTo(windowHeight + 125)
}


window.addEventListener('scroll', () => {
    let windowHeight = window.innerHeight

    let scrollTop = window.pageYOffset

    if (scrollTop < windowHeight - 200) {
        scrollTop /= 10;
        document.getElementById('intro').style.webkitFilter = `blur(${scrollTop / 5}px)`
        document.getElementById('intro').style.filter = `blur(${scrollTop / 5}px)`
    }

    if (scrollTop > windowHeight - 200) {
        document.getElementById('navbar').classList.add('scrolled')
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



})

let portfolioOffsetTop = document.querySelector('.portfolio').offsetTop


let mobileMenu = document.getElementById('mb-menu')

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

let contactForm = document.getElementById('contact-form')


let clearForm = () => {
    document.getElementById('send-btn').innerHTML = 'Send <i class="fas fa-paper-plane"></i>'
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''
    document.getElementById('contact-result-bg').classList.add('contact-result-bg')
}

let showError = () => {
    clearForm()
    document.getElementById('error-text').classList.add('show-error-text')
}

let showSuccess = () => {
    clearForm()
    document.getElementById('success-text').classList.add('show-success-text')
}

let sending = false

contactForm.onsubmit = e => {
    e.preventDefault()
    let name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        message = document.getElementById('message').value

    if (name.length > 1 && email.length > 1 && message.length > 1 && !sending) {
        console.log('Valid form')

        sending = true
        
        document.getElementById('send-btn').classList.add('disabled-btn')
        document.getElementById('send-btn').innerHTML = '<span class="loading" ></span>'

        fetch('https://sarmientosebastianapi.herokuapp.com/email', {
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
                document.getElementById('send-btn').classList.remove('disabled-btn')
                sending = false
                console.log(res)
                if (res.success) {
                    showSuccess()
                } else {
                    showError()
                }
            })
            .catch(err => {
                document.getElementById('send-btn').classList.remove('disabled-btn')
                sending = false
                showError()
            })
    } else {
        console.log('Invalid form')
    }
}


document.getElementById('success-close').onclick = e => {
    document.getElementById('contact-result-bg').classList.remove('contact-result-bg')
    document.getElementById('success-text').classList.remove('show-success-text')
}

document.getElementById('error-close').onclick = e => {
    document.getElementById('contact-result-bg').classList.remove('contact-result-bg')
    document.getElementById('error-text').classList.remove('show-error-text')
}