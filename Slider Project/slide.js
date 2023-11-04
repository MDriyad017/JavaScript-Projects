let slideShowElement = document.querySelectorAll('.slideElement');

let countElement = 1;
setInterval(() => {
   countElement ++;
    let currentElement = document.querySelector('.current');
    currentElement.classList.remove('current');

   if(countElement > slideShowElement.length){
      slideShowElement[0].classList.add('current');
      countElement = 1;
   }
   else{
      currentElement.nextElementSibling.classList.add('current');
   }
}, 3000);



