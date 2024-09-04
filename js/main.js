/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
    
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0tjhgc9', 'template_1e3xcj5', '#contact-form', '-R03_7duF_aiTWWHg')
    .then(() => {
        contactMessage.textContent = 'Message Sent Successfully!';

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000);

        contactForm.reset();

    }, (error) => {
        contactMessage.textContent = 'Message not sent (service error)';
        console.error('EmailJS Error:', error);
    });
}

contactForm.addEventListener('submit', sendEmail);


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


//scroll reaveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data, .education ')
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__scroll', {delay: 4500})
sr.reveal('.project__card', {interval: 100})
sr.reveal('.about__content,.skills',{origin: 'right'})
sr.reveal('.about__img, .cert',{origin: 'left'})
sr.reveal('.contact__container',{origin: 'bottom'})
    
//preloader
function startLoader() {
    let counterElement = document.querySelector(".counter");
    let overlayElement = document.querySelector(".overlay");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            // Trigger GSAP animations once the counter is 100
            triggerAnimations();
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

function triggerAnimations() {
    gsap.to(".counter", 0.25, {
        opacity: 0,
    });

    gsap.to(".bar", 1.5, {
        height: 0,
        stagger: {
            amount: 0.5,
        },
        ease: "power4.inOut",
        onComplete: () => {
            document.querySelector(".overlay").style.display = "none"; // Hide the overlay after animation
            document.body.style.overflow = "auto"; // Re-enable scrolling
        }
    });

    gsap.from(".home", 1.5, {
        delay: 0.5,
        y: 700,
        stagger: {
            amount: 0.5,
        },
        ease: "power4.inOut",
    });

    gsap.from(".nav__menu",  1.5, {
        delay: 0.5,
        y: 400,
        ease: "power4.inOut",
    });

    gsap.from(".header",  1, {
        delay: 0.5,
        y: 400,
        ease: "power4.inOut",
    });
    
}

document.addEventListener("DOMContentLoaded", startLoader);

// Assuming you show the preloader on page load
window.addEventListener('lhome', function () {
    // Remove preloader after everything is loaded
    document.querySelector('.overlay').style.display = 'none';
    document.body.classList.remove('no-scroll');
});

// To show the preloader before page load or at a certain event:
document.body.classList.add('no-scroll');


const selectTyped = document.querySelector('.home__profession');
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.home__profession', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}