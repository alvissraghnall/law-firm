import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js';

let hamburgerMenuOpen = false;

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



const hamburgerIconEl = document.getElementById('hamburgerIcon');
const closeMobileMenuIconEl = document.getElementById('closeMobileMenuIcon');
const mobileMenuEl = document.getElementById('mobileMenu');

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
