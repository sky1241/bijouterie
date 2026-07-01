# Digest bible-ux — appliqué au projet Colin Philippe

> Extrait + distillé de `ux_resources/` (WEB.md §… + VALUES.md canonique) par agents dédiés.
> Objectif : construire n'importe quelle variante **sans re-lire 15k lignes**. Tokens prêts = `:root` de n'importe quel `v*/css/style.css`.

## Socle (à câbler en tokens d'abord)
- **Breakpoints** : sm 480 · md 768 · lg 1024 · xl 1280. Mobile <768 = 1 col, tablet = 2, desktop = 3+.
- **Spacing base 4px** : 4·8·12·16·24·32·48·64·80·96. Jamais 7/13/22.
- **Cibles tactiles** : min 44×44px, ≥8px entre cibles.
- **Contraste WCAG 2.2** : corps 4.5:1, texte large/UI 3:1. (Palette ci-dessous = 21/21 paires vérifiées AA.)
- **Focus ring** : `outline:2px solid var(--color-focus); outline-offset:2px`. Jamais `outline:none` nu.
- **Container** : max 1200–1280px, `padding-inline: clamp(1rem,5vw,2.5rem)`. Marges généreuses = signal premium.

## PALETTE (contrastes vérifiés AA — ne pas changer les hex sans revérif)
```
--color-bg-page:#FAF6EE  --color-surface-1:#FFFFFF  --color-surface-2:#F2EADA   (60% fonds)
--color-ink:#1C1813      --color-ink-soft:#5A5144                                (texte)
--color-border-subtle:#E7DECC  --color-border-strong:#8C7B5D                     (filets/inputs)
--color-gold:#A9863F     --color-gold-hover:#A07E3A  --color-gold-strong:#775B24  --color-gold-soft:#EFE4CB  (accent 10%)
```
Règles d'or (littéralement) :
- **60-30-10** : 60% ivoire, 30% surfaces+texte, **10% or réservé CTA/prix/liens/actifs**. Jamais de grandes surfaces or.
- **Bouton or `#A9863F` = texte ENCRE `#1C1813`** (5.19:1). ⛔ Blanc sur or échoue (3.1:1).
- **Or en texte (liens/prix) = `--color-gold-strong #775B24`** (5.89:1 sur ivoire). Jamais `--color-gold` en petit texte.
- Neutres **chauds tintés or**, jamais gris pur.

## TYPO
- **Playfair Display** (titres, serif) + **Raleway** (corps/UI, sans). Max 2 familles. Corps min **16px**.
- Échelle **fluide clamp()** (voir tokens `--fs-*`). Line-height : Label 1.2 (nav/boutons) · Copy 1.5 (paragraphes).
- Prod : self-host WOFF2 (RGPD). Maquette : `<link>` Google Fonts OK.

## COMPOSANTS
- **Nav haute** : 56/64px, sticky discret, liens gap 24px, actif = souligné or + `aria-current`. Hamburger <768/900px, bouton 44px, `aria-expanded`, Escape ferme.
- **Nav latérale** : 240–280px déployée, 64–72px repliée, actif = bordure gauche 3px. Mobile → drawer/bottom bar.
- **Cartes produit** : `border-radius:12px`, **bordure OU ombre pas les deux**, image `aspect-ratio` + `object-fit:cover`, hover retenu `translateY(-2/3px)` + shadow (gate `@media (hover:hover)`), `loading="lazy"` + `width/height` (zéro CLS).
- **Avis** : étoiles or (`#C79A3C`/`#f59e0b`), **toujours la valeur numérique**, avatar 32–48px rond, `role="img" aria-label`. Schema.org AggregateRating **seulement si vrais avis** (pas de faux structured data).

## MOTION
- 150–250ms. hover 150 ease-out, état 200, entrée 250. **Pas de spring/bounce** (fait "jouet"). Fade/élévation douce.
- `@media (prefers-reduced-motion: reduce)` OBLIGATOIRE (couper transitions/anim).

## A11Y
- Landmarks `<header><nav><main><footer>`, skip-link, `lang="fr"`, hiérarchie h1>h2>h3.
- `alt` descriptif sur packshots (matière + type). Focus visible jamais masqué. Tout au clavier, Escape sort.
- Pas de scroll horizontal à 320px. Texte resize 200%.

---
**Priorité rendu luxe** : tokens → beaucoup de blanc → Playfair+Raleway → or en accent 10% → motion retenu → images lazy dimensionnées → étoiles or + Schema.org (si vrais avis).
