const footerYear = document.querySelector('.footer__year')
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
    
    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	navLinks.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const handleCurrentYear = () => {
    const year = new Date().getFullYear()
    footerYear.innerText = year
}

handleCurrentYear()

burgerBtn.addEventListener('click', handleNav)
xBtn.addEventListener('click', handleNav)