const form =document.querySelector('#form');
const buttonMailTo = document.querySelector('#sendmailbut');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    buttonMailTo.setAttribute('href', `mailto:faustogarcia1357@gmail.com?subject= Nombre Completo: ${formData.get('name')}  &body=${formData.get('message')}`)
    buttonMailTo.click();
})


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

//nav
let hamburguer  = document.querySelector('.hamburger');
let navBar = document.querySelector('.nav-bar');
hamburguer.onclick = function(){
    navBar.classList.toggle('active');
}


