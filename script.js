// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle dropdown navigation links
    const dropdownLinks = document.querySelectorAll('.nav-link.dropdown');
    
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // For a basic implementation, you could show/hide a dropdown menu here
            // For now, we'll just prevent the default action
            console.log('Dropdown clicked:', this.textContent);
        });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Tab link functionality (for category tabs)
    const tabLinks = document.querySelectorAll('.tab-link');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all tabs
            tabLinks.forEach(tab => tab.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // Add hover effects for cards
    const cards = document.querySelectorAll('.solution-card, .resource-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

});