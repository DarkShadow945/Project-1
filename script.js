// Platform data
const platforms = [
    {
        name: "PrizeRebel",
        url: "https://www.prizerebel.com/members.php",
        category: "Surveys & Tasks",
        rating: "4.5/5",
        description: "Complete surveys, watch videos, and complete tasks to earn points redeemable for cash and gift cards.",
        earnings: "Earn $5-50+ per day",
        features: ["Instant Payouts", "Multiple Earning Methods", "Low Minimum Payout", "Daily Bonuses"]
    },
    {
        name: "InboxPounds",
        url: "https://www.inboxpounds.co.uk/",
        category: "Surveys & Tasks",
        rating: "4.3/5",
        description: "UK-based platform offering paid surveys, cashback shopping, and various online tasks with cash rewards.",
        earnings: "Earn £3-30+ per day",
        features: ["Cash Payments", "UK Focused", "Shopping Cashback", "Email Surveys"]
    },
    {
        name: "PollPay",
        url: "https://www.pollpay.app/",
        category: "Mobile Surveys",
        rating: "4.4/5",
        description: "Mobile-first survey platform with quick polls and instant PayPal payouts for completing short surveys.",
        earnings: "Earn $1-15+ per day",
        features: ["Mobile Optimized", "Instant PayPal", "Quick Surveys", "Low Payout Threshold"]
    },
    {
        name: "PaidViewpoint",
        url: "https://app.paidviewpoint.com/dashboard",
        category: "Premium Surveys",
        rating: "4.6/5",
        description: "Premium survey platform known for high-paying surveys and excellent user experience with guaranteed payments.",
        earnings: "Earn $10-100+ per survey",
        features: ["High-Paying Surveys", "No Disqualifications", "TraitScore System", "Premium Platform"]
    },
    {
        name: "Viewfruit",
        url: "https://in.viewfruit.com/Mobile/#/",
        category: "Mobile Surveys",
        rating: "4.2/5",
        description: "Mobile survey platform offering paid surveys with focus on consumer opinions and market research.",
        earnings: "Earn $2-25+ per day",
        features: ["Mobile App", "Consumer Surveys", "Regular Surveys", "Multiple Countries"]
    },
    {
        name: "YSense",
        url: "https://www.ysense.com/?s=profile-complete",
        category: "Multi-Platform",
        rating: "4.7/5",
        description: "Comprehensive earning platform with surveys, tasks, offers, and referral programs for maximum earning potential.",
        earnings: "Earn $10-80+ per day",
        features: ["Multiple Earning Ways", "Daily Checklist", "Referral Program", "Achievement System"]
    },
    {
        name: "The Panel Station",
        url: "https://www.thepanelstation.com/thankyou",
        category: "Market Research",
        rating: "4.1/5",
        description: "Global market research panel offering surveys on various topics with points redeemable for rewards.",
        earnings: "Earn $5-40+ per day",
        features: ["Global Panel", "Market Research", "Point System", "Regular Surveys"]
    },
    {
        name: "Opinion Edge",
        url: "https://panel.opinion-edge.com/#/login",
        category: "Market Research",
        rating: "4.3/5",
        description: "Market research platform providing paid surveys and studies to help shape products and services.",
        earnings: "Earn $8-45+ per day",
        features: ["Market Research", "Product Testing", "Opinion Surveys", "Study Participation"]
    },
    {
        name: "Opinion Pioneer",
        url: "https://opinionpioneer.com/Auth/google",
        category: "Premium Surveys",
        rating: "4.5/5",
        description: "Premium survey platform focusing on quality surveys with competitive rates and reliable payouts.",
        earnings: "Earn $15-75+ per day",
        features: ["Premium Surveys", "Quality Focus", "Competitive Rates", "Reliable Payouts"]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderPlatforms(platforms);
    setupFilters();
    setupAnimations();
    setupSmoothScrolling();
    setupParallaxScrolling();
});

