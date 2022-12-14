//NAV
let hamburguer  = document.querySelector('.hamburger');
let navBar = document.querySelector('.nav-bar');
hamburguer.onclick = function(){
    navBar.classList.toggle('active');
}



//SCROLL EFFECT
    // const altoPantalla = window.innerHeight;
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

//scroll appear

let pElement = document.querySelector('.p-appear');
let pTop =  pElement.getBoundingClientRect().top;
console.log(pTop);

addEventListener('scroll', ()=>{
    if( pTop >= 320){
        pElement.style.opacity="1";
        pElement.style.margin="0";
    }
    else{
        console.log("no se pudo")
    }
})