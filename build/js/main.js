const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburgerBtn.addEventListener('click', toggleMobileMenu)
    mobileMenu.addEventListener('click', toggleMobileMenu)

}

document.addEventListener('DOMContentLoaded', initApp)
