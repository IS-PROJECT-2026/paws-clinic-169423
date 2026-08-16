document.addEventListener('DOMContentLoaded', () => {
    // Modal Logic
    const modal = document.getElementById('appointment-modal');
    const closeBtn = document.querySelector('.close-btn');
    const bookButtons = document.querySelectorAll('a[href="#book"]');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Mobile Menu Logic
    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    });

    // Open modal when any "Book" button is clicked
    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent page jump
            modal.classList.add('active');
        });
    });

    // Close modal via X button
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal by clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});