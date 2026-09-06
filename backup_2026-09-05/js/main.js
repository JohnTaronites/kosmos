/* ============================================
   GŁÓWNA NAWIGACJA - podświetlanie aktywnej strony
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.navbar-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href').toLowerCase();
    let isActive = false;

    if ((currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '') &&
      (href === 'index.html' || href === '#' || href === '/')) {
      isActive = true;
    } else if (currentPath.includes('uklad-sloneczny') && href.includes('uklad-sloneczny')) {
      isActive = true;
    } else if (currentPath.includes('ksiezyce') && href.includes('ksiezyce')) {
      isActive = true;
    } else if (currentPath.includes('dalekie-obiekty') && href.includes('dalekie-obiekty')) {
      isActive = true;
    }

    if (isActive) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const exploreCards = document.querySelectorAll('.explore-card');
  exploreCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});