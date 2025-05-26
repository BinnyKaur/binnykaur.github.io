// Portfolio data
const portfolioData = {
    skills: [
        {
            title: "Analytics & Visualization",
            icon: "fas fa-chart-bar",
            skills: ["Power BI", "Tableau", "MS Excel", "Looker", "Visio", "QuickSight"]
        },
        {
            title: "Programming Languages",
            icon: "fas fa-code",
            skills: ["SQL", "Python", "R"]
        },
        {
            title: "Cloud & Databases",
            icon: "fas fa-cloud",
            skills: ["MySQL", "MS SQL Server", "PostgreSQL", "AWS RedShift", "EC2", "Glue", "Athena", "S3"]
        },
        {
            title: "Project Management & ERP",
            icon: "fas fa-award",
            skills: ["SAP MM", "SAP IBP", "SAP R/3", "Confluence", "Asana", "JIRA", "Notion", "MS Project"]
        }
    ],
    
    functionalSkills: [
        "Data Storytelling", "KPI Tracking", "Cross-Functional Collaboration", 
        "Business Requirements Documentation", "Business Architecture Modeling", 
        "Gap & Impact Analysis", "Solutions Design", "User Acceptance Testing", 
        "SDLC", "Stakeholder Management"
    ],
    
    certifications: [
        { name: "AWS Certified Cloud Practitioner", icon: "☁️" },
        { name: "Certified Scrum Master", icon: "🏆" },
        { name: "Tableau Desktop Specialist", icon: "📊" },
        { name: "Google Advanced Data Analytics", icon: "📈" }
    ],
    
    experience: [
        {
            title: "Data Analyst",
            company: "Giesecke+Devrient",
            location: "Markham, ON",
            period: "Jan 2025 – Present",
            description: "Developed interim Planning Product Configuration database achieving 45% reduction in data inconsistencies. Created comprehensive PowerBI dashboards reducing reporting time by 60%.",
            technologies: ["PowerBI", "SQL Server", "SAP BW"]
        },
        {
            title: "Graduate Assistant",
            company: "University of Windsor",
            location: "Windsor, ON",
            period: "May 2024 – Apr 2025",
            description: "Conducted one-on-one sessions to assist graduate students with data analysis concepts. Evaluated assignments and developed course materials.",
            technologies: ["Teaching", "Data Analysis"]
        },
        {
            title: "Business Analyst",
            company: "Evato Technology Pvt. Ltd.",
            location: "Gurugram, IN",
            period: "Feb 2022 – Nov 2022",
            description: "Reduced lead time by 15% for new customer on-boarding. Facilitated implementation of unique ID serialization web app enhancing traceability for 500M+ products.",
            technologies: ["Process Optimization", "Web Applications"]
        },
        {
            title: "Supply Chain Analyst",
            company: "Grofers India (Blinkit)",
            location: "Gurugram, IN",
            period: "Oct 2019 – Sep 2021",
            description: "Conducted supply chain data analysis resulting in 3.5% decrease in operational costs. Built ETL pipeline using Python for automated daily reporting.",
            technologies: ["Python", "ETL", "MySQL"]
        },
        {
            title: "Supply Chain Analyst",
            company: "Vedanta Resources Ltd.",
            location: "Chhattisgarh, IN",
            period: "Aug 2018 – Aug 2019",
            description: "Optimized inventory management using Tableau Dashboard reducing stockouts by 40%. Achieved $137K annual savings through data-driven vendor evaluation.",
            technologies: ["Tableau", "Inventory Management"]
        }
    ],
    
    education: [
        {
            degree: "Masters in Business Data Analytics",
            institution: "University of Windsor",
            year: "June 2024",
            description: "Advanced coursework in statistical analysis, machine learning, data visualization, and business intelligence with focus on practical applications in real-world scenarios.",
            icon: "fas fa-graduation-cap"
        },
        {
            degree: "BE in Electronics Engineering",
            institution: "Thapar Institute of Engineering & Technology",
            year: "June 2018",
            description: "Strong foundation in analytical thinking, problem-solving, and technical concepts with specialization in electronic systems and data processing.",
            icon: "fas fa-microchip"
        }
    ],
    
    projects: [
        {
            title: "National Bank of Canada Case Study",
            award: "1st Position",
            description: "Developed comprehensive marketing strategies using Statistics Canada data, applying advanced segmentation, portfolio analysis, and data mining techniques to drive business insights.",
            technologies: ["Tableau", "Excel", "Data Mining"],
            imageAlt: "Financial data analytics dashboard with charts and KPIs",
            link: "#"
        },
        {
            title: "Solana Community Sentiment Analysis Pipeline",
            description: "Built an automated AWS pipeline using Python and PRAW API on Lambda to extract Reddit community data daily, utilizing EventBridge scheduler with S3 storage and QuickSight visualizations.",
            technologies: ["AWS", "Python", "Lambda", "QuickSight"],
            imageAlt: "Cloud computing architecture with AWS services and data pipeline visualization",
            link: "#"
        }
    ],
    
    contactInfo: [
        {
            icon: "fas fa-envelope",
            title: "Email",
            value: "binny.kaur@outlook.com",
            href: "mailto:binny.kaur@outlook.com"
        },
        {
            icon: "fas fa-chart-bar",
            title: "Tableau Public",
            value: "View My Dashboards",
            href: "https://public.tableau.com/app/profile/binny.kaur"
        },
        {
            icon: "fab fa-linkedin",
            title: "LinkedIn",
            value: "Binny-Kaur",
            href: "https://linkedin.com/in/binny-kaur"
        },
        {
            icon: "fab fa-github",
            title: "GitHub",
            value: "BinnyKaur",
            href: "https://github.com/BinnyKaur"
        }
    ]
};

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    setupEventListeners();
    createFloatingParticles();
    setupScrollAnimations();
    setupNavigation();
});

