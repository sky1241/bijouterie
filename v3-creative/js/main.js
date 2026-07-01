/* =========================================================================
   Colin Philippe — V3 « Créative » · rendu + menu plein écran + no-scroll
   ========================================================================= */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) { document.getElementById("main").innerHTML = '<p style="padding:2rem">Erreur : ../shared/site-data.js non chargé.</p>'; return; }
  var i = S.info;
  var pad2 = function (n) { return ("0" + n).slice(-2); };
  function stars(n) { var s = '<span aria-hidden="true">'; for (var k = 1; k <= 5; k++) s += (k <= n) ? '★' : '<span style="color:#4a4030">★</span>'; return s + '</span>'; }
  function initials(name) { return name.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase(); }

  /* nav items (avec numéro pour les catégories) */
  var navItems = [{ slug: "home", label: "Accueil", num: "" }]
    .concat(S.categories.map(function (c, ci) { return { slug: c.slug, label: c.label, num: pad2(ci + 1) }; }))
    .concat([{ slug: "avis", label: "Avis", num: "" }, { slug: "contact", label: "Contact", num: "" }]);

  /* ---- menu overlay ---- */
  document.getElementById("ov-nav").innerHTML = navItems.map(function (n) {
    return '<a class="ov-link" href="#' + n.slug + '" data-view="' + n.slug + '"><span class="num">' + n.num + '</span>' + n.label + '</a>';
  }).join("");
  document.getElementById("ov-foot").innerHTML =
    '<span>' + i.address + ', ' + i.city + '</span>' +
    '<a href="tel:' + i.phoneIntl + '">' + i.phone + '</a>' +
    '<span>' + i.hours[0][0] + ' · ' + i.hours[0][1] + '</span>';

  /* ---- accueil (hero immersif) ---- */
  document.getElementById("view-home").innerHTML =
    '<div class="hero">' +
      '<div class="hero__bg"><img src="' + S.heroImg + '" alt="Atelier de bijouterie — Colin Philippe" fetchpriority="high"></div>' +
      '<p class="hero__eyebrow">Depuis ' + i.since + ' · Chêne-Bourg · Genève</p>' +
      '<h1 class="hero__title">' + i.name + '</h1>' +
      '<p class="hero__baseline">' + i.baseline + '</p>' +
      '<ul class="hero__services">' + i.services.map(function (s) { return '<li>' + s.t + '</li>'; }).join("") + '</ul>' +
      '<div class="hero__cta"><a class="btn btn--gold" href="#contact">Prendre rendez-vous</a><a class="btn btn--outline" href="tel:' + i.phoneIntl + '">Appeler</a></div>' +
    '</div>';

  /* ---- catégories (asymétrique : 1 grande + 4) ---- */
  function piece(p, featured) {
    return '<article class="piece' + (featured ? ' piece--featured' : '') + '">' +
      '<div class="piece__media"><img src="' + p.img + '" alt="' + p.name + ' — ' + p.spec + '" loading="lazy" width="800" height="1000"></div>' +
      '<div class="piece__cap"><h3 class="piece__name">' + p.name + '</h3><p class="piece__spec">' + p.spec + '</p><p class="piece__price">' + p.price + '</p></div>' +
    '</article>';
  }
  document.getElementById("category-views").innerHTML = S.categories.map(function (c, ci) {
    var rest = c.items.slice(1, 5);
    return '<section class="view view--pad view--category" id="view-' + c.slug + '" aria-label="' + c.title + '">' +
      '<div class="cat-head view-head"><p class="kicker"><span class="n serif">' + pad2(ci + 1) + '</span> Collection</p><h2>' + c.title + '</h2><p class="intro">' + c.intro + '</p></div>' +
      '<div class="cat-stage">' +
        piece(c.items[0], true) +
        '<div class="cat-grid">' + rest.map(function (p) { return piece(p, false); }).join("") + '</div>' +
      '</div>' +
    '</section>';
  }).join("");

  /* ---- avis ---- */
  var r = S.reviews;
  document.getElementById("view-avis").innerHTML =
    '<div class="avis-wrap">' +
      '<div style="text-align:center">' +
        '<p class="kicker" style="justify-content:center">Avis Google</p>' +
        '<h2 style="font-family:var(--font-display);font-size:var(--fs-h1);margin-top:8px">Ils nous font confiance</h2>' +
      '</div>' +
      '<div class="avis-agg">' +
        '<div class="avis-agg__score">' + r.rating + '</div>' +
        '<div class="avis-agg__stars" role="img" aria-label="Note ' + r.rating + ' sur 5">★★★★★</div>' +
        '<div class="avis-agg__meta">Note moyenne Google</div>' +
        '<div class="avis-agg__meta">Basé sur ' + r.count + ' avis vérifiés</div>' +
      '</div>' +
      '<div class="avis-grid">' + r.items.map(function (a) {
        return '<article class="avis-card">' +
          '<div class="avis-card__stars" role="img" aria-label="Noté ' + a.stars + ' sur 5">' + stars(a.stars) + '</div>' +
          '<p class="avis-card__text">' + a.text + '</p>' +
          '<div class="avis-card__foot"><span class="avis-avatar" aria-hidden="true">' + initials(a.author) + '</span><span class="avis-card__author">' + a.author + '</span><span>· ' + a.ago + '</span></div>' +
        '</article>';
      }).join("") + '</div>' +
    '</div>';

  /* ---- contact ---- */
  var mapsEmbed = "https://maps.google.com/maps?q=" + encodeURIComponent(i.mapsQuery) + "&t=&z=15&ie=UTF8&iwloc=&output=embed";
  var mapsLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(i.mapsQuery);
  document.getElementById("view-contact").innerHTML =
    '<div class="contact-grid">' +
      '<div class="contact-info">' +
        '<p class="kicker">Nous trouver</p>' +
        '<a class="phone" href="tel:' + i.phoneIntl + '">' + i.phone + '</a>' +
        '<div class="contact-line"><span class="k">Adresse</span><span>' + i.address + '<br>' + i.city + '</span></div>' +
        '<div class="contact-line"><span class="k">Email</span><a href="mailto:' + i.email + '">' + i.email + '</a></div>' +
        '<div class="contact-line"><span class="k">Horaires</span><table class="hours"><tbody>' +
          i.hours.map(function (h) { return '<tr><td>' + h[0] + '</td><td>' + h[1] + '</td></tr>'; }).join("") +
        '</tbody></table></div>' +
        '<p class="contact-note">' + i.hoursNote + '</p>' +
        '<div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn--gold" href="tel:' + i.phoneIntl + '">Appeler</a><a class="btn btn--outline" href="' + mapsLink + '" target="_blank" rel="noopener">Itinéraire</a></div>' +
      '</div>' +
      '<div class="contact-map"><iframe title="Carte — ' + i.address + '" src="' + mapsEmbed + '" loading="lazy"></iframe></div>' +
    '</div>';

  /* ---- navigation de vues (no-scroll) ---- */
  var validSlugs = navItems.map(function (n) { return n.slug; });
  function currentSlug() { var h = (location.hash || "").replace(/^#/, ""); return validSlugs.indexOf(h) >= 0 ? h : "home"; }
  function labelFor(slug) { for (var k = 0; k < navItems.length; k++) if (navItems[k].slug === slug) return navItems[k].label; return ""; }
  var views = Array.prototype.slice.call(document.querySelectorAll(".view"));
  var links = Array.prototype.slice.call(document.querySelectorAll(".ov-link"));
  function showView(slug) {
    views.forEach(function (v) { v.classList.toggle("is-active", v.id === "view-" + slug); });
    links.forEach(function (a) { if (a.getAttribute("data-view") === slug) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    document.title = (slug === "home") ? "Colin Philippe — Bijouterie-Horlogerie · Chêne-Bourg" : (labelFor(slug) + " · Colin Philippe");
    closeMenu();
  }
  window.addEventListener("hashchange", function () { showView(currentSlug()); });

  /* ---- menu plein écran ---- */
  var overlay = document.getElementById("overlay");
  var openBtn = document.getElementById("menu-open");
  function openMenu() { overlay.classList.add("is-open"); openBtn.setAttribute("aria-expanded", "true"); }
  function closeMenu() { overlay.classList.remove("is-open"); openBtn.setAttribute("aria-expanded", "false"); }
  openBtn.addEventListener("click", openMenu);
  document.getElementById("menu-close").addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  overlay.addEventListener("click", function (e) { if (e.target.closest && e.target.closest(".ov-link")) closeMenu(); });

  showView(currentSlug());
})();
