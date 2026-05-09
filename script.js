document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Gallery Horizontal Scroll
    const galleryContainer = document.getElementById('gallery-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (galleryContainer && prevBtn && nextBtn) {
        const scrollAmount = 430; // Item width (400) + gap (30)

        prevBtn.addEventListener('click', () => {
            galleryContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            galleryContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // WhatsApp Quote Form
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const mobile = document.getElementById('mobile').value;
            const address = document.getElementById('address').value;
            const size = document.getElementById('system-size').value;
            const requirement = document.getElementById('requirement').value;
            
            // Format the message
            const message = `*New Quote Request*%0A%0A` +
                            `*Name:* ${name}%0A` +
                            `*Mobile:* ${mobile}%0A` +
                            `*Address:* ${address}%0A` +
                            `*System Size:* ${size}%0A` +
                            `*Requirement:* ${requirement}`;
            
            // Your WhatsApp number
            const phoneNumber = "917066099728"; 
            
            // Open WhatsApp
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    }

    // Mobile Menu Toggle (Optional expansion)
    const mobileMenuBtn = document.getElementById('mobile-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            alert('Mobile menu functionality can be added here!');
        });
    }
});
