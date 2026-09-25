/* ==========================================================================
   TSIKY LODGE — booking.js
   Widget de réservation isolé. Le lodge branchera plus tard un vrai moteur
   de réservation externe (type Booking.com / Beds24 / Cloudbeds).
   Ce fichier construit uniquement l'URL de redirection avec les paramètres
   standard et l'ouvre dans un nouvel onglet. AUCUNE réservation n'est
   traitée ici : c'est un simple aiguillage vers le moteur externe.
   ========================================================================== */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // TODO CLIENT : remplacer par l'URL réelle du moteur de réservation
  // (Beds24, Cloudbeds, Booking Engine WuBook, etc.)
  // ------------------------------------------------------------------
  const BOOKING_ENGINE_URL = "https://REMPLACER-PAR-URL-MOTEUR"; // TODO client

  // ------------------------------------------------------------------
  // Mapping des paramètres d'URL selon le moteur choisi.
  // Les clés à gauche sont nos noms internes ; les valeurs à droite sont
  // les noms de paramètres attendus par le moteur de réservation.
  //
  // Exemples réels à adapter lors du branchement définitif :
  //   - Beds24      : ?checkin=YYYY-MM-DD&checkout=YYYY-MM-DD&numadult=2&propid=XXXX
  //   - Cloudbeds    : ?checkin=YYYY-MM-DD&checkout=YYYY-MM-DD&adults=2&promo=
  //   - WuBook/Booking Engine : paramètres similaires, parfois via sous-domaine
  //     dédié (ex: https://booking.wubook.net/hotel/xxxx?...)
  //
  // Il suffit de modifier les valeurs ci-dessous (jamais les clés internes
  // utilisées dans le reste du code) pour reconfigurer le mapping.
  // ------------------------------------------------------------------
  const PARAM_MAP = {
    checkin: "checkin",
    checkout: "checkout",
    adults: "adults",
    room: "room" // identifiant de la chambre/unité pré-sélectionnée
  };

  // Correspondance entre nos identifiants internes d'hébergement et
  // l'identifiant attendu par le moteur de réservation (à adapter).
  const ROOM_ID_MAP = {
    familial: "bungalow-familial",
    double: "bungalow-double",
    twin: "chambre-twin-mer",
    "double-sea": "chambre-double-mer",
    any: ""
  };

  /**
   * Construit l'URL complète du moteur de réservation à partir des
   * paramètres fournis (checkin, checkout, adults, room).
   */
  function buildBookingUrl({ checkin, checkout, adults, room } = {}) {
    const url = new URL(BOOKING_ENGINE_URL);

    if (checkin) url.searchParams.set(PARAM_MAP.checkin, checkin);
    if (checkout) url.searchParams.set(PARAM_MAP.checkout, checkout);
    if (adults) url.searchParams.set(PARAM_MAP.adults, adults);
    if (room && ROOM_ID_MAP[room]) {
      url.searchParams.set(PARAM_MAP.room, ROOM_ID_MAP[room]);
    }

    return url.toString();
  }

  function redirectToBookingEngine(params) {
    const url = buildBookingUrl(params);
    window.open(url, "_blank", "noopener");
  }

  // --- Barres de réservation (hero + sticky) : formulaire complet ---
  document.querySelectorAll("form[data-booking-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      redirectToBookingEngine({
        checkin: data.get("checkin"),
        checkout: data.get("checkout"),
        adults: data.get("adults"),
        room: data.get("room")
      });
    });
  });

  // --- Boutons "Réserver" ponctuels (fiche hébergement, excursion) ---
  document.querySelectorAll("[data-book-room]").forEach((btn) => {
    btn.addEventListener("click", () => {
      redirectToBookingEngine({ room: btn.getAttribute("data-book-room") });
    });
  });

  document.querySelectorAll("[data-book-generic]").forEach((btn) => {
    btn.addEventListener("click", () => {
      redirectToBookingEngine({});
    });
  });

  window.TsikyBooking = { buildBookingUrl };
})();
