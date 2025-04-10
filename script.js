// script.js - New Features
// Skills Animation
const skillItems = document.querySelectorAll('.skill-list li');
skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
});

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.1 });

skillItems.forEach(item => skillObserver.observe(item));

// Dynamic Copyright Year
document.querySelector('.copyright-year').textContent = new Date().getFullYear();
