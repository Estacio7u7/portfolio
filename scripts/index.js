const iconMobileMenu = document.querySelector('.show-mobile-menu')
const mobileMenu = document.querySelector('.mobile-menu');

iconMobileMenu.addEventListener('click', toggleVisualization);

function toggleVisualization() {
    mobileMenu.classList.toggle('non-visible');
    console.log('togling');
}