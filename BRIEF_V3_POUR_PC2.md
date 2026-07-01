# BRIEF V3 — pour le cousin Claude (pc2)

Salut cousin. Tu es sur **pc2**. Claude sur **pc3** (moi) construit V1 et V2 d'un projet client. **Toi tu fais la V3.** Voici tout ce qu'il te faut.

## Le projet
Site **vitrine** pour un vrai client : **Colin Philippe**, bijouterie-horlogerie à Chêne-Bourg (Genève). Le client ne sait pas ce qu'il veut → on lui présente **3 versions différentes** pour qu'il choisisse.
- **V1** (`v1-elegant-topnav/`) : sobre, nav en barre haute. **Déjà faite** (moi) — sert de référence QUALITÉ, à NE PAS copier.
- **V2** (`v2-sidebar/`) : nav à gauche. En cours (moi).
- **V3** (`v3-creative/`) : **TOI. Carte blanche. Sois créatif et original.** C'est la version où tu te lâches — layout, ambiance, animations, tout ce que tu veux, tant que les contraintes dures ci-dessous sont respectées.

## Client (infos VÉRIFIÉES au registre du commerce — utilise-les, n'invente pas)
- **Colin Philippe** — « Bijouterie-Horlogerie, Philippe Colin », entreprise individuelle **depuis 1990**.
- Adresse : **Rue de Genève 71, 1225 Chêne-Bourg (GE)**. Tél : **022 348 75 80**. Pas de site web existant.
- Activité déclarée « **fabrication** et vente » → **positionnement clé** : *créateur de bijoux à la main* (le prestige) **+** *horloger de proximité* (changement de pile, bracelets de montre, réparation — l'accroche quotidienne). **Les deux doivent se voir.**

## ⛔ CONTRAINTES DURES (non négociables, valent pour V3 aussi)
1. **ZÉRO DÉFILEMENT.** Chaque vue tient dans **un viewport** (`100dvh`, `overflow:hidden` sur `html,body`). On ne scrolle jamais : on **change de vue** en cliquant (transition). Vrai sur **laptop ET mobile**.
2. **5 catégories** : Colliers · Bracelets · Bagues · Boucles d'oreilles · Montres. Chaque catégorie = **5 images produit + une légende** (`Nom — matière/ct · prix`).
3. **Section Avis** (les avis sont des **EXEMPLES** — dis-le, ne fabrique pas de faux `AggregateRating` Schema.org).
4. **Responsive** impeccable laptop (1366×768) + mobile (390×844), toujours sans scroll.
5. **bible-ux appliqué** (couleurs, typo, contraste, motion, a11y). Voir `shared/bible-ux-digest.md`.
6. **HTML/CSS/JS pur**, zéro build, ouvrable en `file://`.

## Ce que tu lis AVANT de coder (dans le repo)
- `DESIGN_BRIEF.md` — le contrat complet (archi vues, layout no-scroll, les 3 variantes).
- `shared/content.md` — tout le contenu (produits, avis, contact, à-propos).
- `shared/site-data.js` — **les données prêtes** (`window.SITE`) : 5 catégories × 5 produits avec images CDN vérifiées, avis, infos. **Réutilise-les** (`<script src="../shared/site-data.js">`), ne réinvente pas le contenu ni les images.
- `shared/bible-ux-digest.md` — règles + **palette vérifiée WCAG** (hex à réutiliser).
- `shared/images.json` — images de secours (hero, boutique, artisan) si tu veux plus.
- `v1-elegant-topnav/` — référence qualité (regarde, ne copie pas — ta V3 doit être VISUELLEMENT différente).

## Setup (à faire en premier)
```bash
cd ~/bijouterie
git clone https://github.com/sky1241/bible-ux.git ux_resources   # règles UX profondes (gitignoré)
git checkout -b v3-creative                                       # ta branche à toi
```

## Livrable
- Dossier **`v3-creative/`** autonome : `index.html` + `css/` + `js/`. Peut charger `../shared/site-data.js`.
- Ambiance : luxe/joaillerie mais **ta patte créative**. Étonne. (idées libres : plein écran immersif, transitions élégantes, curseur/parallax discret, disposition non-conventionnelle des 5 catégories… tant que ça reste no-scroll, responsive, lisible, bible-ux.)

## Git (important)
- Travaille **uniquement sur la branche `v3-creative`**, **uniquement dans `v3-creative/`**. Ne touche pas `main`, `v1`, `v2`, `shared/`.
- Commit + `git push -u origin v3-creative`. (pc2 est authentifié sky1241, tu peux push.)

## Règles Sky (respecte-les)
- **Honnêteté totale.** Avis = exemples, dis-le. **Pas de claim sans preuve** : ouvre ta page (screenshot / test réel) AVANT de dire que c'est fini. Si un truc marche pas, dis-le.
- Pas d'enrobage. Français SMS de Sky = comprendre, pas corriger.
- Quand tu as fini : commit clair + écris un court récap (ce que t'as fait, captures, ce qui marche/marche pas) dans `v3-creative/NOTES_PC2.md`.

Go. 🛠️
