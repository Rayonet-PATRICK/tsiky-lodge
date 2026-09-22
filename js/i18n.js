/* ==========================================================================
   TSIKY LODGE — i18n.js
   Système de traduction FR/EN piloté par attributs data-i18n.
   - data-i18n="cle"            -> remplace le textContent
   - data-i18n-html="cle"       -> remplace innerHTML (mise en forme simple)
   - data-i18n-attr="attr:cle"  -> remplace un attribut (alt, placeholder, title...)
   - data-i18n-attr peut contenir plusieurs paires séparées par ";"
   La langue choisie est mémorisée dans localStorage ("tsiky-lang") et détectée
   au premier chargement via navigator.language. Français par défaut.
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "tsiky-lang";
  const DEFAULT_LANG = "fr";

  const translations = {
    fr: {
      "meta.title.home": "Tsiky Lodge — Lodge de charme, Baie Sakalava, Diego-Suarez",
      "meta.description.home": "Tsiky Lodge, 5 unités seulement, pieds dans l'eau face à la Baie Sakalava, Diego-Suarez. Kitesurf, excursions en mer, circuits 4x4 dans le Nord de Madagascar.",
      "meta.title.hebergements": "Hébergements — Tsiky Lodge",
      "meta.description.hebergements": "Découvrez les 3 hébergements du Tsiky Lodge : bungalow familial, bungalow double et les deux chambres jumelles face à la mer.",
      "meta.title.kite": "École de kitesurf Michel Kite — Tsiky Lodge",
      "meta.description.kite": "Michel Kite, école de kitesurf sur place au Tsiky Lodge, Baie Sakalava. Cours, perfectionnement, location de matériel, moniteurs locaux expérimentés.",
      "meta.title.excursions": "Excursions & circuits — Tsiky Lodge",
      "meta.description.excursions": "Mer d'Émeraude, Piscine Naturelle, downwind en kite, Trois Baies, Tsingy Rouge, Tsingy de l'Ankarana : toutes les excursions au départ du Tsiky Lodge.",
      "meta.title.contact": "Contact & réservation — Tsiky Lodge",
      "meta.description.contact": "Contactez le Tsiky Lodge pour réserver votre séjour, une excursion ou un transfert depuis l'aéroport de Diego-Suarez ou Ankify.",

      "nav.home": "Accueil",
      "nav.accommodations": "Hébergements",
      "nav.kite": "École de kite",
      "nav.excursions": "Excursions",
      "nav.region": "La région",
      "nav.contact": "Contact",
      "nav.book": "Réserver",
      "nav.skip": "Aller au contenu principal",
      "nav.openMenu": "Ouvrir le menu",
      "nav.closeMenu": "Fermer le menu",
      "nav.lang.fr": "FR",
      "nav.lang.en": "EN",
      "nav.langSwitchLabel": "Choisir la langue",

      "hero.eyebrow": "Baie Sakalava · Diego-Suarez · Madagascar",
      "hero.title": "Tsiky Lodge",
      "hero.subtitle": "Cinq unités seulement, les pieds dans l'eau, face à l'une des plus belles baies du Nord de Madagascar. Le vent, le lagon, le silence.",
      "hero.cta": "Réserver mon séjour",
      "hero.scroll": "Défiler",

      "booking.checkin": "Arrivée",
      "booking.checkout": "Départ",
      "booking.guests": "Voyageurs",
      "booking.guests.placeholder": "2 adultes",
      "booking.room": "Hébergement",
      "booking.room.any": "Toutes les unités",
      "booking.room.familial": "Bungalow Familial",
      "booking.room.double": "Bungalow Double",
      "booking.room.twin": "Chambre Twin face à la mer",
      "booking.room.doubleSea": "Chambre Double face à la mer",
      "booking.submit": "Vérifier les disponibilités",

      "intro.kicker": "Bienvenue",
      "intro.title": "L'esprit du lodge",
      "intro.text1": "À Tsiky Lodge, tout commence par l'eau : elle borde la terrasse, elle rythme les journées, elle porte les kites au loin sur la baie. Ici, pas de grand hôtel ni de foule — cinq unités seulement, pensées pour vivre au plus près du lagon et du vent du Nord.",
      "intro.text2": "L'accueil est chaleureux et sans façon, la table simple et généreuse, les journées libres : une session de kite au petit matin, une sortie en mer vers la Mer d'Émeraude, ou simplement le temps qui passe, les pieds dans le sable, face à la Baie Sakalava.",
      "intro.stat1.number": "5",
      "intro.stat1.label": "Unités seulement",
      "intro.stat2.number": "8",
      "intro.stat2.label": "Mois de vent (Varatraza)",
      "intro.stat3.number": "3",
      "intro.stat3.label": "Excursions signature",
      "intro.stat4.number": "1",
      "intro.stat4.label": "École de kite sur place",
      "intro.imageAlt": "Terrasse du lodge face à la Baie Sakalava",

      "accom.kicker": "Hébergements",
      "accom.title": "Cinq unités, face à la mer",
      "accom.lede": "Chaque hébergement du Tsiky Lodge donne sur la baie. Douche et WC privatifs, terrasse ou vue directe sur l'eau : le confort reste simple et soigné, jamais tape-à-l'œil.",
      "accom.bookBtn": "Réserver",
      "accom.viewBtn": "Voir le détail",

      "amenity.seaView": "Vue mer",
      "amenity.indoorShower": "Douche intérieure",
      "amenity.privateWc": "WC privatif",
      "amenity.terrace": "Terrasse privative",
      "amenity.twinBeds": "Deux lits séparés",
      "amenity.doubleBed": "Lit double",
      "amenity.adjoining": "Chambres voisines",

      "accom.familial.name": "Bungalow Familial",
      "accom.familial.desc": "Bungalow familial situé face à la mer, avec vue directe sur la baie de Sakalava. Douche et WC intérieurs. Idéal pour les familles.",
      "accom.familial.capacity": "Jusqu'à 4 personnes",
      "accom.familial.alt1": "Bungalow Familial, vue sur la Baie Sakalava",
      "accom.familial.alt2": "Intérieur du Bungalow Familial",
      "accom.familial.alt3": "Salle de douche du Bungalow Familial",
      "accom.familial.alt4": "Terrasse du Bungalow Familial au coucher du soleil",

      "accom.double.name": "Bungalow Double avec terrasse",
      "accom.double.desc": "Bungalow pour deux personnes avec terrasse privative. Douche et WC intérieurs.",
      "accom.double.capacity": "2 personnes",
      "accom.double.alt1": "Bungalow Double et sa terrasse privative",
      "accom.double.alt2": "Chambre du Bungalow Double",
      "accom.double.alt3": "Terrasse privative du Bungalow Double",
      "accom.double.alt4": "Vue depuis le Bungalow Double",

      "accom.twindouble.name": "Les deux chambres face à la mer",
      "accom.twindouble.desc": "Deux chambres côte à côte, toutes deux face à la mer, chacune avec sa propre douche et son propre WC : une chambre avec deux lits séparés (twin) et une chambre avec un lit double. Configuration idéale pour deux couples, une famille ou un groupe d'amis qui souhaitent être voisins.",
      "accom.twindouble.capacity": "2 chambres voisines, jusqu'à 4 personnes",
      "accom.twin.alt1": "Chambre Twin face à la mer, deux lits séparés",
      "accom.twin.alt2": "Douche privative de la chambre Twin",
      "accom.twin.alt3": "Vue mer depuis la chambre Twin",
      "accom.double2.alt1": "Chambre Double face à la mer, lit double",
      "accom.double2.alt2": "Douche privative de la chambre Double",
      "accom.double2.alt3": "Vue mer depuis la chambre Double",

      "kite.kicker": "École de kitesurf",
      "kite.title": "Michel Kite, sur place",
      "kite.text": "L'école de kitesurf Michel Kite est installée à demeure au Tsiky Lodge, directement sur le spot de Baie Sakalava — l'un des plans d'eau les plus réguliers et les mieux abrités de l'océan Indien.",
      "kite.feature1.title": "Cours pour tous niveaux",
      "kite.feature1.text": "Initiation débutant, perfectionnement et progression encadrée, en petit comité.",
      "kite.feature2.title": "Location de matériel",
      "kite.feature2.text": "Kites, planches et harnais récents, entretenus, disponibles à la location sur place.",
      "kite.feature3.title": "Moniteurs locaux expérimentés",
      "kite.feature3.text": "Une équipe malgache qui connaît le spot par cœur, dans toutes les conditions de vent.",
      "kite.feature4.title": "Un spot d'exception",
      "kite.feature4.text": "Vent régulier, plan d'eau plat et sécurisé, parmi les meilleures conditions de l'océan Indien.",
      "kite.season.label": "Meilleure période pour kiter",
      "kite.season.text": "Le vent du Nord (Varatraza) souffle de façon régulière d'avril à novembre environ, offrant certaines des conditions de glisse les plus fiables de Madagascar.",
      "kite.cta": "En savoir plus sur l'école",
      "kite.imageAlt": "Kitesurfeur sur la Baie Sakalava au coucher du soleil",

      "excursions.kicker": "Excursions & circuits",
      "excursions.title": "Explorer le Nord depuis le lodge",
      "excursions.lede": "Toutes les excursions ci-dessous partent directement du Tsiky Lodge, en mer ou en 4x4.",
      "excursions.tab.sea": "Excursions en mer",
      "excursions.tab.4x4": "Circuits 4x4",

      "excursion.emeraude.title": "La Mer d'Émeraude",
      "excursion.emeraude.desc": "Sortie en mer vers le lagon turquoise emblématique du Nord de Madagascar, aux eaux peu profondes et d'une clarté remarquable.",
      "excursion.emeraude.alt": "Lagon turquoise de la Mer d'Émeraude vu du bateau",

      "excursion.piscine.title": "La Piscine Naturelle",
      "excursion.piscine.desc": "Baignade dans la piscine naturelle, un bassin protégé aux eaux calmes et cristallines, au cœur du décor du Nord malgache.",
      "excursion.piscine.alt": "Baignade dans la Piscine Naturelle",

      "excursion.downwind.title": "Downwind jusqu'à la Mer d'Émeraude",
      "excursion.downwind.desc": "Navigation downwind en kite pour les riders confirmés, avec assistance bateau, jusqu'à la Mer d'Émeraude. L'expérience signature du Tsiky Lodge.",
      "excursion.downwind.alt": "Rider en downwind kite vers la Mer d'Émeraude",
      "excursion.downwind.badge": "Expérience signature",

      "circuit.troisbaies.title": "Les Trois Baies",
      "circuit.troisbaies.desc": "Baie des Dunes, Baie des Pigeons et Baie Sakalava : un circuit 4x4 le long des paysages côtiers les plus spectaculaires de la région.",
      "circuit.troisbaies.alt": "Vue aérienne des Trois Baies du Nord de Madagascar",

      "circuit.tsingyrouge.title": "Le Tsingy Rouge",
      "circuit.tsingyrouge.desc": "Formations rocheuses de latérite sculptées par l'érosion, aux teintes rouge et ocre spectaculaires au coucher du soleil.",
      "circuit.tsingyrouge.alt": "Formations rocheuses du Tsingy Rouge",

      "circuit.ankarana.title": "Les Tsingy de l'Ankarana",
      "circuit.ankarana.desc": "Le massif karstique de l'Ankarana, ses forêts sèches, ses grottes et sa faune endémique, à la journée depuis le lodge.",
      "circuit.ankarana.alt": "Massif karstique des Tsingy de l'Ankarana",

      "excursion.bookBtn": "Réserver cette excursion",

      "transfer.kicker": "Transferts & accès",
      "transfer.title": "Rejoindre le Tsiky Lodge",
      "transfer.lede": "Service de transfert réservé aux clients du lodge, sur demande lors de la réservation.",
      "transfer.airport.title": "Aéroport de Diego-Suarez (Arrachart) → Tsiky Lodge",
      "transfer.airport.desc": "Transfert privé depuis l'aéroport d'Arrachart jusqu'au lodge, à l'arrivée de votre vol.",
      "transfer.ankify.title": "Ankify → Tsiky Lodge",
      "transfer.ankify.desc": "Pour les clients arrivant par Nosy Be ou le Sud via l'embarcadère d'Ankify.",
      "transfer.price": "Sur demande",
      "transfer.requestBtn": "Demander un transfert",
      "transfer.imageAlt": "Véhicule 4x4 de transfert du Tsiky Lodge",
      "transfer.mapTitle": "Localisation du Tsiky Lodge, Baie Sakalava",

      "gallery.kicker": "Galerie",
      "gallery.title": "La baie en images",
      "gallery.lede": "Un aperçu de l'ambiance du lodge, du spot de kite et des environs de la Baie Sakalava.",
      "gallery.imageAlt": "Photo de la galerie Tsiky Lodge",
      "gallery.lightbox.close": "Fermer",
      "gallery.lightbox.prev": "Image précédente",
      "gallery.lightbox.next": "Image suivante",
      "gallery.lightbox.counter": "{current} / {total}",

      "region.kicker": "La région",
      "region.title": "Baie Sakalava & le Nord de Madagascar",
      "region.text1": "Diego-Suarez et sa région comptent parmi les paysages les plus variés de Madagascar : baies sauvages, tsingy, forêts sèches et récifs, à quelques minutes ou quelques heures de piste du lodge.",
      "region.text2": "La Baie Sakalava elle-même est un site mondialement reconnu des kitesurfeurs pour la régularité de son vent et la qualité de son plan d'eau, tout en restant un lieu préservé et peu fréquenté.",
      "region.fact1.title": "Meilleure saison",
      "region.fact1.text": "D'avril à novembre pour le vent (Varatraza) ; climat chaud et sec toute l'année, saison des pluies de décembre à mars.",
      "region.fact2.title": "Climat",
      "region.fact2.text": "Tropical sec, températures agréables toute l'année, idéal pour la mer comme pour les circuits terrestres.",
      "region.fact3.title": "Accès",
      "region.fact3.text": "Vols réguliers vers l'aéroport de Diego-Suarez (Arrachart), ou liaison maritime depuis Nosy Be via Ankify.",
      "region.imageAlt": "Paysage côtier du Nord de Madagascar près de la Baie Sakalava",

      "faq.kicker": "Questions fréquentes",
      "faq.title": "Bon à savoir",
      "faq.q1": "Quelle est la meilleure période pour venir ?",
      "faq.a1": "Pour le kitesurf, la saison du vent du Nord (Varatraza) s'étend d'avril à novembre environ. Le climat reste agréable toute l'année pour un séjour balnéaire ou des excursions.",
      "faq.q2": "Comment réserver une excursion ou un transfert ?",
      "faq.a2": "Via le formulaire de contact, par WhatsApp ou par email. Nos équipes reviennent vers vous rapidement pour organiser votre programme sur place.",
      "faq.q3": "Le lodge convient-il aux familles ?",
      "faq.a3": "Oui : le Bungalow Familial et les deux chambres voisines face à la mer sont particulièrement adaptés aux familles et aux groupes d'amis.",
      "faq.q4": "Faut-il être expérimenté pour kiter à Baie Sakalava ?",
      "faq.a4": "Non : Michel Kite accueille aussi bien les débutants que les riders confirmés, avec du matériel et un encadrement adaptés à chaque niveau.",

      "contact.kicker": "Contact & réservation",
      "contact.title": "Préparer votre séjour",
      "contact.lede": "Une question, une envie d'excursion sur mesure, une demande de transfert ? Écrivez-nous.",
      "contact.form.name": "Nom complet",
      "contact.form.email": "Email",
      "contact.form.phone": "Téléphone",
      "contact.form.subject": "Objet",
      "contact.form.subject.stay": "Séjour au lodge",
      "contact.form.subject.excursion": "Excursion",
      "contact.form.subject.transfer": "Transfert",
      "contact.form.subject.other": "Autre demande",
      "contact.form.message": "Votre message",
      "contact.form.submit": "Envoyer le message",
      "contact.info.title": "Coordonnées",
      "contact.info.address.label": "Adresse",
      "contact.info.address.value": "Baie Sakalava, Diego-Suarez (Antsiranana), Madagascar",
      "contact.info.phone.label": "Téléphone / WhatsApp",
      "contact.info.email.label": "Email",
      "contact.info.social.label": "Réseaux sociaux",
      "contact.whatsappBtn": "Discuter sur WhatsApp",
      "contact.mapTitle": "Carte de localisation du Tsiky Lodge",

      "whatsapp.ariaLabel": "Contacter Tsiky Lodge sur WhatsApp",
      "whatsapp.defaultMessage": "Bonjour, je souhaite avoir des informations sur le Tsiky Lodge.",

      "footer.tagline": "Lodge de charme, Baie Sakalava, Diego-Suarez, Madagascar.",
      "footer.sitemap.title": "Plan du site",
      "footer.explore.title": "Explorer",
      "footer.explore.emeraude": "Mer d'Émeraude",
      "footer.explore.tsingyRouge": "Tsingy Rouge",
      "footer.explore.ankarana": "Tsingy de l'Ankarana",
      "footer.practical.title": "Informations pratiques",
      "footer.practical.transfers": "Transferts & accès",
      "footer.practical.faq": "Questions fréquentes",
      "footer.practical.contact": "Contact",
      "footer.legal.mentions": "Mentions légales",
      "footer.legal.privacy": "Confidentialité",
      "footer.credits": "Site conçu avec soin pour Tsiky Lodge.",
      "footer.rights": "© {year} Tsiky Lodge. Tous droits réservés.",

      "common.bookNow": "Réserver / Book now",
      "common.readMore": "En savoir plus",
      "common.backHome": "Retour à l'accueil",
      "common.night": "nuit",

      "logo.alt": "Logo Tsiky Lodge"
    },

    en: {
      "meta.title.home": "Tsiky Lodge — Boutique Lodge, Sakalava Bay, Diego-Suarez",
      "meta.description.home": "Tsiky Lodge, only 5 units, waterfront on Sakalava Bay, Diego-Suarez. Kitesurfing, sea excursions, 4x4 circuits in Northern Madagascar.",
      "meta.title.hebergements": "Accommodation — Tsiky Lodge",
      "meta.description.hebergements": "Discover Tsiky Lodge's 3 accommodations: the Family Bungalow, the Double Bungalow, and the two adjoining sea-view rooms.",
      "meta.title.kite": "Michel Kite Surf School — Tsiky Lodge",
      "meta.description.kite": "Michel Kite, the kitesurfing school on-site at Tsiky Lodge, Sakalava Bay. Lessons, coaching, equipment rental, experienced local instructors.",
      "meta.title.excursions": "Excursions & tours — Tsiky Lodge",
      "meta.description.excursions": "Emerald Sea, Natural Pool, kite downwind, Three Bays, Red Tsingy, Ankarana Tsingy: all excursions departing from Tsiky Lodge.",
      "meta.title.contact": "Contact & booking — Tsiky Lodge",
      "meta.description.contact": "Get in touch with Tsiky Lodge to book your stay, an excursion, or a transfer from Diego-Suarez airport or Ankify.",

      "nav.home": "Home",
      "nav.accommodations": "Accommodation",
      "nav.kite": "Kite School",
      "nav.excursions": "Excursions",
      "nav.region": "The Region",
      "nav.contact": "Contact",
      "nav.book": "Book Now",
      "nav.skip": "Skip to main content",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "nav.lang.fr": "FR",
      "nav.lang.en": "EN",
      "nav.langSwitchLabel": "Choose language",

      "hero.eyebrow": "Sakalava Bay · Diego-Suarez · Madagascar",
      "hero.title": "Tsiky Lodge",
      "hero.subtitle": "Only five units, right on the water, facing one of the most beautiful bays in Northern Madagascar. The wind, the lagoon, the quiet.",
      "hero.cta": "Book my stay",
      "hero.scroll": "Scroll",

      "booking.checkin": "Check-in",
      "booking.checkout": "Check-out",
      "booking.guests": "Guests",
      "booking.guests.placeholder": "2 adults",
      "booking.room": "Accommodation",
      "booking.room.any": "All units",
      "booking.room.familial": "Family Bungalow",
      "booking.room.double": "Double Bungalow",
      "booking.room.twin": "Sea-view Twin Room",
      "booking.room.doubleSea": "Sea-view Double Room",
      "booking.submit": "Check availability",

      "intro.kicker": "Welcome",
      "intro.title": "The spirit of the lodge",
      "intro.text1": "At Tsiky Lodge, everything starts with the water: it lines the terrace, sets the pace of the day, and carries the kites out over the bay. There is no big hotel here, no crowd — only five units, designed to live close to the lagoon and the wind of the North.",
      "intro.text2": "The welcome is warm and unpretentious, the table simple and generous, the days unscheduled: an early kite session, a boat trip to the Emerald Sea, or simply time passing, feet in the sand, facing Sakalava Bay.",
      "intro.stat1.number": "5",
      "intro.stat1.label": "Units only",
      "intro.stat2.number": "8",
      "intro.stat2.label": "Months of wind (Varatraza)",
      "intro.stat3.number": "3",
      "intro.stat3.label": "Signature excursions",
      "intro.stat4.number": "1",
      "intro.stat4.label": "On-site kite school",
      "intro.imageAlt": "Lodge terrace facing Sakalava Bay",

      "accom.kicker": "Accommodation",
      "accom.title": "Five units, facing the sea",
      "accom.lede": "Every unit at Tsiky Lodge overlooks the bay. Private shower and WC, terrace or direct water view: comfort here stays simple and thoughtful, never showy.",
      "accom.bookBtn": "Book now",
      "accom.viewBtn": "View details",

      "amenity.seaView": "Sea view",
      "amenity.indoorShower": "Indoor shower",
      "amenity.privateWc": "Private WC",
      "amenity.terrace": "Private terrace",
      "amenity.twinBeds": "Two single beds",
      "amenity.doubleBed": "Double bed",
      "amenity.adjoining": "Adjoining rooms",

      "accom.familial.name": "Family Bungalow",
      "accom.familial.desc": "Family bungalow facing the sea, with a direct view over Sakalava Bay. Indoor shower and WC. Ideal for families.",
      "accom.familial.capacity": "Up to 4 guests",
      "accom.familial.alt1": "Family Bungalow, view over Sakalava Bay",
      "accom.familial.alt2": "Interior of the Family Bungalow",
      "accom.familial.alt3": "Shower room of the Family Bungalow",
      "accom.familial.alt4": "Terrace of the Family Bungalow at sunset",

      "accom.double.name": "Double Bungalow with terrace",
      "accom.double.desc": "Bungalow for two with a private terrace. Indoor shower and WC.",
      "accom.double.capacity": "2 guests",
      "accom.double.alt1": "Double Bungalow and its private terrace",
      "accom.double.alt2": "Bedroom of the Double Bungalow",
      "accom.double.alt3": "Private terrace of the Double Bungalow",
      "accom.double.alt4": "View from the Double Bungalow",

      "accom.twindouble.name": "The two sea-view rooms",
      "accom.twindouble.desc": "Two adjoining rooms, both facing the sea, each with its own shower and WC: one room with two single beds (twin) and one room with a double bed. Ideal for two couples, a family, or a group of friends who want to stay side by side.",
      "accom.twindouble.capacity": "2 adjoining rooms, up to 4 guests",
      "accom.twin.alt1": "Sea-view Twin room, two single beds",
      "accom.twin.alt2": "Private shower of the Twin room",
      "accom.twin.alt3": "Sea view from the Twin room",
      "accom.double2.alt1": "Sea-view Double room, double bed",
      "accom.double2.alt2": "Private shower of the Double room",
      "accom.double2.alt3": "Sea view from the Double room",

      "kite.kicker": "Kitesurf School",
      "kite.title": "Michel Kite, right here",
      "kite.text": "The Michel Kite surf school is based permanently at Tsiky Lodge, directly on the Sakalava Bay spot — one of the most consistent and best-protected stretches of water in the Indian Ocean.",
      "kite.feature1.title": "Lessons for all levels",
      "kite.feature1.text": "Beginner introduction, coaching and guided progression, in small groups.",
      "kite.feature2.title": "Equipment rental",
      "kite.feature2.text": "Recent, well-maintained kites, boards and harnesses available for rent on site.",
      "kite.feature3.title": "Experienced local instructors",
      "kite.feature3.text": "A Malagasy team who knows the spot inside out, in every wind condition.",
      "kite.feature4.title": "An exceptional spot",
      "kite.feature4.text": "Steady wind, flat and safe water, among the best conditions in the Indian Ocean.",
      "kite.season.label": "Best time to kite",
      "kite.season.text": "The Varatraza, the wind of the North, blows consistently from around April to November, offering some of the most reliable riding conditions in Madagascar.",
      "kite.cta": "More about the school",
      "kite.imageAlt": "Kitesurfer on Sakalava Bay at sunset",

      "excursions.kicker": "Excursions & Tours",
      "excursions.title": "Explore the North from the lodge",
      "excursions.lede": "Every excursion below departs directly from Tsiky Lodge, by boat or by 4x4.",
      "excursions.tab.sea": "Sea excursions",
      "excursions.tab.4x4": "4x4 circuits",

      "excursion.emeraude.title": "The Emerald Sea",
      "excursion.emeraude.desc": "A boat trip to the iconic turquoise lagoon of the North, with shallow, remarkably clear waters.",
      "excursion.emeraude.alt": "Turquoise lagoon of the Emerald Sea seen from the boat",

      "excursion.piscine.title": "The Natural Pool",
      "excursion.piscine.desc": "A swim in the Natural Pool, a sheltered basin of calm, crystal-clear water at the heart of the Malagasy North's scenery.",
      "excursion.piscine.alt": "Swimming at the Natural Pool",

      "excursion.downwind.title": "Downwind to the Emerald Sea",
      "excursion.downwind.desc": "A kite downwind run for confirmed riders, with boat support, all the way to the Emerald Sea. Tsiky Lodge's signature experience.",
      "excursion.downwind.alt": "Rider on a downwind kite run to the Emerald Sea",
      "excursion.downwind.badge": "Signature experience",

      "circuit.troisbaies.title": "The Three Bays",
      "circuit.troisbaies.desc": "Dune Bay, Pigeon Bay and Sakalava Bay: a 4x4 circuit along some of the region's most spectacular coastal scenery.",
      "circuit.troisbaies.alt": "Aerial view of the Three Bays in Northern Madagascar",

      "circuit.tsingyrouge.title": "The Red Tsingy",
      "circuit.tsingyrouge.desc": "Laterite rock formations carved by erosion, in striking red and ochre hues at sunset.",
      "circuit.tsingyrouge.alt": "Rock formations of the Red Tsingy",

      "circuit.ankarana.title": "The Ankarana Tsingy",
      "circuit.ankarana.desc": "The Ankarana karst massif, its dry forests, caves and endemic wildlife, a day trip from the lodge.",
      "circuit.ankarana.alt": "Karst massif of the Ankarana Tsingy",

      "excursion.bookBtn": "Book this excursion",

      "transfer.kicker": "Transfers & Access",
      "transfer.title": "Getting to Tsiky Lodge",
      "transfer.lede": "Transfer service reserved for lodge guests, on request at the time of booking.",
      "transfer.airport.title": "Diego-Suarez Airport (Arrachart) → Tsiky Lodge",
      "transfer.airport.desc": "Private transfer from Arrachart airport to the lodge, on arrival of your flight.",
      "transfer.ankify.title": "Ankify → Tsiky Lodge",
      "transfer.ankify.desc": "For guests arriving via Nosy Be or the South through the Ankify pier.",
      "transfer.price": "On request",
      "transfer.requestBtn": "Request a transfer",
      "transfer.imageAlt": "Tsiky Lodge 4x4 transfer vehicle",
      "transfer.mapTitle": "Location of Tsiky Lodge, Sakalava Bay",

      "gallery.kicker": "Gallery",
      "gallery.title": "The bay in pictures",
      "gallery.lede": "A glimpse of the lodge's atmosphere, the kite spot, and the surroundings of Sakalava Bay.",
      "gallery.imageAlt": "Photo from the Tsiky Lodge gallery",
      "gallery.lightbox.close": "Close",
      "gallery.lightbox.prev": "Previous image",
      "gallery.lightbox.next": "Next image",
      "gallery.lightbox.counter": "{current} / {total}",

      "region.kicker": "The Region",
      "region.title": "Sakalava Bay & Northern Madagascar",
      "region.text1": "Diego-Suarez and its surroundings hold some of the most varied landscapes in Madagascar: wild bays, tsingy, dry forests and reefs, minutes or a few hours' drive from the lodge.",
      "region.text2": "Sakalava Bay itself is renowned worldwide among kitesurfers for its steady wind and the quality of its water, while remaining an unspoiled, uncrowded place.",
      "region.fact1.title": "Best season",
      "region.fact1.text": "April to November for the wind (Varatraza); hot, dry climate year-round, with a rainy season from December to March.",
      "region.fact2.title": "Climate",
      "region.fact2.text": "Dry tropical climate, pleasant temperatures year-round, ideal for both the sea and inland circuits.",
      "region.fact3.title": "Access",
      "region.fact3.text": "Regular flights to Diego-Suarez airport (Arrachart), or a sea link from Nosy Be via Ankify.",
      "region.imageAlt": "Coastal landscape of Northern Madagascar near Sakalava Bay",

      "faq.kicker": "FAQ",
      "faq.title": "Good to know",
      "faq.q1": "When is the best time to visit?",
      "faq.a1": "For kitesurfing, the Varatraza wind season runs roughly from April to November. The climate stays pleasant year-round for a beach stay or excursions.",
      "faq.q2": "How do I book an excursion or a transfer?",
      "faq.a2": "Through the contact form, WhatsApp, or email. Our team gets back to you quickly to organise your program on site.",
      "faq.q3": "Is the lodge suitable for families?",
      "faq.a3": "Yes: the Family Bungalow and the two adjoining sea-view rooms are particularly well suited to families and groups of friends.",
      "faq.q4": "Do I need experience to kite at Sakalava Bay?",
      "faq.a4": "No: Michel Kite welcomes beginners as well as confirmed riders, with equipment and coaching suited to every level.",

      "contact.kicker": "Contact & Booking",
      "contact.title": "Plan your stay",
      "contact.lede": "A question, a custom excursion in mind, a transfer request? Write to us.",
      "contact.form.name": "Full name",
      "contact.form.email": "Email",
      "contact.form.phone": "Phone",
      "contact.form.subject": "Subject",
      "contact.form.subject.stay": "Stay at the lodge",
      "contact.form.subject.excursion": "Excursion",
      "contact.form.subject.transfer": "Transfer",
      "contact.form.subject.other": "Other request",
      "contact.form.message": "Your message",
      "contact.form.submit": "Send message",
      "contact.info.title": "Contact details",
      "contact.info.address.label": "Address",
      "contact.info.address.value": "Sakalava Bay, Diego-Suarez (Antsiranana), Madagascar",
      "contact.info.phone.label": "Phone / WhatsApp",
      "contact.info.email.label": "Email",
      "contact.info.social.label": "Social media",
      "contact.whatsappBtn": "Chat on WhatsApp",
      "contact.mapTitle": "Location map of Tsiky Lodge",

      "whatsapp.ariaLabel": "Contact Tsiky Lodge on WhatsApp",
      "whatsapp.defaultMessage": "Hello, I would like some information about Tsiky Lodge.",

      "footer.tagline": "Boutique lodge, Sakalava Bay, Diego-Suarez, Madagascar.",
      "footer.sitemap.title": "Sitemap",
      "footer.explore.title": "Explore",
      "footer.explore.emeraude": "Emerald Sea",
      "footer.explore.tsingyRouge": "Red Tsingy",
      "footer.explore.ankarana": "Ankarana Tsingy",
      "footer.practical.title": "Practical information",
      "footer.practical.transfers": "Transfers & access",
      "footer.practical.faq": "FAQ",
      "footer.practical.contact": "Contact",
      "footer.legal.mentions": "Legal notice",
      "footer.legal.privacy": "Privacy",
      "footer.credits": "Site crafted with care for Tsiky Lodge.",
      "footer.rights": "© {year} Tsiky Lodge. All rights reserved.",

      "common.bookNow": "Book now",
      "common.readMore": "Read more",
      "common.backHome": "Back to home",
      "common.night": "night",

      "logo.alt": "Tsiky Lodge logo"
    }
  };

  function detectInitialLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (e) { /* localStorage indisponible */ }

    const nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
    if (nav.startsWith("en")) return "en";
    return DEFAULT_LANG;
  }

  function applyDynamicTokens(str) {
    return str.replace("{year}", new Date().getFullYear());
  }

  function translate(lang, key) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    const value = dict[key];
    if (value === undefined) {
      console.warn(`[i18n] Clé manquante : "${key}" (${lang})`);
      return key;
    }
    return applyDynamicTokens(value);
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = translate(lang, el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = translate(lang, el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const pairs = el.getAttribute("data-i18n-attr").split(";").map((s) => s.trim()).filter(Boolean);
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) {
          el.setAttribute(attr, translate(lang, key));
        }
      });
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", translate(lang, el.getAttribute("data-i18n-placeholder")));
    });

    document.querySelectorAll(".lang-switch button, .mobile-lang-switch button").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    document.dispatchEvent(new CustomEvent("tsiky:langchange", { detail: { lang } }));
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* silencieux si stockage bloqué */ }
    applyTranslations(lang);
  }

  function init() {
    const lang = detectInitialLang();
    applyTranslations(lang);

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
  }

  window.TsikyI18n = {
    setLang,
    translate,
    getCurrentLang: () => document.documentElement.lang || DEFAULT_LANG,
    translations
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
