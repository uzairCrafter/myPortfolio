// Dark/Light Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.setAttribute(
        'data-theme',
        body.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    );
    themeToggle.querySelector('i').classList.toggle('fa-sun');
    themeToggle.querySelector('i').classList.toggle('fa-moon');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Navigation Links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close Navigation When a Link is Clicked (Optional)
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});