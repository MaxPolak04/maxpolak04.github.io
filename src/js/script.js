const burgerBtn = document.querySelector('.nav__btn-burger')
const xBtn = document.querySelector('.nav__btn-x')
const navMobile = document.querySelector('.nav__mobile')
const navLinks = document.querySelectorAll('.nav__mobile-link')

const handleNav = () => {
    navMobile.classList.toggle('nav__mobile--active')

    navLinks.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav__mobile--active')
        })
    })
}

burgerBtn.addEventListener('click', handleNav)
xBtn.addEventListener('click', handleNav)