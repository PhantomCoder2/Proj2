const reveal = document.querySelector('.reveal');
const hide = document.querySelector('.hide');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c4 = document.querySelector('.c4');

window.addEventListener('scroll',e=>{
  c1.classList.add('animated','fadeInUp','delay-1s');
  c2.classList.add('animated','fadeInUp','delay-2s');
  c3.classList.add('animated','fadeInUp','delay-2s');
  c4.classList.add('animated','fadeInUp','delay-3s');
});

