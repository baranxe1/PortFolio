//import * as ___ from '___;
// Gestion du header au scroll
window.addEventListener('scroll', (e)=>{
    let header = document.querySelector('.header');
    let header_arrow = document.querySelector('.header-arrow');
    let header_burger = document.querySelector('.header-burger');
    header.classList.toggle('sticky', window.scrollY > 0);
    header_arrow.classList.toggle('arrow-hide', window.scrollY > 0);
    header_burger.classList.toggle('burger-show', window.scrollY > 0);
})
// Le rond qui suit le souris
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mouseover', (e)=>{
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px";
});
//



