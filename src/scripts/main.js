// Load config
fetch('/data/config.json')
  .then(res => res.json())
  .then(config => {
    document.title = `${config.name} – ${config.title}`;
    document.getElementById('name').textContent = config.name;
    document.getElementById('title').textContent = config.title;
    document.getElementById('bio').textContent = config.bio;
    document.getElementById('footer-name').textContent = config.name;

    // Social links
    const socials = document.querySelectorAll('.social-links a');
    socials.forEach(a => {
      if (a.textContent.includes('Twitter')) a.href = config.social.twitter;
      if (a.textContent.includes('LinkedIn')) a.href = config.social.linkedin;
      if (a.textContent.includes('GitHub')) a.href = config.social.github;
    });

    // Projects
    const grid = document.getElementById('project-grid');
    config.projects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank" rel="noopener">View Project →</a>
      `;
      grid.appendChild(card);
    });

    // Year in footer
    const footer = document.querySelector('footer p:nth-of-type(2)');
    if (footer) {
      footer.innerHTML = footer.innerHTML.replace('{{YEAR}}', new Date().getFullYear());
    }
  });

// Theme toggle
const toggle = document.getElementById('theme-toggle');
let theme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);
toggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';

toggle.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

// Visitor Counter (demo using countapi; you can replace with your own analytics)
fetch('https://api.countapi.xyz/hit/portfolio-template/visits')
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById('visitor-count');
    if (el && data && typeof data.value !== 'undefined') {
      el.textContent = data.value;
    }
  })
  .catch(() => {
    const el = document.getElementById('visitor-count');
    if (el) el.textContent = '—';
  });

// Contact Form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const formData = new FormData(e.target);

    try {
      const res = await fetch('/contact', {
        method: 'POST',
        body: formData
      });
      const json = await res.json();
      status.textContent = json.success ? 'Message sent!' : 'Error. Try again.';
      status.style.color = json.success ? 'green' : 'red';
      if (json.success) e.target.reset();
    } catch (err) {
      status.textContent = 'Network error.';
      status.style.color = 'red';
    }
  });
}
