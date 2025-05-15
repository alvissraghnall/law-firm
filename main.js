import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js';


const hamburgerIconEl = document.getElementById('hamburgerIcon');
const sliderHolderEl = document.getElementById('sliderHolder');
const closeMobileMenuIconEl = document.getElementById('closeMobileMenuIcon');
const mobileMenuEl = document.getElementById('mobileMenu');
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

let hamburgerMenuOpen = false;
let slideIndex = 0;

const handleClick = (direction) => {
    direction === "left" ? slideIndex = slideIndex > 0 ? slideIndex - 1 : 6 : slideIndex = slideIndex < 6 ? slideIndex + 1 : 0;
};

// Initialize slider
function initSlider() {
  if (slides.length > 0) {
    slides[0].classList.add('active');
    indicators[0].classList.add('active');
  }
  
  // Auto-rotate every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000);
}

function showSlide(idx) {
  // Wrap around if at end
  if (idx >= slides.length) slideIndex = 0;
  if (idx < 0) slideIndex = slides.length - 1;
  
  // Update slides
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === slideIndex);
  });
  
  // Update indicators
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('ind-active', i === slideIndex);
  });
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Add click events to indicators
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

// Initialize on load
document.addEventListener('DOMContentLoaded', initSlider);

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `


hamburgerIconEl.addEventListener('click', () => {
    console.log(hamburgerMenuOpen);
    hamburgerMenuOpen = !hamburgerMenuOpen
    mobileMenuEl.classList.toggle('!hidden');

    if (hamburgerMenuOpen === false) {
        hamburgerIconEl.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />`;
        // closeMobileMenuIconEl.classList.add("hidden");
    } else {
        // closeMobileMenuIconEl.classList.remove("hidden");
        hamburgerIconEl.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />`;
    }
});


setupCounter(document.querySelector('#counter'))
