/* ==========================================================================
   TSIKY LODGE — main.js
   Point d'entrée général : carrousels des fiches hébergement, onglets
   excursions/4x4, accordéon FAQ, bouton WhatsApp flottant, ancrage doux.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------- Carrousels des fiches hébergement ---------------- */
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const slides = Array.from(track ? track.children : []);
    const prevBtn = carousel.querySelector(".carousel-nav--prev");
    const nextBtn = carousel.querySelector(".carousel-nav--next");
    const dotsWrap = carousel.querySelector(".carousel-dots");
    if (!slides.length) return;

    let current = 0;

    slides.forEach((slide, i) => {
      slide.style.display = i === 0 ? "block" : "none";
    });

    let dots = [];
    if (dotsWrap) {
      dots = slides.map((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Photo ${i + 1}`);
        dot.setAttribute("aria-current", i === 0 ? "true" : "false");
        dot.addEventListener("click", () => goTo(i));
        dotsWrap.appendChild(dot);
        return dot;
      });
    }

    function goTo(index) {
      slides[current].style.display = "none";
      if (dots[current]) dots[current].setAttribute("aria-current", "false");
      current = (index + slides.length) % slides.length;
      slides[current].style.display = "block";
      if (dots[current]) dots[current].setAttribute("aria-current", "true");
    }

    if (prevBtn) prevBtn.addEventListener("click", () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goTo(current + 1));
  });

  /* ---------------- Onglets (excursions en mer / circuits 4x4) ---------------- */
  document.querySelectorAll("[data-tabs]").forEach((tabGroup) => {
    const tabs = Array.from(tabGroup.querySelectorAll(".tab-btn"));
    const panels = Array.from(tabGroup.querySelectorAll(".tab-panel"));

    function activate(index) {
      tabs.forEach((tab, i) => {
        const isActive = i === index;
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
        panels[i].classList.toggle("is-active", isActive);
      });
      tabs[index].focus();
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t, j) => {
          t.setAttribute("aria-selected", String(i === j));
          t.tabIndex = i === j ? 0 : -1;
          panels[j].classList.toggle("is-active", i === j);
        });
      });

      tab.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") activate((i + 1) % tabs.length);
        if (e.key === "ArrowLeft") activate((i - 1 + tabs.length) % tabs.length);
      });
    });
  });

  /* ---------------- Accordéon FAQ ---------------- */
  document.querySelectorAll(".accordion-item").forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    if (!trigger || !panel) return;

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? "0px" : `${panel.scrollHeight}px`;
    });
  });

  /* ---------------- Bouton WhatsApp flottant ---------------- */
  // TODO client : remplacer par le vrai numéro WhatsApp du lodge (format international, sans "+")
  const WHATSAPP_NUMBER = "261XXXXXXXXX"; // placeholder — TODO client

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    const lang = (window.TsikyI18n && window.TsikyI18n.getCurrentLang()) || "fr";
    const message = window.TsikyI18n
      ? window.TsikyI18n.translate(lang, "whatsapp.defaultMessage")
      : "Bonjour";
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });

  document.addEventListener("tsiky:langchange", (e) => {
    document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
      const message = window.TsikyI18n.translate(e.detail.lang, "whatsapp.defaultMessage");
      link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    });
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Fermeture douce des ancres avec offset header ---------------- */
  const header = document.querySelector(".site-header");
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;
      window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });
})();
