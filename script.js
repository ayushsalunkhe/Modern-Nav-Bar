const navLinks = document.querySelectorAll('.nav-item a');
const pointer = document.querySelector('.pointer');

// Add event listeners to all nav items
navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const left = rect.left + window.scrollX;

        pointer.style.width = `${width}px`;
        pointer.style.transform = `translateX(${left}px)`;
    });
});

// Reset pointer when mouse leaves the nav
document.querySelector('.navbar').addEventListener('mouseleave', () => {
    pointer.style.width = '0';
});
