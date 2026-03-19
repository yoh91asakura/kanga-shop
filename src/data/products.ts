export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: 'saveurs' | 'style' | 'art';
  image: string;
  badge?: string;
}

export const categories = {
  saveurs: { label: 'Saveurs', emoji: '🌶️' },
  style: { label: 'Style 237', emoji: '👕' },
  art: { label: 'Art & Culture', emoji: '🎨' },
} as const;

export const products: Product[] = [
  // === SAVEURS ===
  {
    id: 'poivre-penja-blanc',
    name: 'Poivre Blanc de Penja',
    description: 'IGP certifie, recolte a la main sur les pentes volcaniques du Mont Cameroun. Arome unique au monde.',
    price: 14.90,
    unit: '100g',
    category: 'saveurs',
    image: '/images/products/poivre-penja.png',
    badge: 'Produit star',
  },
  {
    id: 'cafe-arabica',
    name: 'Cafe Pur Arabica',
    description: 'Cultive en altitude dans les hauts plateaux de l\'Ouest. Notes de chocolat et noisette.',
    price: 9.50,
    unit: '250g',
    category: 'saveurs',
    image: '/images/products/cafe-grains.png',
  },
  {
    id: 'cacao-poudre',
    name: 'Cacao en Poudre',
    description: 'Feves de cacao du Sud Cameroun, torrefie et moulu artisanalement.',
    price: 8.90,
    unit: '200g',
    category: 'saveurs',
    image: '/images/products/cacao-feves.png',
  },
  {
    id: 'mambo-chocolat',
    name: 'Mambo Chocolat',
    description: 'La barre chocolatee mythique du Cameroun. Un gout d\'enfance inimitable.',
    price: 3.50,
    unit: 'piece',
    category: 'saveurs',
    image: '/images/products/chocolat-mambo.png',
  },
  {
    id: 'huile-palme',
    name: 'Huile de Palme Rouge',
    description: 'Huile de palme artisanale, non raffinee. Indispensable pour le ndole et le eru.',
    price: 7.90,
    unit: '50cl',
    category: 'saveurs',
    image: '/images/products/huile-palme.png',
  },
  {
    id: 'huile-karite',
    name: 'Huile de Karite',
    description: 'Extraite a froid, usage culinaire et cosmetique. Du Nord Cameroun.',
    price: 11.90,
    unit: '25cl',
    category: 'saveurs',
    image: '/images/products/huile-karite.png',
  },
  {
    id: 'beurre-karite',
    name: 'Beurre de Karite Pur',
    description: 'Non raffine, pour la cuisine et les soins de la peau. Tradition du Grand Nord.',
    price: 9.90,
    unit: '200g',
    category: 'saveurs',
    image: '/images/products/beurre-karite.png',
  },
  {
    id: 'huile-palmistes',
    name: 'Huile de Palmistes',
    description: 'Extraite des amandes du palmier a huile. Saveur douce, ideal pour les sauces.',
    price: 8.50,
    unit: '50cl',
    category: 'saveurs',
    image: '/images/products/epices-huiles.png',
  },
  {
    id: 'arachides-grillees',
    name: 'Arachides Grillees',
    description: 'Grillees au feu de bois, croquantes et savoreuses. Le snack camerounais par excellence.',
    price: 5.90,
    unit: '300g',
    category: 'saveurs',
    image: '/images/products/arachides-feu.png',
  },
  {
    id: 'arachides-crues',
    name: 'Arachides Crues',
    description: 'Pour vos sauces d\'arachide maison. Qualite premium du Cameroun.',
    price: 4.90,
    unit: '500g',
    category: 'saveurs',
    image: '/images/products/arachides.png',
  },
  {
    id: 'haricots-rouges',
    name: 'Haricots Rouges',
    description: 'Haricots rouges camerounais, parfaits pour le koki et les ragouts.',
    price: 4.50,
    unit: '500g',
    category: 'saveurs',
    image: '/images/products/graines-haricots.png',
  },
  {
    id: 'gingembre',
    name: 'Gingembre & Epices',
    description: 'Gingembre camerounais, cannelle, muscade, poivre — les saveurs qui font la cuisine camerounaise.',
    price: 6.90,
    unit: '250g',
    category: 'saveurs',
    image: '/images/products/gingembre-epices.png',
  },
  {
    id: 'karite-nord',
    name: 'Karite du Grand Nord',
    description: 'Beurre de karite artisanal du Grand Nord Cameroun. Production traditionnelle au feu de bois.',
    price: 12.90,
    unit: '250g',
    category: 'saveurs',
    image: '/images/products/karite-nord.png',
  },

  // === STYLE 237 ===
  {
    id: 'boubou-homme',
    name: 'Boubou Homme',
    description: 'Boubou traditionnel camerounais, coupe ample et elegante. Tissu premium.',
    price: 49.90,
    unit: 'piece',
    category: 'style',
    image: '/images/products/boubou-homme.png',
  },
  {
    id: 'chemisette-237',
    name: 'Chemisette Style 237',
    description: 'Chemise a manches courtes avec motifs camerounais. Fierte et elegance.',
    price: 34.90,
    unit: 'piece',
    category: 'style',
    image: '/images/products/maillot-lions.png',
  },
  {
    id: 'maillot-foot',
    name: 'Maillot Lions Indomptables',
    description: 'Maillot de football du Cameroun. Portez les couleurs des Lions Indomptables.',
    price: 39.90,
    unit: 'piece',
    category: 'style',
    image: '/images/products/maillot-lions.png',
    badge: 'Populaire',
  },
  {
    id: 'cabas-femme',
    name: 'Cabas Femme en Raphia',
    description: 'Sac cabas tresse en raphia naturel. Artisanat camerounais, chaque piece est unique.',
    price: 29.90,
    unit: 'piece',
    category: 'style',
    image: '/images/products/artisanat-panier.png',
  },

  // === ART & CULTURE ===
  {
    id: 'tableau-peintre',
    name: 'Tableau de Peintre Camerounais',
    description: 'Peinture originale d\'un artiste camerounais. Chaque oeuvre est unique et signee.',
    price: 89.90,
    unit: 'piece',
    category: 'art',
    image: '/images/products/tableau-peinture.png',
    badge: 'Piece unique',
  },
  {
    id: 'masques',
    name: 'Masques Traditionnels',
    description: 'Masques sculptes a la main, representant les traditions et l\'heritage culturel camerounais.',
    price: 69.90,
    unit: 'piece',
    category: 'art',
    image: '/images/products/masques-art.png',
  },
  {
    id: 'objet-art',
    name: 'Statuettes & Objets d\'Art',
    description: 'Statuettes en bois et objets decoratifs sculptes par des artisans camerounais.',
    price: 59.90,
    unit: 'piece',
    category: 'art',
    image: '/images/products/statuettes-bois.png',
  },
];
