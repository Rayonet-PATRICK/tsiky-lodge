# Images attendues — Tsiky Lodge

Ce dossier contient des **placeholders SVG** légers (fond sable + nom du fichier) générés automatiquement afin que le site soit visuellement cohérent immédiatement. Chaque placeholder porte le même nom que la photo définitive attendue, en `.svg` à la place de `.jpg`.

Le HTML utilise des balises `<picture>` prêtes à recevoir les vraies photos en `.webp` (source) + `.jpg` (fallback). Pour remplacer une image :

1. Déposez vos fichiers `nom-exact.webp` et `nom-exact.jpg` dans ce dossier (mêmes dimensions que ci-dessous).
2. Supprimez ou laissez le `.svg` correspondant (il n'est plus référencé une fois le `.webp`/`.jpg` en place) — ou modifiez le `<picture>` dans le HTML si vous gardez temporairement le SVG.
3. Compressez vos photos (TinyPNG, Squoosh) avant mise en ligne — cible : < 200 Ko par photo en `.webp`.

## Liste des fichiers attendus

| Fichier | Dimensions | Usage / description |
|---|---|---|
| `hero-baie-sakalava.jpg` | 1920×1080 | Hero plein écran, paysage, la baie au coucher du soleil |
| `bungalow-familial-01.jpg` … `04.jpg` | 1600×1067 | Galerie du Bungalow Familial |
| `bungalow-double-01.jpg` … `04.jpg` | 1600×1067 | Galerie du Bungalow Double avec terrasse |
| `chambre-twin-01.jpg` … `03.jpg` | 1600×1067 | Galerie de la chambre twin (deux lits séparés) |
| `chambre-double-01.jpg` … `03.jpg` | 1600×1067 | Galerie de la chambre double (lit double) |
| `kite-michel-kite-01.jpg` … `05.jpg` | 1600×1067 | Section école de kite Michel Kite |
| `mer-emeraude-01.jpg` … `03.jpg` | 1600×1067 | Excursion Mer d'Émeraude |
| `piscine-naturelle-01.jpg` … `02.jpg` | 1600×1067 | Excursion Piscine Naturelle |
| `downwind-01.jpg` … `02.jpg` | 1600×1067 | Downwind kite jusqu'à la Mer d'Émeraude |
| `trois-baies-01.jpg` … `02.jpg` | 1600×1067 | Circuit 4x4 Trois Baies |
| `tsingy-rouge-01.jpg` … `02.jpg` | 1600×1067 | Circuit 4x4 Tsingy Rouge |
| `tsingy-ankarana-01.jpg` … `02.jpg` | 1600×1067 | Circuit 4x4 Tsingy de l'Ankarana |
| `transfert-4x4.jpg` | 1600×1067 | Section Transferts & accès |
| `galerie-01.jpg` … `12.jpg` | 1200×900 | Mosaïque photo générale avec lightbox |
| `logo-tsiky-lodge.svg` | vectoriel | Logo du lodge (déjà finalisé, à adapter à la charte réelle) |
| `og-image.jpg` | 1200×630 | Image de partage Open Graph / Twitter Card |

> ⚠️ **Cas particuliers `hero-baie-sakalava` et `og-image`** : ces deux visuels sont référencés en `.svg` partout dans le code (y compris dans les balises Open Graph / JSON-LD) le temps que les vraies photos soient fournies. Avant la mise en ligne définitive, remplacez-les impérativement par de vrais fichiers **`.jpg`** (Facebook, Twitter/X et LinkedIn n'affichent pas correctement les images `.svg` en partage social) et mettez à jour les références correspondantes dans le `<head>` de chaque page HTML (`og:image`, `twitter:image`, JSON-LD `image`) ainsi que la balise `<img>` du hero dans `index.html`.

## Format recommandé pour les photos définitives

- Format `.webp` en priorité (avec fallback `.jpg`) via `<picture>`.
- Ratio 3:2 pour les photos d'hébergement/excursions, 16:9 pour le hero, 4:3 pour la galerie.
- Compression forte mais qualité visuelle correcte (viser 100–250 Ko par image).
- Toutes les balises `<img>` du site portent déjà `loading="lazy"` (sauf le hero, chargé en priorité) et un `alt` descriptif bilingue via `data-i18n`.
