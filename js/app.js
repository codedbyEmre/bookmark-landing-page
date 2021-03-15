const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const title3 = document.getElementById('title3');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    burger.classList.toggle('nav-icon');
});

const item = gsap.timeline({defaults: {ease: "power2.inOut", duration: 1}});

    item.from('.text', {opacity: 0, duration: 1, stagger: .5, y: -20})
        .from('.showcase-right', {opacity: 0, x: '100%', duration: 1}, '-=0.6')
        .from('.navbar', {duration: 1, opacity: 0}, '-=0.6')


// Tabs section
const getContent1 = () => {
    content1.style.transform = 'translateX(0)';
    content2.style.transform = 'translateX(110%)';
    content3.style.transform = 'translateX(110%)';
    title1.style.opacity = 1;
    title2.style.opacity = 0.4;
    title3.style.opacity = 0.4;
    content1.style.transitionDelay = '0.4s';
    content2.style.transitionDelay = '0s';
    content3.style.transitionDelay = '0s';
}

const getContent2 = () => {
    content1.style.transform = 'translateX(110%)';
    content2.style.transform = 'translateX(0%)';
    content3.style.transform = 'translateX(110%)';
    title1.style.opacity = 0.4;
    title2.style.opacity = 1;
    title3.style.opacity = 0.4;
    content1.style.transitionDelay = '0s';
    content2.style.transitionDelay = '0.4s';
    content3.style.transitionDelay = '0s';
}

const getContent3 = () => {
    content1.style.transform = 'translateX(110%)';
    content2.style.transform = 'translateX(110%)';
    content3.style.transform = 'translateX(0%)';
    title1.style.opacity = 0.4;
    title2.style.opacity = 0.4;
    title3.style.opacity = 1;
    content1.style.transitionDelay = '0s';
    content2.style.transitionDelay = '0s';
    content3.style.transitionDelay = '0.4s';
}

title1.addEventListener('click', getContent1);
title2.addEventListener('click', getContent2);
title3.addEventListener('click', getContent3);

// Accordion
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
    });
});

// Animate on screen
AOS.init({
    offset: 120, 
    duration: 700,
    easing: 'ease', 
    delay: 1
});