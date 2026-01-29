// ===================================
// Mobile Menu Toggle
// ===================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 0) {
        navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===================================
// Intersection Observer for Scroll Animations
// ===================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animating to improve performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with slide-up class
document.querySelectorAll('.slide-up').forEach(element => {
    observer.observe(element);
});

// ===================================
// Download Button Click Tracking
// ===================================

document.querySelectorAll('a[href*="apps.apple.com"]').forEach(link => {
    link.addEventListener('click', () => {
        // Track download button clicks
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'Download',
                'event_label': 'iOS App Store',
                'value': 1
            });
        }

        console.log('Download button clicked');
    });
});

// ===================================
// Feature Card Interaction
// ===================================

document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--primary').trim();
    });

    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'transparent';
    });
});

// ===================================
// Dynamic Year in Footer
// ===================================

const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText && footerText.textContent.includes('2026')) {
    footerText.textContent = footerText.textContent.replace('2026', currentYear);
}

// ===================================
// Lazy Loading for Phone Mockup Images
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Prevent Flash of Unstyled Content
// ===================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===================================
// Handle External Links
// ===================================

document.querySelectorAll('a[href^="http"]').forEach(link => {
    // Add noopener noreferrer for security
    if (link.hostname !== window.location.hostname) {
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('target', '_blank');
    }
});

// ===================================
// Testimonial Rotation (Optional Enhancement)
// ===================================

let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    // Only rotate on mobile if you want a carousel effect
    if (window.innerWidth <= 768 && testimonials.length > 1) {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.display = index === currentTestimonialIndex ? 'block' : 'none';
        });

        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    } else {
        // Show all testimonials on desktop
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'block';
        });
    }
}

// Initialize testimonial display
rotateTestimonials();

// Rotate every 5 seconds (optional)
// setInterval(rotateTestimonials, 5000);

// Re-check on window resize
window.addEventListener('resize', rotateTestimonials);

// ===================================
// Stats Counter Animation
// ===================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = formatStatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatStatNumber(Math.floor(start));
        }
    }, 16);
}

function formatStatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K+';
    }
    return num.toString();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statElements = entry.target.querySelectorAll('.stat h3');
            statElements.forEach(stat => {
                const text = stat.textContent;
                const numMatch = text.match(/[\d.]+/);
                if (numMatch) {
                    const targetNum = parseFloat(numMatch[0]) * (text.includes('K') ? 1000 : 1);
                    stat.textContent = '0';
                    animateCounter(stat, targetNum);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===================================
// Performance Optimization
// ===================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced resize handler
window.addEventListener('resize', debounce(() => {
    // Recalculate any resize-dependent features
    rotateTestimonials();
}, 250));

// ===================================
// Accessibility Enhancements
// ===================================

// Add keyboard navigation for mobile menu
mobileMenuBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenuBtn.click();
    }
});

// Trap focus in mobile menu when open
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.focus();
    }
});

// ===================================
// Console Welcome Message
// ===================================

console.log('%c🍽️ Welcome to NibbleMaps!', 'color: #FF6B6B; font-size: 20px; font-weight: bold;');
console.log('%cInterested in our code? We\'re always looking for talented developers!', 'color: #4A9EFF; font-size: 14px;');
console.log('%cEmail us at: hello@nibblemaps.com', 'color: #4DCC7A; font-size: 14px;');

// ===================================
// Service Worker Registration (Optional - for PWA)
// ===================================

if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// ===================================
// Analytics Event Tracking
// ===================================

function trackEvent(category, action, label, value) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': value
        });
    }

    // Console log for debugging
    console.log(`Event: ${category} - ${action} - ${label}`);
}

// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
                trackEvent('Section View', 'view', sectionId, 1);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// Track outbound links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Outbound Link', 'click', link.href, 1);
    });
});

// ===================================
// Page Load Performance Logging
// ===================================

window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);

        // Track load time if under 3 seconds (good performance)
        if (pageLoadTime < 3000) {
            trackEvent('Performance', 'fast_load', `${pageLoadTime}ms`, pageLoadTime);
        }
    }
});