// Initialize portfolio content
function initializePortfolio() {
    renderSkills();
    renderFunctionalSkills();
    renderCertifications();
    renderExperience();
    renderEducation();
    renderProjects();
    renderContactInfo();
}

// Render skills section
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    portfolioData.skills.forEach((category, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = `card hover-lift transition-all duration-500 animate-slide-up`;
        skillCard.style.animationDelay = `${index * 200}ms`;
        
        skillCard.innerHTML = `
            <div class="flex items-center gap-3 mb-4">
                <div class="animate-float">
                    <i class="${category.icon} text-2xl text-primary"></i>
                </div>
                <h3 class="text-xl font-semibold gradient-text">${category.title}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
                ${category.skills.map((skill, skillIndex) => `
                    <span class="badge hover-lift" style="animation-delay: ${skillIndex * 100}ms">
                        ${skill}
                    </span>
                `).join('')}
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

// Render functional skills
function renderFunctionalSkills() {
    const functionalSkills = document.getElementById('functional-skills');
    
    portfolioData.functionalSkills.forEach((skill, index) => {
        const skillBadge = document.createElement('span');
        skillBadge.className = 'badge hover-lift animate-bounce-in';
        skillBadge.style.animationDelay = `${index * 50}ms`;
        skillBadge.textContent = skill;
        
        functionalSkills.appendChild(skillBadge);
    });
}

// Render certifications
function renderCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');
    
    portfolioData.certifications.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = `card text-center hover-lift transition-all duration-500 animate-slide-up`;
        certCard.style.animationDelay = `${index * 100}ms`;
        
        certCard.innerHTML = `
            <div class="text-4xl mb-4 animate-float">${cert.icon}</div>
            <h4 class="font-medium text-gray-800">${cert.name}</h4>
        `;
        
        certificationsGrid.appendChild(certCard);
    });
}

// Render experience timeline
function renderExperience() {
    const experienceTimeline = document.getElementById('experience-timeline');
    
    portfolioData.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item relative flex items-center justify-between w-full mb-8 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
        }`;
        
        timelineItem.innerHTML = `
            <div class="hidden lg:block order-1 w-5/12"></div>
            
            <div class="z-20 flex items-center justify-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full hidden lg:flex">
                <span class="font-semibold text-sm text-white">${index + 1}</span>
            </div>
            
            <div class="order-1 w-full lg:w-5/12 card hover-lift">
                <h3 class="text-xl font-bold gradient-text mb-2">${exp.title}</h3>
                <p class="text-primary font-medium mb-1">${exp.company}</p>
                <p class="text-sm text-gray-500 mb-4">${exp.period}</p>
                <p class="text-gray-600 text-sm leading-relaxed mb-4">${exp.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${exp.technologies.map(tech => `
                        <span class="badge hover-lift">${tech}</span>
                    `).join('')}
                </div>
            </div>
        `;
        
        experienceTimeline.appendChild(timelineItem);
    });
}

