/* ==========================================================================
   TSIKY LODGE — gallery.js
   Lightbox maison pour la mosaïque photo : ouverture, navigation clavier
   (flèches, Échap), swipe tactile, compteur. Aucune dépendance externe.
   ========================================================================== */

(function () {
  "use strict";

  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  const lightbox = document.querySelector(".lightbox");

  if (!galleryItems.length || !lightbox) return;

  const lightboxImg = lightbox.querySelector(".lightbox-figure img");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");
  const counterEl = lightbox.querySelector(".lightbox-counter");

  let currentIndex = 0;
  let lastFocusedEl = null;

  function updateCounterText() {
    const lang = (window.TsikyI18n && window.TsikyI18n.getCurrentLang()) || "fr";
    const template = window.TsikyI18n
      ? window.TsikyI18n.translate(lang, "gallery.lightbox.counter")
      : "{current} / {total}";
    counterEl.textContent = template
      .replace("{current}", currentIndex + 1)
      .replace("{total}", galleryItems.length);
  }

  function showImage(index) {
    currentIndex = (index + galleryItems.length) % galleryItems.length;
    const sourceImg = galleryItems[currentIndex].querySelector("img");
    lightboxImg.src = sourceImg.currentSrc || sourceImg.src;
    lightboxImg.alt = sourceImg.alt;
    updateCounterText();
  }

  function openLightbox(index) {
    lastFocusedEl = document.activeElement;
    showImage(index);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
  nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });

  document.addEventListener("tsiky:langchange", () => {
    if (lightbox.classList.contains("is-open")) updateCounterText();
  });

  // --- Swipe tactile ---
  let touchStartX = 0;
  const SWIPE_THRESHOLD = 40;

  lightbox.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].clientX;
    },
    { passive: true }
  );

  lightbox.addEventListener(
    "touchend",
    (e) => {
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
      deltaX > 0 ? showImage(currentIndex - 1) : showImage(currentIndex + 1);
    },
    { passive: true }
  );
})();
