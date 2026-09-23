// 1. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Dark/Light Theme Toggle with LocalStorage
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// 3. FAQ Accordion Logic
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
        const span = header.querySelector('span');
        span.textContent = item.classList.contains('active') ? '-' : '+';
    });
});

// 4. Testimonial Carousel Logic
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// 5. Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return;
    }
    
    formSuccess.textContent = 'Thank you! Your message has been sent successfully.';
    contactForm.reset();
    setTimeout(() => { formSuccess.textContent = ''; }, 4000);
});

// 6. Book a Call Modal Interactivity
const callModal = document.getElementById('callModal');
const openModalBtn = document.getElementById('openModal');
const openModalHeroBtn = document.getElementById('openModalHero');
const closeModal = document.getElementById('closeModal');

[openModalBtn, openModalHeroBtn].forEach(btn => {
    btn.addEventListener('click', () => {
        callModal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    callModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === callModal) {
        callModal.style.display = 'none';
    }
});
