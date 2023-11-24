//nav
    let hamburguer  = document.querySelector('.hamburger');
    let navBar = document.querySelector('.nav-bar');
    hamburguer.onclick = function(){
        navBar.classList.toggle('active');
    }



//slider 1 

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
    let navTexts = document.querySelectorAll('.nav-texts');
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

// slider 2



const slider2 = document.querySelector('.section-sticky-container');
let sliderSection2 = document.querySelectorAll('.sticky-item');
let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];

const btnLeft2 = document.querySelector('.btn3');
const btnRight2 = document.querySelector('.btn4');

function next2 (){
    let sliderSectionFirst2 = document.querySelectorAll('.sticky-item')[0];
    slider2.style.marginLeft="-100%";
    slider2.style.transition = "all 0.5s";
    setTimeout( ()=>{
        slider2.style.transition="none";
        slider2.insertAdjacentElement('beforeend', sliderSectionFirst2);
        slider2.style.marginLeft = "-50%";
    },500);

}
function prev2(){
    let sliderSection2 = document.querySelectorAll('.sticky-item');
    let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
    slider2.style.marginLeft="0";
    slider2.style.transition = "all 0.5s";
    setTimeout( ()=>{
        slider2.style.transition="none";
        slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);
        slider2.style.marginLeft = "-50%";
    },500);
}
btnRight.addEventListener('click', next);
btnLeft.addEventListener('click', prev);

btnRight2.addEventListener('click', next2);
btnLeft2.addEventListener('click', prev2);
