const navbar_toggle = document.querySelector('.navbar_toggle');
const navbar_menu = document.querySelector('.navbar_menu');

navbar_toggle.addEventListener('click', ()=>{
    navbar_menu.classList.toggle('active');
});