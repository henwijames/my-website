/* Loader */
function showLoader() {
   document.querySelector('.spinner-wrapper').style.transform = 'translateY(0)';
   document.body.style.overflow = 'hidden';
}
function hideLoader() {
   document.querySelector('.spinner-wrapper').style.transform = 'translateY(-100%)';
   document.body.style.overflow = 'auto';
   setTimeout(() => {
      // Initialize AOS here
      AOS.init();
   }, 500);
}

showLoader();

const duration = 3000;

setTimeout(hideLoader, duration); 

/* loader end */

/* Responsive Navbar */
let menu = document.getElementById('menu');
let bar = document.querySelector('.fa-bars');
let times = document.querySelector('.fa-xmark');

bar.addEventListener('click', () => {
   menu.style.right = '0';
});

times.addEventListener('click', () => {
   menu.style.right = '-200px';
});
/* Responsive Navbar */

/* Tab Contents */

let tablinks = document.getElementsByClassName('tab-link');
let tabcontents = document.getElementsByClassName('tab-content');
function opentab(tabname) {
   for(tablink of tablinks) {
      tablink.classList.remove("active-link");
   }
   for (tabcontent of tabcontents) {   
      tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}

/* ScrollToTop */

const scrollBtn = document.querySelector('#scrollToTop');

document.addEventListener("DOMContentLoaded", function () {
   let scrollToTopButton = document.getElementById("scrollToTop");
   window.addEventListener("scroll", function () {
   if (window.pageYOffset > 100) {
      scrollToTopButton.style.opacity = "1";
   }else {
      scrollToTopButton.style.opacity = "0";
   }
   })

   scrollToTopButton.addEventListener("click", function () {
   window.scrollTo({
      top: 0,
       behavior: "smooth" // For smooth scrolling (optional)
   });
   });
});

/* Dark Mode && Light Mode */
let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let home = document.querySelector('.home');

sun.addEventListener('click', () => {
   document.body.classList.add('dark');
   home.classList.toggle('lighthome')
   sun.style.display = 'none';
   moon.style.display = 'block';
});

moon.addEventListener('click', () => {
   document.body.classList.remove('dark');
   home.classList.remove('lighthome')
   sun.style.display = 'block';
   moon.style.display = 'none';
});

