/* ==========================================================================
   TSIKY LODGE — scroll-reveal.js
   Apparitions au scroll (fade + translation) via IntersectionObserver,
   avec décalage progressif (stagger) entre les éléments d'une même grille.
   Parallax léger sur les images marquées [data-parallax], désactivé
   sur mobile et si prefers-reduced-motion.
   ========================================================================== */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Scroll reveal ---
  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  } else {
    // Regroupe les éléments par conteneur parent direct pour le stagger
    const groups = new Map();
    revealTargets.forEach((el) => {
      const parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });

    groups.forEach((els) => {
      els.forEach((el, index) => {
        el.style.transitionDelay = `${Math.min(index * 90, 450)}ms`;
      });
    });

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  // --- Compteurs animés ---
  const counters = document.querySelectorAll(".stat-number[data-count-to]");

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count-to"), 10) || 0;
    const duration = 1200;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(frame);
  }

  if (counters.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      counters.forEach((el) => (el.textContent = el.getAttribute("data-count-to")));
    } else {
      const counterObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => counterObserver.observe(el));
    }
  }

  // --- Parallax léger (désactivé mobile / reduced motion) ---
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  if (parallaxEls.length && isDesktop && !prefersReducedMotion) {
    let ticking = false;

    function updateParallax() {
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
        const offset = (rect.top - window.innerHeight / 2) * speed;
        el.style.transform = `translate3d(0, ${offset * -0.1}px, 0) scale(1.1)`;
      });
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateParallax();
  }
})();
