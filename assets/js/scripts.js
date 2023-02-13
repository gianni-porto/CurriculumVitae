/*  -----------------------------------------------------------------------------------------------
  preloader
--------------------------------------------------------------------------------------------------- */
window.addEventListener("load", function() {
  document.querySelector(".preloader").style.display = "none";
  document.body.style.overflow ="auto";
});



let nav = document.querySelector('.icon-hamburger');

nav.addEventListener("click", function() {
      document.body.classList.toggle('menu-open');
      
});


const links = document.querySelectorAll(".header__menu li a, .scrolled");

links.forEach((link) => {
  link.addEventListener("click", clickHandler);
})

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 130; 

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });

  document.body.classList.remove('menu-open');

}


let sections = document.querySelectorAll('.section');
let menuLinks = document.querySelectorAll('.header__menu a');

window.addEventListener('scroll', function() {

  sections.forEach((section) => {
    let isInView = section.getBoundingClientRect().top < (window.innerHeight / 2) && section.getBoundingClientRect().top >= 0;

    if (isInView) {
      menuLinks.forEach((link) => {
        link.classList.remove('active');
        if ('#' + section.id === link.getAttribute('href')) {
          link.classList.add('active');
        }
      });
    }
  });
});

function isInView(element) {
  let myElement = element.getBoundingClientRect();
  
  if (myElement.top < (window.innerHeight / 2) && myElement.top >= 0) {
    return true;
  } else{return false;}
}


window.addEventListener('scroll', function(e) {
  if(window.scrollY > 300){
    document.body.classList.add('scroll-down');
  } else {
    document.body.classList.remove('scroll-down');
  }
});



/*  -----------------------------------------------------------------------------------------------
  GSAP Animation
--------------------------------------------------------------------------------------------------- */
let tl = gsap.timeline({  ease: Power3.easeOut, duration:.05});

tl
.to(".header__logo", { top: 30, opacity: 1})
.to(".header__menu li a,.header__quick", { opacity:1, y:50,stagger:.3})
.to(".text-reveal", { clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)", y:0})
.to(".fade-in", { opacity: 1, y:0,stagger:.2})
.to(".cover__img", { clipPath: "circle(100% at 50% 50%)", y:0})

gsap.to(".graphic", {
  opacity:0,
  x:-200,
  y:200,
  scrollTrigger: {
      trigger: ".cover",
      start: "top top",
      end: "bottom 50%",
      scrub: true 
  }
});





ScrollTrigger.batch(".text-reveal-scroll", {
  start: "top 80%",
  onEnter: (elements, triggers) => {
      gsap.to(elements, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",y:0,duration:2,ease: "Power3.easeOut",stagger:.5});
  }
});

ScrollTrigger.batch(".fade-up", {
  start: "top bottom",
  onEnter: (elements, triggers) => {
      gsap.to(elements, {opacity: 1, stagger: 0.3, y:0, duration:1.5, ease: "Power3.easeOut",stagger:.3});
  }

});

/*  -----------------------------------------------------------------------------------------------
  Progress
--------------------------------------------------------------------------------------------------- */
let progressBars = document.querySelectorAll(".progress-fill");

progressBars.forEach(function(progressBar) {
  gsap.to(progressBar, {
    width: progressBar.getAttribute("data-skill"),
    ease: Power3.easeOut,
    scrollTrigger: {
      trigger: progressBar,
      start: "top 80%",
      end: "bottom top",
      onEnter: function() {
        gsap.to(progressBar, {
          width: progressBar.getAttribute("data-skill"),
          duration: 2,
          ease: Power3.easeOut
        });
      }
    }
  });
});



/*  -----------------------------------------------------------------------------------------------
  Backgrund
--------------------------------------------------------------------------------------------------- */
let triggers = [
  new ScrollTrigger({
    trigger: "#studi",
    start: "top 50%",
    toggleActions: "play none none reverse",
    onToggle: function() {
      document.body.classList.toggle("bg-change-1");
    }
  }),
  new ScrollTrigger({
    trigger: "#gen",
    start: "top 50%",
    toggleActions: "play none none reverse",
    onToggle: function() {
      document.body.classList.toggle("bg-change-1");
    }
  })
];
