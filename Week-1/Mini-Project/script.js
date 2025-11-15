/* script.js — Interactivity for portfolio
   - smooth scroll on nav links
   - contact form validation and alert
   - theme toggle with localStorage
   - small accessibility helpers
*/

/* ---------- Utility: smooth scroll ---------- */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---------- Theme toggle (light/dark) ---------- */
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

function setTheme(name) {
  if (name === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    root.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', name);
}

/* ---------- Contact form validation & alert ---------- */
const form = document.getElementById('contactForm');
const alertBox = document.getElementById('formAlert');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  alertBox.textContent = '';
  alertBox.style.color = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name) {
    alertBox.textContent = 'Please enter your name.';
    return;
  }

  if (!email) {
    alertBox.textContent = 'Please enter your email.';
    return;
  }

  if (!validateEmail(email)) {
    alertBox.textContent = 'Please enter a valid email address.';
    return;
  }

  if (!message) {
    alertBox.textContent = 'Please type a message.';
    return;
  }

  // All good — show confirmation via alert (core requirement)
  alert(`Thanks ${name}! Your message has been sent.`);
  alertBox.style.color = 'green';
  alertBox.textContent = 'Message sent successfully. Thank you!';
  form.reset();
});

/* Simple email format check */
function validateEmail(email) {
  // Small, conservative regex for basic email format checking
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ---------- Footer year insert ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Mobile menu (optional small helper) ---------- */
const menuBtn = document.getElementById('menuToggle');
menuBtn && menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('.main-nav');
  if (nav) {
    const visible = nav.style.display === 'flex';
    nav.style.display = visible ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.padding = '10px';
    nav.style.background = 'var(--card)';
    nav.style.position = 'absolute';
    nav.style.top = '64px';
    nav.style.right = '16px';
    nav.style.borderRadius = '10px';
    nav.style.boxShadow = '0 8px 24px rgba(2,6,23,0.08)';
  }
});
