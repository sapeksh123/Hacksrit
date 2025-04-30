// // Preloader
// window.addEventListener('load', function() {
//     const preloader = document.querySelector('.preloader');
//     setTimeout(function() {
//         preloader.style.opacity = '0';
//         setTimeout(function() {
//             preloader.style.display = 'none';
//         }, 500);
//     }, 1500);
// });

// // Navbar Scroll Effect
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
    
//     // Back to Top Button
//     const backToTop = document.querySelector('.back-to-top');
//     if (window.scrollY > 300) {
//         backToTop.classList.add('active');
//     } else {
//         backToTop.classList.remove('active');
//     }
// });

// // Mobile Menu Toggle
// const menuToggle = document.querySelector('.menu-toggle');
// const navMenu = document.querySelector('.nav-menu');

// menuToggle.addEventListener('click', function() {
//     navMenu.classList.toggle('active');
    
//     const bars = document.querySelectorAll('.bar');
//     bars[0].classList.toggle('bar-1');
//     bars[1].classList.toggle('bar-2');
//     bars[2].classList.toggle('bar-3');
// });

// // Close mobile menu when clicking on a nav link
// const navLinks = document.querySelectorAll('.nav-link');
// navLinks.forEach(link => {
//     link.addEventListener('click', function() {
//         navMenu.classList.remove('active');
//     });
// });

// // Active Navigation Link on Scroll
// window.addEventListener('scroll', function() {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.nav-link');
    
//     let current = '';
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
        
