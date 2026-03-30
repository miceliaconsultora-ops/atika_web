/* ============================================================
   ATIKA SOFTWARE — Main JavaScript
   GSAP + ScrollTrigger animations + UI interactions
   ============================================================ */

// ── GSAP INIT ──
// GSAP and ScrollTrigger loaded via CDN in HTML

document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR SCROLL ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── MOBILE MENU ──
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.navbar-nav');
  const navbarCta = document.querySelector('.navbar-cta');

  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';

      // Append CTA to mobile menu when open
      if (isOpen && navbarCta) {
        const ctaClone = navbarCta.cloneNode(true);
        ctaClone.classList.add('mobile-cta');
        navMenu.appendChild(ctaClone);
      } else {
        const mobileCta = navMenu.querySelector('.mobile-cta');
        if (mobileCta) mobileCta.remove();
      }

      // Animate burger
      const spans = burger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
        burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

  // ── ACTIVE NAV LINK ──
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── ANIMATED COUNTERS ──
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const start = performance.now();
    const isFloat = String(target).includes('.');

    const update = (now) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3); // ease-out cubic
      const current = target * eased;
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
      if (elapsed < 1) requestAnimationFrame(update);
      else el.textContent = prefix + (isFloat ? target.toFixed(1) : target) + suffix;
    };
    requestAnimationFrame(update);
  };

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Counters
    document.querySelectorAll('[data-counter]').forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => animateCounter(el),
        once: true
      });
    });

    // Generic fade-up elements
    gsap.utils.toArray('.gsap-fade-up').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      );
    });

    // Staggered grid children
    document.querySelectorAll('[data-stagger-parent]').forEach(parent => {
      const children = parent.querySelectorAll('[data-stagger-child]');
      gsap.fromTo(children,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: parent,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Scale-in elements
    gsap.utils.toArray('.gsap-scale-in').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.93 },
        {
          opacity: 1, scale: 1,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      );
    });

    // Hero entrance
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
        .fromTo('.hero h1', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, '-=0.2')
        .fromTo('.hero-desc', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '-=0.35')
        .fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-stats', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.25')
        .fromTo('.hero-visual', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');
    }

    // Parallax on hero grid
    const heroGrid = document.querySelector('.hero-grid');
    if (heroGrid) {
      gsap.to(heroGrid, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

  } else {
    // Fallback: show all animated elements without animation
    document.querySelectorAll('.gsap-fade-up, .gsap-fade-in, .gsap-scale-in').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    document.querySelectorAll('[data-counter]').forEach(el => {
      el.textContent = (el.dataset.prefix || '') + el.dataset.target + (el.dataset.suffix || '');
    });
  }

  // ── HERO VIDEO — loop con pausa en último frame ──
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.play();
    heroVideo.addEventListener('ended', () => {
      setTimeout(() => {
        heroVideo.currentTime = 0;
        heroVideo.play();
      }, 3000);
    });
  }

  // ── SMOOTH ANCHOR SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = document.querySelector('.navbar')?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── FORM HANDLING (contact page) ──
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 12 4 10"></polyline><polyline points="9 12 4 22 20 6"></polyline></svg> Enviando...';
      btn.disabled = true;

      // Simulate send (replace with real endpoint)
      setTimeout(() => {
        btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 12 4 10"></polyline><polyline points="9 12 4 22 20 6"></polyline></svg> ¡Mensaje enviado!';
        btn.style.background = '#16a34a';
        contactForm.reset();
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

  // ── CURRENT YEAR IN FOOTER ──
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

});
