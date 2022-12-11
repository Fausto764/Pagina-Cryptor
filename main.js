//nav

hamburguer  = document.querySelector('.hamburger');
hamburguer.onclick = function(){
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}




//slider

const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[slider-Selection.length -1];

const btnLeft = document.querySelector('#button-left');
const btnRight = document.querySelector('#button-right');

function next (){
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.style.marginLeft="-200%";
    slider.style.transition = "all 0.5s";
    setTimeout( ()=>{
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);

}
function prev(){
    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft="0";
    slider.style.transition = "all 0.5s";
    setTimeout( ()=>{
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
}
btnRight.addEventListener('click', next);
btnLeft.addEventListener('click', prev);

//scroll effect

const altoPantalla = window.innerHeight;
const anchoPantalla = window.innerWidth;
// let scrollDown = getBoundingClientRect().top;
let header = document.querySelector('header');
navTexts = document.querySelectorAll('.nav-texts');



    addEventListener('scroll', ()=>{
        let scrollY = window.scrollY;
        if (scrollY != 0 && anchoPantalla > 800){
                header.style.height="60px"
                navTexts.forEach((i)=>{
                    i.style.fontSize="17px";
                })
            }
        else{
            header.style.height="80px"
            
        }
})


