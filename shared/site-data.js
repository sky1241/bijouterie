/* =========================================================================
   Colin Philippe — Bijouterie·Horlogerie · DONNÉES PARTAGÉES (V1/V2/V3)
   Source unique de contenu. Chargée en <script> classique (file:// OK).
   ⚠️ Avis = EXEMPLES (placeholder). Vrais avis Google non scrapables : à
      remplacer manuellement. Infos boutique = vérifiées au registre du commerce.
   ========================================================================= */
window.SITE = {
  info: {
    name: "Colin Philippe",
    sub: "Bijouterie · Horlogerie",
    baseline: "Créateur de bijoux à la main — et l'horloger de votre quotidien.",
    since: 1990,
    owner: "Philippe Colin",
    address: "Rue de Genève 71",
    city: "1225 Chêne-Bourg · Genève",
    phone: "022 348 75 80",
    phoneIntl: "+41223487580",
    hours: [
      ["Lundi – Vendredi", "10h00 – 19h00"],
      ["Samedi", "9h00 – 18h00"],
      ["Dimanche", "Fermé"]
    ],
    hoursNote: "Horaires à confirmer avec la boutique.",
    mapsQuery: "Colin Philippe Rue de Genève 71 1225 Chêne-Bourg",
    services: [
      { t: "Création à la main", d: "Pièces uniques façonnées dans l'atelier, sur-mesure." },
      { t: "Changement de pile", d: "Remplacement rapide, en boutique, toutes marques." },
      { t: "Bracelets & réparation", d: "Bracelets de montre, mise à taille, entretien." }
    ]
  },

  /* 5 catégories × 5 produits. img = URL CDN vérifiée. Ordre = images.json. */
  categories: [
    { slug: "colliers", label: "Colliers", title: "Colliers", intro: "Rivières, pendentifs, sautoirs — l'éclat près du cœur.", items: [
      { name: "Rivière de diamants", spec: "Or blanc 18 ct · diamants", price: "Sur devis", img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&h=1000&fit=crop&q=80" },
      { name: "Pendentif Goutte d'or", spec: "Or jaune 18 ct", price: "dès CHF 690", img: "https://images.unsplash.com/photo-1685970731571-72ede0cb26ea?w=800&h=1000&fit=crop&q=80" },
      { name: "Sautoir Perles de Tahiti", spec: "Perles · or gris", price: "Sur devis", img: "https://images.pexels.com/photos/20838859/pexels-photo-20838859.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Chaîne maille figaro", spec: "Or jaune 18 ct", price: "dès CHF 590", img: "https://images.pexels.com/photos/7514818/pexels-photo-7514818.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Ras-de-cou diamanté", spec: "Or blanc 18 ct", price: "Sur devis", img: "https://images.pexels.com/photos/13924051/pexels-photo-13924051.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" }
    ]},
    { slug: "bracelets", label: "Bracelets", title: "Bracelets", intro: "Joncs, manchettes, gourmettes — au poignet, un signe.", items: [
      { name: "Jonc martelé", spec: "Or rose 18 ct", price: "Sur devis", img: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?w=800&h=1000&fit=crop&q=80" },
      { name: "Bracelet Tennis", spec: "Or blanc · diamants", price: "Sur devis", img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop&q=80" },
      { name: "Manchette gravée", spec: "Argent massif", price: "dès CHF 480", img: "https://images.pexels.com/photos/32874211/pexels-photo-32874211.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Gourmette personnalisable", spec: "Or jaune 18 ct · gravure", price: "dès CHF 720", img: "https://images.pexels.com/photos/37485307/pexels-photo-37485307.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Bracelet perles & or", spec: "Perles d'eau douce", price: "dès CHF 340", img: "https://images.pexels.com/photos/14509640/pexels-photo-14509640.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" }
    ]},
    { slug: "bagues", label: "Bagues", title: "Bagues", intro: "Solitaires, alliances, chevalières — un serment qui dure.", items: [
      { name: "Solitaire Éternité", spec: "Platine · diamant brillant", price: "Sur devis", img: "https://images.pexels.com/photos/31087451/pexels-photo-31087451.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Alliance tressée", spec: "Or trois ors 18 ct", price: "dès CHF 1 290", img: "https://images.pexels.com/photos/32988751/pexels-photo-32988751.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Chevalière armoriée", spec: "Or jaune · gravure main", price: "Sur devis", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop&q=80" },
      { name: "Bague Toi & Moi", spec: "Or blanc · deux pierres", price: "Sur devis", img: "https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Jonc diamant", spec: "Or rose 18 ct", price: "dès CHF 980", img: "https://images.pexels.com/photos/15351782/pexels-photo-15351782.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" }
    ]},
    { slug: "boucles", label: "Boucles", title: "Boucles d'oreilles", intro: "Puces, créoles, pendantes — la lumière au visage.", items: [
      { name: "Puces Diamant", spec: "Or blanc 18 ct", price: "dès CHF 690", img: "https://images.pexels.com/photos/10976654/pexels-photo-10976654.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Créoles", spec: "Or jaune 18 ct", price: "Sur devis", img: "https://images.pexels.com/photos/32989030/pexels-photo-32989030.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Pendantes Saphir", spec: "Or blanc · saphirs", price: "Sur devis", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop&q=80" },
      { name: "Dormeuses anciennes", spec: "Or jaune 18 ct", price: "Sur devis", img: "https://images.pexels.com/photos/8396318/pexels-photo-8396318.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Puces perle", spec: "Or blanc · perle de culture", price: "dès CHF 290", img: "https://images.pexels.com/photos/36772547/pexels-photo-36772547.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" }
    ]},
    { slug: "montres", label: "Montres", title: "Montres", intro: "Le métier d'horloger : vente, pile, bracelet, réparation.", items: [
      { name: "Squelette automatique", spec: "Acier · mouvement apparent", price: "Sur devis", img: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&h=1000&fit=crop&q=80" },
      { name: "Classique cuir", spec: "Boîtier acier · bracelet cuir", price: "dès CHF 1 950", img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=800&h=1000&fit=crop&q=80" },
      { name: "Serti neige", spec: "Lunette pavée diamants", price: "Sur devis", img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Chronographe acier", spec: "Quartz suisse", price: "dès CHF 890", img: "https://images.pexels.com/photos/5058216/pexels-photo-5058216.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" },
      { name: "Montre habillée or", spec: "Bracelet cuir", price: "Sur devis", img: "https://images.pexels.com/photos/3419331/pexels-photo-3419331.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" }
    ]}
  ],

  /* ⚠️ EXEMPLES — remplacer par les vrais avis Google (non scrapables). */
  reviews: {
    rating: "4,9",
    count: null,           // nb réel inconnu → non affiché tant que non fourni
    placeholder: true,
    items: [
      { author: "Sophie M.", stars: 5, text: "Accueil exceptionnel et de vrais conseils. Mon collier sur-mesure dépasse tout ce que j'imaginais.", ago: "il y a 2 semaines" },
      { author: "Jean-Pierre R.", stars: 5, text: "Ma femme était émue en ouvrant l'écrin. Un savoir-faire rare et un artisan à l'écoute.", ago: "il y a 1 mois" },
      { author: "Laurence B.", stars: 4, text: "Très belle boutique, pièces magnifiques. Un léger délai sur ma commande, mais le résultat en valait la peine.", ago: "il y a 3 mois" },
      { author: "Marc & Élodie", stars: 5, text: "Réparation de ma montre ancienne impeccable. Prix honnête, travail soigné.", ago: "il y a 2 mois" }
    ]
  },

  heroImg: "https://images.pexels.com/photos/7167035/pexels-photo-7167035.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
};
