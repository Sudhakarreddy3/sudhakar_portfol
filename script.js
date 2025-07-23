// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        
        // Update active class
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission (basic example)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - form submission not implemented)');
    e.target.reset();
});