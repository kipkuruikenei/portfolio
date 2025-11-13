// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Download CV functionality - FIXED VERSION
const downloadCV = document.getElementById('downloadCV');
const downloadModal = document.getElementById('downloadModal');
const closeModal = document.getElementById('closeModal');
const closeModalBtn = document.querySelector('.close-modal');

downloadCV.addEventListener('click', () => {
    // Method 1: Direct download link (if file exists)
    const cvUrl = 'assets/STACY-ATIENO-CV.pdf';
    
    // Create a temporary link for download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'STACY-ATIENO-CV.pdf'; // This will be the filename when downloaded
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success modal
    downloadModal.style.display = 'block';
    
    // Alternative method if above doesn't work
    setTimeout(() => {
        // Check if download actually happened
        console.log('Download initiated for: ' + cvUrl);
    }, 1000);
});

// Close modal functionality
closeModal.addEventListener('click', () => {
    downloadModal.style.display = 'none';
});

closeModalBtn.addEventListener('click', () => {
    downloadModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === downloadModal) {
        downloadModal.style.display = 'none';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.hero-content, .about-content, .skills-grid, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});


