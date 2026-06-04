(function () {
      const btn   = document.getElementById('hamburger-btn');
      const panel = document.getElementById('mobile-panel');
 
      /** Abre o cierra el menú móvil */
      function toggleMenu(forceClose = false) {
        const isOpen = btn.classList.contains('is-active') && !forceClose;
 
        btn.classList.toggle('is-active', !isOpen);
        panel.classList.toggle('is-open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
        panel.setAttribute('aria-hidden', String(isOpen));
      }
 
      /* Clic en el botón hamburguesa */
      btn.addEventListener('click', () => toggleMenu());
 
      /* Cierra al hacer clic en cualquier enlace del panel móvil */
      panel.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
      });
 
      /* Cierra al hacer clic fuera del navbar/panel */
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && !e.target.closest('.nav-mobile-panel')) {
          if (btn.classList.contains('is-active')) toggleMenu(true);
        }
      });
 
      /* Cierra al presionar Escape */
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && btn.classList.contains('is-active')) {
          toggleMenu(true);
          btn.focus();
        }
      });
 
      /* Cierra si el viewport se amplía por encima del breakpoint */
      const mq = window.matchMedia('(min-width: 781px)');
      mq.addEventListener('change', (e) => {
        if (e.matches && btn.classList.contains('is-active')) toggleMenu(true);
      });
    })();





    (function () {
      'use strict';
 
      const revealElements = document.querySelectorAll('[data-reveal]');
      if (!revealElements.length) return;
 
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
 
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // fire once
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -30px 0px'
        }
      );
 
      revealElements.forEach(function (el) {
        observer.observe(el);
      });
    })();