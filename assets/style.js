// mobile menu
var burgerIcon = document.querySelector('#burger');
var navbarMenu = document.querySelector('#nav-links');


burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});


// $(document).ready(function(){
//     $('.your-class').slick({
//         setting-: setting-value
//     });
// });