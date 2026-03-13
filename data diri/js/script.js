// script.js - Portfolio Interactivity

// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const nav = document.querySelector('nav');

// Theme Toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️ Light';
}

// Smooth Scrolling
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(255, 255, 255, 0.95)';
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    nav.style.background = 'rgba(255, 255, 255, 0.1)';
    nav.style.boxShadow = 'none';
  }
});

// Typewriter effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typewriter
window.addEventListener('load', () => {
  const title = document.querySelector('h1');
  typeWriter(title, 'Ikhwan - Full Stack Developer');
});

// Mock API fetch for projects (demo full stack)
const projectsContainer = document.querySelector('.project-grid');
const mockProjects = [
  {
    title: 'E-Commerce MERN Stack',
    desc: 'Full stack e-commerce app with React, Node.js, Express, MongoDB. Features auth, payments, admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    img: 'gradient'
  },
  {
    title: 'Task Manager API',
    desc: 'RESTful API with Express, PostgreSQL, JWT auth. Deployed on Heroku with CI/CD.',
    tech: ['Express', 'PostgreSQL', 'JWT', 'Docker'],
    img: 'gradient'
  },
  {
    title: 'Real-time Chat App',
    desc: 'Socket.io chat with React frontend and Node backend. Includes typing indicators, rooms.',
    tech: ['Socket.io', 'React', 'Node.js', 'Redis'],
    img: 'gradient'
  },
  {
    title: 'Portfolio Dashboard',
    desc: 'Personal dashboard with data viz using D3.js, backend analytics with Python Flask.',
    tech: ['D3.js', 'Flask', 'PostgreSQL', 'Chart.js'],
    img: 'gradient'
  }
];

// Populate projects
function loadProjects() {
  projectsContainer.innerHTML = mockProjects.map(project => `
    <div class="project-card">
      <div class="project-img">${project.title}</div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.desc}</p>
        <div class="tech-stack">
          ${project.tech.map(t => `<span class="tech">${t}</span>`).join('')}
        </div>
        <a href="#" class="btn" onclick="window.open('https://github.com', '_blank')">View Project</a>
      </div>
    </div>
  `).join('');
}

loadProjects();

// Contact Form
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Mock submit (full stack: would send to /api/contact)
  alert('Message sent successfully! (Mock submission)');
  form.reset();
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.getElementById('hero');
  hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s, transform 0.6s';
  observer.observe(el);
});

// PWA ready (basic)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js'); // Optional enhancement
}

console.log('Portfolio loaded! Full stack ready 🚀');
