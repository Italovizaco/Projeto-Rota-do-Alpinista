window.addEventListener('scroll',()=>{
    const header = document.querySelector('.nav-bar');
    header.classList.toggle('active-scroll', window.scrollY > 500);
})