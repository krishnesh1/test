//Slider Controls written by Samir Khanal
const slider=document.querySelector(".slider");
const slides=document.querySelectorAll(".slide");
const prevBtn=document.querySelector(".prev-slider");
const nextBtn=document.querySelector(".next-slider");

let slideIndex=0;

slides[slideIndex].classList.add('.active');

prevBtn.addEventListener('click',prevSlide);
nextBtn.addEventListener('click',nextSlide);

function prevSlide(){
  slides[slideIndex].classList.remove('active');
  slideIndex=(slideIndex===0)?slides.length-1:slideIndex-1;
  slides[slideIndex].classList.add('active');
  slider.style.transform=`translateX(-${slideIndex*100}%)`;
}

function nextSlide(){
  slides[slideIndex].classList.remove('active');
  slideIndex=(slideIndex===slides.length-1)?0:slideIndex+1;
  slides[slideIndex].classList.add('active');
  slider.style.transform=`translateX(-${slideIndex*100}%)`;

}

//Countdown timer logic-written by Samir Khanal
const endDate="Sun Feb 11 2024 10:04:38 GMT+0530 (India Standard Time)";//Time to end the sales(Edit your date here)
var input_field=document.querySelectorAll("#end");
console.log(input_field);

function timer(){
  const end=new Date(endDate);
  console.log(end)
  const now=new Date();
  console.log(now);
  const diff=(end-now)/1000;
  console.log(diff);
  if(diff<=0){       //Stopping the timer when the time is ended
    return;  
  }
  input_field[0].value=Math.floor(diff/86400);
  rem_sec1=(diff%86400);
  rem_hours=rem_sec1/3600;
  input_field[1].value=Math.floor(rem_hours);
  rem_sec2=rem_sec1%3600;
  rem_min=rem_sec2/60;
  input_field[2].value=Math.floor(rem_min);
  rem_secf=rem_sec2%60;
  input_field[3].value=Math.floor(rem_secf);
}
//Calling Timer
timer();

//Calling Timer every 1sec 
setInterval(()=>{
  timer()
},1000);

/* Script for product carousel written by javascript*/
// const track = document.querySelector('.carousel-track');
// const items = document.querySelectorAll('.carousel-item');
// const prevBton = document.querySelector('.carousel-prev');
// const nextBton = document.querySelector('.carousel-next');

// let currentIndex = 0;
// const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginLeft) + parseInt(getComputedStyle(items[0]).marginRight);

// prevBton.addEventListener('click', () => {
//   currentIndex = Math.max(currentIndex - 1, 0);
//   updateCarousel();
// });

// nextBton.addEventListener('click', () => {
//   currentIndex = Math.min(currentIndex + 1, items.length - Math.floor(track.offsetWidth / itemWidth));
//   updateCarousel();
// });

// function updateCarousel() {
//   const translateValue = -currentIndex * itemWidth;
//   track.style.transform = `translateX(${translateValue}px)`;
// }