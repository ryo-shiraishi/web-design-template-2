/* =====================================================================
   Sample Partners – Main Script
   ===================================================================== */

(function () {
  'use strict';

  /* -------------------------------------------------------------------
     Header: scroll-aware background
  ------------------------------------------------------------------- */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* -------------------------------------------------------------------
     Mobile Menu: open / close / anchor click
  ------------------------------------------------------------------- */
  const mobileMenu  = document.getElementById('mobileMenu');
  const menuOpenBtn = document.getElementById('menuOpen');
  const menuCloseBtn = document.getElementById('menuClose');

  function openMenu() {
    if (!mobileMenu || !menuOpenBtn) return;
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuOpenBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!mobileMenu || !menuOpenBtn) return;
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuOpenBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuOpenBtn)  menuOpenBtn.addEventListener('click', openMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);

  if (mobileMenu) {
    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  /* -------------------------------------------------------------------
     Fade-In on Scroll (replaces motion/react FadeInView)
  ------------------------------------------------------------------- */
  const fadeEls = document.querySelectorAll('.fade-in-view');

  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          const el    = entry.target;
          const delay = parseFloat(el.dataset.delay || '0') * 1000;

          setTimeout(function () {
            el.classList.add('is-visible');
          }, delay);

          observer.unobserve(el);
        });
      },
      { rootMargin: '-100px' }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* -------------------------------------------------------------------
     Smooth scroll for anchor links
  ------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

})();
