/* Nav Menu Open-Close */
const menu = document.querySelector('.js-menu');
const open_icon = document.querySelector('.js-menu-open');
const close_icon = document.querySelector('.js-menu-close');

open_icon.addEventListener('click', function() {
    menu.classList.add('open');
});

close_icon.addEventListener('click', function() {
    menu.classList.remove('open');
});

/* fslightbox gallery */
var lightbox = new FsLightbox();
