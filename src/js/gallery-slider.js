 const images = document.querySelectorAll('.gallery__slider .gallery__slider-line img');
 const sliderLine = document.querySelector('.gallery__slider-line');

 let count = 0;
 let width;

 function init(){
    console.log('resize');
    width = document.querySelector('.gallery__slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';

    images.forEach( item => {
        item.style.width = width + 'px';
        item.style.hight = 'auto';
    })
    rollslider();
 }
window.addEventListener('resize', init); 
 init();

 document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollslider();
 });

 document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollslider();
 });

 function rollslider() {
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
 }