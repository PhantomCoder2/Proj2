const reveal = document.querySelector('.reveal');
const hide = document.querySelector('.hide');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c4 = document.querySelector('.c4');
/*
window.addEventListener('resize',e=>{
    var screenWidth = window.innerWidth;
    if(screenWidth<768){
      reveal.classList.remove('d-none');
      hide.classList.add('d-none');
    }else if(screenWidth>768){
        reveal.classList.add('d-none');
        hide.classList.remove('d-none');
    }
});*/
let widthMatch = window.matchMedia("(max-width: 768px)");

widthMatch.addEventListener('change', e=> {
    if (e.matches) {
      reveal.classList.remove('d-none');
      hide.classList.add('d-none');
    }
    else {
      reveal.classList.add('d-none');
      hide.classList.remove('d-none');
    }
});
window.addEventListener('scroll',e=>{
  c1.classList.add('animated','fadeInUp','delay-1s');
  c2.classList.add('animated','fadeInUp','delay-1.5s');
  c3.classList.add('animated','fadeInUp','delay-2s');
  c4.classList.add('animated','fadeInUp','delay-2.5s');
});