// Render education section
function renderEducation() {
    const educationGrid = document.getElementById('education-grid');
    
    portfolioData.education.forEach((edu, index) => {
        const eduCard = document.createElement('div');
        eduCard.className = 'card hover-lift transition-all duration-500';
        
        eduCard.innerHTML = `
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <i class="${edu.icon} text-white text-2xl"></i>
                    </div>
                </div>
                <div class="ml-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${edu.degree}</h3>
                    <p class="text-primary font-medium mb-2">${edu.institution}</p>
                    <p class="text-gray-600 mb-4">Graduated: ${edu.year}</p>
                    <p class="text-gray-600 text-sm leading-relaxed">${edu.description}</p>
                </div>
            </div>
        `;
        
        educationGrid.appendChild(eduCard);
    });
}

// Render projects section
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = `card hover-lift transition-all duration-500 animate-slide-up overflow-hidden`;
        projectCard.style.animationDelay = `${index * 200}ms`;
        
        projectCard.innerHTML = `
            <div class="w-full h-48 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center relative overflow-hidden mb-6 -m-6 mb-6">
                <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
                <div class="text-gray-600 text-center relative z-10">
                    <div class="text-lg font-medium animate-pulse-glow">${project.imageAlt}</div>
                </div>
            </div>
            
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold gradient-text">${project.title}</h3>
                ${project.award ? `
                    <span class="badge animate-bounce-in hover-lift bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">
                        <i class="fas fa-trophy mr-1 animate-float"></i>
                        ${project.award}
                    </span>
                ` : ''}
            </div>
            
            <p class="text-gray-600 mb-4 leading-relaxed">${project.description}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies.map(tech => `
                    <span class="badge hover-lift">${tech}</span>
                `).join('')}
            </div>
            
            <a href="${project.link}" class="btn-secondary group">
                <span>View Project</span>
                <i class="fas fa-external-link-alt ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Render contact information
function renderContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    
    portfolioData.contactInfo.forEach((info, index) => {
        const contactItem = document.createElement('div');
        contactItem.className = 'card text-center hover-lift transition-all duration-500 animate-slide-up';
        contactItem.style.animationDelay = `${index * 100}ms`;
        
        contactItem.innerHTML = `
            <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4 animate-float">
                    <i class="${info.icon} text-white text-xl"></i>
                </div>
                <h4 class="text-lg font-medium text-gray-800 mb-2">${info.title}</h4>
                ${info.href ? `
                    <a href="${info.href}" class="text-primary hover:text-secondary transition-colors duration-200 font-medium" ${info.href.startsWith('http') ? 'target="_blank"' : ''}>
                        ${info.value}
                    </a>
                ` : `
                    <p class="text-gray-600">${info.value}</p>
                `}
            </div>
        `;
        
        contactInfo.appendChild(contactItem);
    });
}

// Create floating particles
function createFloatingParticles() {
    const particlesContainer = document.getElementById('particles-container');
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 6 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Contact form is removed, no longer needed
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
}

// Form submission functions removed since contact form is no longer used

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    if (type === 'success') {
        notification.className += ' bg-green-500 text-white';
    } else if (type === 'error') {
        notification.className += ' bg-red-500 text-white';
    } else {
        notification.className += ' bg-blue-500 text-white';
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe other animated elements
    document.querySelectorAll('.fade-in-on-scroll, .slide-in-left-on-scroll, .slide-in-right-on-scroll').forEach(item => {
        observer.observe(item);
    });
}

// Setup navigation active states
function setupNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add tilt effect to cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
        });
    });
});