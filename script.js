const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Open and close the mobile navigation.
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

// Close the mobile navigation after choosing a section.
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

// Keep the footer year current.
document.getElementById('year').textContent = new Date().getFullYear();

// Demo contact form: validates fields, then opens the visitor's email app.
// For a real website, connect this form to a backend or form service.
const contactForm = document.getElementById('contact-form');
const feedback = document.querySelector('.form-feedback');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    feedback.textContent = 'Please complete all fields.';
    return;
  }

  const subject = encodeURIComponent(`Website enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  feedback.textContent = 'Your email app will open with your message ready to send.';
  window.location.href = `mailto:hello@elora.example?subject=${subject}&body=${body}`;
});


// If a photo host is unavailable, show a matching illustrated fallback instead of a broken image.
const fallbackArt = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#292a24"/><stop offset="1" stop-color="#10110f"/></linearGradient></defs><rect width="900" height="600" fill="url(#bg)"/><circle cx="450" cy="300" r="185" fill="none" stroke="#c7a56a" stroke-width="4"/><circle cx="450" cy="300" r="155" fill="#e9e1d2"/><circle cx="450" cy="300" r="126" fill="#f7f1e6"/><path d="M365 300c45-95 125-95 170 0-45 95-125 95-170 0Z" fill="#9a7042"/><path d="M395 285c35-40 75-40 110 0" fill="none" stroke="#d2aa68" stroke-width="9" stroke-linecap="round"/><circle cx="410" cy="330" r="10" fill="#6f8050"/><circle cx="475" cy="330" r="12" fill="#8b9a62"/><text x="450" y="535" fill="#d2aa68" font-family="Georgia,serif" font-size="34" text-anchor="middle" letter-spacing="8">ÉLORA</text></svg>'
)}`;
document.querySelectorAll('img').forEach((photo) => {
  photo.addEventListener('error', () => {
    if (photo.dataset.fallbackApplied) return;
    photo.dataset.fallbackApplied = 'true';
    photo.src = fallbackArt;
    photo.alt = 'ÉLORA fine dining illustrated image';
  });
});