// Parallax scrolling setup
function setupParallaxScrolling() {
    const parallaxBg = document.querySelector('.parallax-bg');
    const parallaxLayer1 = document.querySelector('.parallax-layer-1');
    const parallaxLayer2 = document.querySelector('.parallax-layer-2');
    const heroContent = document.querySelector('.hero-content');
    const platformsSection = document.querySelector('.platforms');
    const sectionTitle = document.querySelector('.section-title');
    const sectionSubtitle = document.querySelector('.section-subtitle');
    const filters = document.querySelector('.filters');
    
    // Throttle function for performance
    function throttle(func, wait) {
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
    
    const handleScroll = throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const rate2 = scrolled * -0.3;
        const rate3 = scrolled * -0.7;
        const heroRate = scrolled * 0.3;
        
        // Move background layers at different speeds
        if (parallaxBg) {
            parallaxBg.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.02}deg)`;
        }
        
        if (parallaxLayer1) {
            parallaxLayer1.style.transform = `translateY(${rate2}px)`;
        }
        
        if (parallaxLayer2) {
            parallaxLayer2.style.transform = `translateY(${rate3}px)`;
        }
        
        // Hero content parallax effect
        if (heroContent) {
            heroContent.style.transform = `translateY(${heroRate}px) translateZ(100px)`;
        }
        
        // Platform section entrance effect
        if (platformsSection) {
            const sectionTop = platformsSection.offsetTop;
            const sectionHeight = platformsSection.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
                const progress = (scrolled + windowHeight - sectionTop) / (windowHeight + sectionHeight);
                const parallaxOffset = (progress - 0.5) * 100;
                
                if (sectionTitle) {
                    sectionTitle.style.transform = `translateY(${parallaxOffset * 0.3}px) translateZ(30px)`;
                }
                
                if (sectionSubtitle) {
                    sectionSubtitle.style.transform = `translateY(${parallaxOffset * 0.2}px) translateZ(20px)`;
                }
                
                if (filters) {
                    filters.style.transform = `translateY(${parallaxOffset * 0.1}px) translateZ(40px)`;
                }
            }
        }
    }, 16);
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    handleScroll();
}

// Render platforms
function renderPlatforms(platformsToRender) {
    const grid = document.getElementById('platformGrid');
    grid.innerHTML = '';

    platformsToRender.forEach((platform, index) => {
        const card = createPlatformCard(platform);
        card.style.animationDelay = `${index * 150}ms`;
        
        // Vary animation types for visual interest
        if (index % 3 === 0) {
            card.classList.add('fade-in');
        } else if (index % 3 === 1) {
            card.classList.add('tilt-in');
        } else {
            card.classList.add('slide-in');
        }
        
        // Enhanced mouse tilt effect with parallax
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;
            
            card.style.transform = `translateY(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px) scale(1.03)`;
        });
        
        card.addEventListener('mouseleave', () => {
            const isOdd = index % 2 === 1;
            const baseTransform = isOdd ? 'rotateY(-3deg) translateZ(10px)' : 'rotateY(3deg) translateZ(10px)';
            card.style.transform = baseTransform;
        });
        
        grid.appendChild(card);
    });
}

// Create platform card
function createPlatformCard(platform) {
    const card = document.createElement('div');
    card.className = 'platform-card';
    card.setAttribute('data-category', platform.category);

    card.innerHTML = `
        <div class="platform-header">
            <h3 class="platform-name">${platform.name}</h3>
            <span class="platform-rating">${platform.rating}</span>
        </div>
        <p class="platform-description">${platform.description}</p>
        <div class="platform-earnings">${platform.earnings}</div>
        <div class="platform-features">
            <div class="features-title">Key Features:</div>
            <div class="features-list">
                ${platform.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
        </div>
        <a href="${platform.url}" target="_blank" rel="noopener noreferrer" class="platform-link">
            Visit ${platform.name}
        </a>
    `;

    return card;
}

// Setup filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter platforms
            const filter = button.getAttribute('data-filter');
            const filteredPlatforms = filter === 'all' 
                ? platforms 
                : platforms.filter(platform => platform.category === filter);
            
            renderPlatforms(filteredPlatforms);
        });
    });
}

// Setup animations with intersection observer
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = entry.target.style.transform || 'translateY(0) translateZ(0) rotateX(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .tilt-in, .slide-in, .parallax-element');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add parallax class to key elements
    const elementsToParallax = [
        '.hero-content',
        '.section-title', 
        '.section-subtitle',
        '.filters',
        '.platform-card'
    ];
    
    elementsToParallax.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.classList.add('parallax-element'));
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
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
}
