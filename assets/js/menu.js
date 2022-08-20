// recuperar os elementos HTML (menu-btn + nav-menu) e jogar em duas variáveis.
// const menuBtn = document.querySelector('.menu-btn');
// const navMenu = document.querySelector('.nav-menu');
// menuBtn.addEventListener('click', () => {
//     navMenu.classList.toggle('mobile-menu');
// });
const navMenu = document.querySelector('.nav-menu');
document.addEventListener('click',function(e){
    if(e.target.classList.contains('menu-btn')||e.target.classList.contains('menu-item')){
        navMenu.classList.toggle('mobile-menu');
    }
})