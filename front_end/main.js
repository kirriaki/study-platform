// Backend API Base URL
const API_BASE_URL = 'http://localhost:3000/api';

// ScrollReveal Animations
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-contact h1, .about-img', { origin: 'left' });
sr.reveal('.home-contact p, .about-content', { origin: 'right' });

// Menu Icon Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Active Link Highlighting and Sticky Navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove('active'));
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });

    // Sticky Navbar
    const header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Close menu on scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: [
        '<span class="yellow">qazaq_gen</span>',
        '<span class="blue">Innovating the world</span>',
        '<span class="green">Discover New Horizons</span>',
    ],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});

// Register User Function
const registerUser = async () => {
    console.log('Sending request to backend...');

    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
        }),
    });

    console.log('Received response:', response);

    if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);
        alert('User registered successfully!');
    } else {
        const error = await response.json();
        console.log('Error Data:', error);
        alert('Error: ' + error.message);
    }
};

// Add an event listener for the "Register User" button
document.getElementById('test-register').addEventListener('click', registerUser);
