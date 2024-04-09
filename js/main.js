// ------------------ Start use Strict ---------------------
const buttonNavbar = document.querySelectorAll('[data-navbar-button]');
const navbarMenu = document.querySelector('[data-navbar-menu]');
const overLay = document.querySelector('[data-overlay]');

for(let i = 0; i < buttonNavbar.length; i++){
    buttonNavbar[i].addEventListener('click', function(){
        navbarMenu.classList.toggle('active')
        overLay.classList.toggle('active')
    })
}
// ------------------ End use Strict ---------------------

// ------------------ Start use Sweber ---------------------
const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

});
// ------------------ End use Sweber ---------------------
