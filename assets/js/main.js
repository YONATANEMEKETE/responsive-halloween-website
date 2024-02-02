/*=============== SHOW MENU ===============*/
const close = document.getElementById("nav-close");
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById('nav-menu'); 

toggle.addEventListener("click", () => {
  menu.classList.toggle("show-menu")
}); 

close.addEventListener("click", () => {
  menu.classList.toggle("show-menu")
}); 

/*=============== REMOVE MENU MOBILE ===============*/
const links = document.querySelectorAll(".nav__link"); 

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu")

  navMenu.classList.remove("show-menu")
};

links.forEach(lb => {lb.addEventListener('click', linkAction)}); 

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header")

  this.scrollY > 50 ? header.classList.add("header-scroll")
                    : header.classList.remove("header-scroll")
}; 

window.addEventListener("scroll", scrollHeader); 

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__shadow', 1.5, {opacity: 0, y: -300, delay: .2})
gsap.from('.home__points', 1.5, {opacity: 0, y: -300, delay: .4})
gsap.from('.home__grass', 1.5, {opacity: 0, y: 300, delay: .2, ease: 'elastic.out(1, .5)'})
gsap.from('.home__pumpkin', 1.5, {opacity: 0, y: -300, delay: .5, ease: 'bounce.out'})
gsap.from('.home__stone', 1.5, {opacity: 0, y: 300, delay: .6, ease: 'elastic.out(1, .5)'})
gsap.from('.home__moon', 1.5, {opacity: 0, y: 300, delay: 1.5, ease: 'elastic.out(1, .5)'})
gsap.from('.home__titles', 1.5, {opacity: 0, y: -300, delay: 1.5, ease: 'elastic.out(1, .5)'})
gsap.from('.home__tree', 1.5, {opacity: 0, y: 300, delay: 2, ease: 'elastic.out(1, .5)'})
gsap.from('.home__data', 1.5, {opacity: 0, y: 200, delay: 2, ease: 'elastic.out(1, .5)'})