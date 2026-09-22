/* ==========================================================================
   TSIKY LODGE — nav.js
   Header transparent -> compact au scroll, menu mobile plein écran,
   fermeture au clic sur un lien / Échap, gestion du focus.
   ========================================================================== */

(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuClose = document.querySelector(".mobile-menu-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-list a");

  // --- Header transparent / compact au scroll ---
  if (header) {
    const SCROLL_THRESHOLD = 60;

    function updateHeaderState() {
      const isScrolled = window.scrollY > SCROLL_THRESHOLD;
      header.classList.toggle("site-header--solid", isScrolled);
      header.classList.toggle("site-header--transparent", !isScrolled && header.dataset.transparentHero !== undefined);
    }

    if (header.dataset.transparentHero === undefined) {
      header.classList.add("site-header--solid");
    } else {
      updateHeaderState();
      window.addEventListener("scroll", updateHeaderState, { passive: true });
    }
  }

  // --- Menu mobile plein écran ---
  function openMobileMenu() {
    mobileMenu.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    mobileMenuClose.focus();
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    menuToggle.focus();
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("is-open");
      isOpen ? closeMobileMenu() : openMobileMenu();
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", closeMobileMenu);
    }

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        closeMobileMenu();
      }
    });
  }

  // --- Ancre active dans la nav desktop (one-page) ---
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#'], .mobile-nav-list a[href^='#']");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const match = link.getAttribute("href") === `#${id}`;
              link.toggleAttribute("aria-current", match);
              if (match) link.setAttribute("aria-current", "true");
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // --- Barre d'action fixe mobile : visible après le hero ---
  const mobileBookingBar = document.querySelector(".mobile-booking-bar");
  const heroEl = document.querySelector(".hero, .page-hero");

  if (mobileBookingBar && heroEl && "IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        mobileBookingBar.classList.toggle("is-visible", !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    heroObserver.observe(heroEl);
  } else if (mobileBookingBar) {
    mobileBookingBar.classList.add("is-visible");
  }
})();
