// Animation du debut

window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    .add(() => {
        document.querySelector('html').style.overflowY = 'hidden';
    })
    .to('.images-container', {height: 400, duration: 1.3, delay: 0.4, ease: 'power2.out'})
    .to('.bloc-txt', {height: 'auto', duration: 0.6, ease: 'power2.out'}, '-=0.8')
    .to('.bloc-txt h2', {y: 0, ease: 'power2.out'}, '-=0.6')

    .to('.f2', {y: 0, duration: 0.7, ease: 'power2.out'})
    .to('.f2 h2', {y: 0, ease: 'power2.out'}, '-=0.2')
    .add(() => {
        document.querySelector('.bloc-txt').style.background = "#fff";
        document.querySelector('.bloc-txt h2').style.color = "#222";
    })
    .to('.f2', {y: '-100%'})

    .to('.load-container', {opacity: 0, duration: 0.8, delay: 0.7})
    .add(() => {
        document.querySelector('.load-container').style.display = "none";
    })
    .add(() => {
        document.querySelector('html').style.overflowY = 'scroll';
    })
}

//

//

const textAnim = document.querySelector('h1');

new Typewriter(textAnim, {
    loop: true,
    //deleteSpeed: 20 // Vitesse a laquelle le text s'efface
})
//.changeDelay(20) 
.typeString("Hey moi c'est LN,")
.pauseFor(1000)
.typeString('<span style="color: #eb0404"> Dev FrontEnd.</span>')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #04eb51"> Passioné de la programmation.</span>')
.pauseFor(1000)
.deleteChars(30)
.typeString('<span style="color: #04ebdf"> Gamer PES.</span>')
.pauseFor(1000)
.deleteChars(10)
.typeString('<span style="color: #edf104"> super social :).</span>')
.pauseFor(10000)
.start()

//

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




