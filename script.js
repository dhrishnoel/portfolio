/* =============================================================
   script.js
   Small, self-contained behaviors — no dependencies.
   Each block below is independent, so you can remove any
   section you don't want without breaking the others.
============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------------
     1. MOBILE NAV TOGGLE
  ----------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close the mobile menu after a link is tapped
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------------------------------------
     2. ACTIVE NAV LINK ON SCROLL
     Highlights the nav item matching the section in view.
  ----------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const setActiveLink = () => {
    let currentId = sections[0] ? sections[0].id : '';
    const scrollPos = window.scrollY + 120; // offset for sticky header

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  };

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  /* -----------------------------------------------------------
     3. FADE-IN ON SCROLL
     Adds .in-view to any .fade-in element once it enters
     the viewport. Falls back gracefully if unsupported.
  ----------------------------------------------------------- */
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach((el) => observer.observe(el));
  } else {
    fadeEls.forEach((el) => el.classList.add('in-view'));
  }

  /* -----------------------------------------------------------
     4. HERO TERMINAL TYPING EFFECT
     EDIT ME: change the `lines` array to update what the
     hero terminal panel types out.
  ----------------------------------------------------------- */
  const terminalEl = document.getElementById('terminalCode');

  if (terminalEl) {
    const lines = [
      '>>> import dhrishh as ds',
      '>>> ds.role',
      "'Aspiring Data Scientist'",
      '>>> ds.focus',
      "['Python', 'ML', 'Fintech Analytics']",
    ];

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      terminalEl.textContent = lines.join('\n');
    } else {
      let lineIndex = 0;
      let charIndex = 0;
      let output = '';

      const typeNextChar = () => {
        if (lineIndex >= lines.length) return;

        const currentLine = lines[lineIndex];

        if (charIndex < currentLine.length) {
          output += currentLine[charIndex];
          charIndex += 1;
          terminalEl.textContent = output;
          setTimeout(typeNextChar, 22);
        } else {
          output += '\n';
          lineIndex += 1;
          charIndex = 0;
          terminalEl.textContent = output;
          setTimeout(typeNextChar, 260);
        }
      };

      setTimeout(typeNextChar, 400);
    }
  }

  /* -----------------------------------------------------------
     5. FOOTER YEAR
  ----------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
