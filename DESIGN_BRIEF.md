# DESIGN BRIEF — 3 sites vitrine · Colin Philippe (bijouterie-horlogerie, Chêne-Bourg GE)

Contrat de build. Source de contenu : `shared/content.md`. Règles UX : digest bible-ux (ci-dessous) + `ux_resources/`.

---

## 🔴 CONTRAINTE CARDINALE — ZÉRO DÉFILEMENT

- Chaque **vue** tient dans **UN viewport** : `height: 100dvh`, `overflow: hidden` sur `html, body`.
- On ne scrolle **jamais**. La navigation = **changement de vue** (JS montre/cache + transition courte), pas du scroll.
- Vrai sur **laptop** (cible 1366×768 et 1440×900) **ET mobile** (cible 390×844, 360×740).
- Pas de scroll horizontal non plus. Tout est contenu, dimensionné en `dvh`/`clamp`.

## Architecture — SPA-like multi-vues, no-scroll

Vues (chacune plein écran) :
1. **Accueil** — marque + baseline + positionnement (créateur bijoux **main** + **horloger** proximité) + **5 boutons catégories** + accès Avis/Contact.
2. **5 × Catégorie** (Colliers · Bracelets · Bagues · Boucles · Montres) — chacune : **5 images produit + légende** sous chaque image.
3. **Avis** — bloc avis Google (étoiles or, note moyenne, Schema.org AggregateRating).
4. **Contact** — adresse Rue de Genève 71 Chêne-Bourg, tél, horaires, CTA/carte.

Transition entre vues : fade / slide court **150–250 ms**, easing ease-out, **coupé si `prefers-reduced-motion`**.

## Layout d'une vue Catégorie (le puzzle no-scroll)

- **Légende** sous chaque image : `Nom — matière / carats · prix` (ex. *« Créoles — or jaune 18 ct · Sur devis »*). Petit (12–14px), 1–2 lignes.
- **Laptop** : 5 cartes en **ligne** (`flex`, ~1/5 largeur chacune), image portrait + légende dessous. Titre de catégorie compact en haut.
- **Mobile** : 5 cartes **empilées** remplissant `100dvh` (`flex: 1` chacune, image en `object-fit:cover` à gauche + légende à droite, format « liste ») — OU grille 2 colonnes compacte. **Zéro scroll** : on calcule pour que ça rentre.
- Image : `aspect-ratio` fixe + `object-fit: cover` → swap d'URL sans casser le layout. `loading="lazy"` sauf 1ʳᵉ. `width`/`height` explicites (zéro CLS).

## Les 3 variantes (le nav change, la contrainte no-scroll reste partout)

| Variante | Nav | Direction |
|---|---|---|
| **V1** `v1-elegant-topnav` | Barre **HAUTE** horizontale | Sobre, élégante, luxe discret. Référence qualité. |
| **V2** `v2-sidebar` | **GAUCHE** (rail/sidebar vertical) | Même sobriété, nav latérale. |
| **V3** `v3-creative` | Carte blanche | Créatif/original — mais **toujours** no-scroll + responsive + 5 catégories + avis + positionnement. |

## bible-ux — appliquer TOUT (couleurs incluses, ordre de Sky)

- **Couleur** : palette **60-30-10**, **or en accent 10%** (CTA/prix/actif/liens), neutres **chauds tintés** (pas gris pur), fond ivoire chaud. Contraste **WCAG ≥4.5:1** corps, ≥3:1 large/UI. → **tokens hex + contrastes fournis par l'agent bible-ux** (ne pas improviser).
- **Typo** : **Playfair Display** (titres) + sans corps (Raleway/Inter), fluid `clamp()`, corps min **16px**, line-height par rôle (label 1.2 / copy 1.5).
- **Spacing** strict **4px** (4·8·12·16·24·32·48·64). **Focus ring** 2px offset 2. **Motion** 150–250ms sans bounce + reduced-motion obligatoire. **Shadows** subtiles (bordure OU ombre, pas les deux).
- **Avis** : étoiles remplies `#f59e0b`, note numérique + nb toujours affichés, `role="img" aria-label`, **Schema.org**.
- **A11y** : landmarks `<header><nav><main><footer>`, skip-link, `lang="fr"`, alt descriptifs sur packshots, focus visible non masqué, tout au clavier, Escape ferme menus/vues.

## Technique

- **HTML/CSS/JS pur**, 1 dossier autonome par variante, zéro build. Ouvrable en `file://` (scripts/CSS classiques, pas de module ES ni fetch).
- Polices : self-host idéal ; fallback Google Fonts `<link>` acceptable pour la maquette.
- Images : URLs CDN vérifiées (agent images) — **5 par catégorie** + hero + boutique + artisan.
