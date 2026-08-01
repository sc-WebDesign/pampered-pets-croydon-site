// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden') === false;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    iconOpen.classList.toggle('hidden', isOpen);
    iconClose.classList.toggle('hidden', !isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });
}

// Sticky header shadow on scroll
const header = document.getElementById('site-header');
if (header) {
  const applyShadow = () => {
    header.classList.toggle('shadow-md', window.scrollY > 8);
  };
  applyShadow();
  window.addEventListener('scroll', applyShadow, { passive: true });
}

// FAQ accordion
document.querySelectorAll('.faq-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const panel = trigger.nextElementSibling;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.faq-trigger').forEach((t) => {
      t.setAttribute('aria-expanded', 'false');
      t.querySelector('.faq-icon').textContent = '+';
      t.nextElementSibling.classList.add('hidden');
    });

    if (!isOpen) {
      trigger.setAttribute('aria-expanded', 'true');
      trigger.querySelector('.faq-icon').textContent = '−';
      panel.classList.remove('hidden');
    }
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