//         if (window.scrollY >= (sectionTop - 200)) {
//             current = section.getAttribute('id');
//         }
//     });
    
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${current}`) {
//             link.classList.add('active');
//         }
//     });
// });

// // Countdown Timer
// function updateCountdown() {
//     const targetDate = new Date('March 23, 2024 10:00:00').getTime();
//     const now = new Date().getTime();
//     const timeLeft = targetDate - now;
    
//     if (timeLeft <= 0) {
//         document.getElementById('days').innerText = '00';
//         document.getElementById('hours').innerText = '00';
//         document.getElementById('minutes').innerText = '00';
//         document.getElementById('seconds').innerText = '00';
//         return;
//     }
    
//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
//     document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
//     document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
//     document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
//     document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;
// }

// // Update countdown every second
// setInterval(updateCountdown, 1000);
// updateCountdown();

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// // Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// // Animation on Scroll
// window.addEventListener('scroll', function() {
//     const animatedElements = document.querySelectorAll('.track-card, .prize-card, .team-member');
    
//     animatedElements.forEach(element => {
//         const elementPosition = element.getBoundingClientRect().top;
//         const screenPosition = window.innerHeight / 1.2;
        
//         if (elementPosition < screenPosition) {
//             element.classList.add('animate');
//         }
//     });
// });

// // Form Submission
// const contactForm = document.querySelector('.contact-form form');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form data
//         const name = this.querySelector('input[type="text"]').value;
//         const email = this.querySelector('input[type="email"]').value;
//         const subject = this.querySelector('input[placeholder="Subject"]').value;
//         const message = this.querySelector('textarea').value;
        
//         // Here you would typically send the data to a server
//         // For demo purposes, we'll just log it
//         console.log('Form submitted:', { name, email, subject, message });
        
//         // Reset form
//         this.reset();
        
//         // Show success message (you can implement this)
//         alert('Thank you for your message! We will get back to you soon.');
//     });
// }

// // Newsletter Subscription
// const newsletterForm = document.querySelector('.newsletter-form');
// if (newsletterForm) {
//     newsletterForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         const email = this.querySelector('input[type="email"]').value;
        
//         // Here you would typically send the email to a server
//         console.log('Newsletter subscription:', email);
        
//         // Reset form
//         this.reset();
        
//         // Show success message
//         alert('Thank you for subscribing to our newsletter!');
//     });
// }

// // Add CSS animations for mobile menu
// document.head.insertAdjacentHTML('beforeend', `
// <style>
// .bar-1 {
//     transform: rotate(-45deg) translate(-5px, 6px);
// }
// .bar-2 {
//     opacity: 0;
// }
// .bar-3 {
//     transform: rotate(45deg) translate(-5px, -6px);
// }
// .track-card.animate, .prize-card.animate, .team-member.animate {
//     animation: fadeInUp 0.5s ease forwards;
// }
// @keyframes fadeInUp {
//     from {
//         opacity: 0;
//         transform: translateY(20px);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }
// </style>
// `);


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
            
            // Animate hero content after preloader is gone
            document.querySelector('.hero-content').style.opacity = '1';
            document.querySelector('.hero-content').style.transform = 'translateX(0)';
            
            setTimeout(function() {
                document.querySelector('.hero-image').style.opacity = '1';
                document.querySelector('.hero-image').style.transform = 'translateX(0)';
            }, 300);
        }, 500);
    }, 1500);
    
    // Create background animation elements
    const bgAnimation = document.createElement('div');
    bgAnimation.className = 'bg-animation';
    
    for (let i = 0; i < 5; i++) {
        const span = document.createElement('span');
        bgAnimation.appendChild(span);
    }
    
    document.body.appendChild(bgAnimation);
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
        
        // Scroll animations for sections
        animateOnScroll();
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button click event
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Countdown timer
    const countdownDate = new Date('May 10, 2025 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Scroll animations
    function animateOnScroll() {
        // Section titles
        document.querySelectorAll('.section-title').forEach(title => {
            if (isElementInViewport(title) && !title.classList.contains('visible')) {
                title.classList.add('visible');
            }
        });
        
        // About section
        const aboutText = document.querySelector('.about-text');
        const aboutImage = document.querySelector('.about-image');
        
        if (aboutText && isElementInViewport(aboutText) && !aboutText.classList.contains('visible')) {
            aboutText.classList.add('visible');
        }
        
        if (aboutImage && isElementInViewport(aboutImage) && !aboutImage.classList.contains('visible')) {
            aboutImage.classList.add('visible');
        }
        
        // Track cards
        document.querySelectorAll('.track-card').forEach((card, i) => {
            if (isElementInViewport(card) && !card.classList.contains('visible')) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, i * 100);
            }
        });
        
        // Sponsor tiers
        document.querySelectorAll('.sponsor-tier').forEach(tier => {
            if (isElementInViewport(tier) && !tier.classList.contains('visible')) {
                tier.classList.add('visible');
            }
        });
        
        // Sponsor us section
        const sponsorUs = document.querySelector('.sponsor-us');
        if (sponsorUs && isElementInViewport(sponsorUs) && !sponsorUs.classList.contains('visible')) {
            sponsorUs.classList.add('visible');
        }
        
        // Timeline items
        document.querySelectorAll('.timeline-item').forEach(item => {
            if (isElementInViewport(item) && !item.classList.contains('visible')) {
                item.classList.add('visible');
            }
        });
        
        // Prizes section
        const prizesContainer = document.querySelector('.prizes-container');
        if (prizesContainer && isElementInViewport(prizesContainer) && !prizesContainer.classList.contains('visible')) {
            prizesContainer.classList.add('visible');
        }
        
        const trackPrizes = document.querySelector('.track-prizes');
        if (trackPrizes && isElementInViewport(trackPrizes) && !trackPrizes.classList.contains('visible')) {
            trackPrizes.classList.add('visible');
        }
        
        const additionalPrizes = document.querySelector('.additional-prizes');
        if (additionalPrizes && isElementInViewport(additionalPrizes) && !additionalPrizes.classList.contains('visible')) {
            additionalPrizes.classList.add('visible');
        }
        
        // FAQ items
        document.querySelectorAll('.faq-item').forEach((item, i) => {
            if (isElementInViewport(item) && !item.classList.contains('visible')) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, i * 100);
            }
        });
        
        // Team categories
        document.querySelectorAll('.team-category').forEach(category => {
            if (isElementInViewport(category) && !category.classList.contains('visible')) {
                category.classList.add('visible');
            }
        });
        
        // Team members
        document.querySelectorAll('.team-member').forEach((member, i) => {
            if (isElementInViewport(member) && !member.classList.contains('visible')) {
                setTimeout(() => {
                    member.classList.add('visible');
                }, i * 100);
            }
        });
        
        // Contact info and form
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo && isElementInViewport(contactInfo) && !contactInfo.classList.contains('visible')) {
            contactInfo.classList.add('visible');
        }
        
        const contactForm = document.querySelector('.contact-form');
        if (contactForm && isElementInViewport(contactForm) && !contactForm.classList.contains('visible')) {
            contactForm.classList.add('visible');
        }
    }
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Initial check for elements in viewport
    setTimeout(animateOnScroll, 100);
});


  document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
      alert('All fields are required!');
      e.preventDefault();
    } else if (!email.match(emailPattern)) {
      alert('Please enter a valid email address!');
      e.preventDefault();
    }
  });

