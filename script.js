// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Intersection Observer for smooth scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Element triggers when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class when scrolled into view
                entry.target.classList.add('visible');
                // Stop observing once animated so it stays visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 2. Select elements to animate and initialize them with hidden classes
    const animatedElements = document.querySelectorAll('.profile-container, section, .project-card, header h1, header p, .btn');
    
    animatedElements.forEach((el) => {
        // Add the base fade-up class which hides the element initially
        el.classList.add('fade-up');
        
        // Add staggered delay to project cards logically
        if (el.classList.contains('project-card')) {
            const parent = el.parentElement;
            const cards = Array.from(parent.querySelectorAll('.project-card'));
            const cardIndex = cards.indexOf(el);
            // Stagger animation based on index
            if (cardIndex === 1) el.classList.add('delay-200');
            if (cardIndex === 2) el.classList.add('delay-300');
        }

        // Start observing each element
        observer.observe(el);
    });
});
