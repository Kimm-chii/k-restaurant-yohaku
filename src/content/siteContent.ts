import { SiteContent } from '../types';

/**
 * =========================================================================
 * CENTRAL CLIENT CONTENT CONFIGURATION
 * =========================================================================
 * Japanese Ramen Shop / Noodle Bar configuration for Kim Ramen Bar.
 * Single source of truth for text, menu items, prices, hours, and addresses.
 */

export const siteContent: SiteContent = {
  restaurantName: "SORA",
  tagline: "Authentic 16-Hour Broth & Handcrafted Japanese Cuisine.",
  subtitle: "A cozy neighborhood dining room celebrating traditional slow-simmered broths, handmade noodles, and izakaya small plates.",
  establishedYear: "2021",
  cuisineType: "Japanese Dining",
  michelinNote: "",

  // Contact Information & Direct Directions
  address: {
    street: "123 Main Street",
    cityStateZip: "Portland, OR 97201",
    fullAddress: "123 Main Street, Portland, OR 97201",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=123+Main+Street+Portland+OR",
  },
  phone: "(555) 234-5678",
  email: "hello@sora.example.com",

  // Important External Redirect Links
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID",
  facebookUrl: "https://facebook.com/your-restaurant-page",
  instagramUrl: "https://instagram.com/your-restaurant-handle",
  tripAdvisorUrl: "https://tripadvisor.com/Restaurant_Review-your-restaurant",
  linktreeUrl: "https://linktr.ee/your-restaurant-links",

  // Notice & Disclaimer Statements
  disclaimers: {
    priceNotice: "Prices are subject to change and may vary from the physical establishment.",
    allergyNotice: "Please inform your server of any severe food allergies or dietary requirements before ordering.",
    reservationNotice: "We accommodate guests on a walk-in basis.",
  },

  // Operating Hours
  operatingHours: [
    { days: "Tuesday – Thursday", hours: "11:30 AM – 9:00 PM", kitchenCloses: "8:30 PM" },
    { days: "Friday – Saturday", hours: "11:30 AM – 10:00 PM", kitchenCloses: "9:30 PM" },
    { days: "Sunday", hours: "12:00 PM – 8:30 PM", kitchenCloses: "8:00 PM" },
    { days: "Monday", hours: "Closed" },
  ],

  // Hero Section Header
  hero: {
    badgeText: "Japanese Dining • 16-Hour Broth • Walk-ins Welcome",
    titleLine1: "Handcrafted Ramen,",
    titleLine2: "Comforting Broth.",
    description: "Welcome to SORA. Enjoy our selection of rich slow-simmered ramen, crispy gyoza, and refreshing drinks prepared daily.",
    primaryCtaText: "View Menu",
    secondaryCtaText: "View Google Reviews",
    heroImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop",
  },

  // About / Brand Story
  about: {
    title: "About SORA",
    subtitle: "Dedicated to the art of authentic Japanese broth & noodles.",
    storyParagraphs: [
      "At SORA, we believe authentic Japanese dining starts with patience and tradition. Our signature tonkotsu and miso broths are slow-simmered for over 16 hours and served alongside handcrafted wheat noodles and izakaya small plates in a warm, unhurried atmosphere."
    ],
    chefQuote: "Good food brings people together.",
    chefTitle: "Head Chef",
    values: [],
    images: [
      {
        src: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop",
        alt: "SORA Japanese Dining Interior",
        caption: "Minimalist and welcoming Japanese dining atmosphere"
      }
    ]
  },

  // Menu Categories
  menuCategories: [
    {
      id: "ramen",
      label: "Ramen Bowls",
      description: "Signature 16-hour broths with fresh noodles and traditional toppings."
    },
    {
      id: "starters",
      label: "Izakaya & Starters",
      description: "Crispy small plates designed for sharing."
    },
    {
      id: "drinks",
      label: "Beverages",
      description: "Japanese green teas, ramune sodas, and craft beverages."
    }
  ],

  // Menu Items (Food has images, Beverages do NOT have images)
  menuItems: [
    // RAMEN
    {
      id: "m1",
      name: "Tonkotsu Pork Ramen",
      description: "16-hour rich pork bone broth, tender chashu pork belly, soft-boiled ajitama egg, bamboo shoots, wood ear mushrooms, and fresh scallions.",
      price: "$15.50",
      category: "ramen",
      tags: ["House Special"],
      featured: true,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "m2",
      name: "Spicy Miso Ramen",
      description: "Rich miso broth with chili oil, seasoned ground pork, soft egg, sweet corn, nori seaweed, and bean sprouts.",
      price: "$16.00",
      category: "ramen",
      tags: ["Spicy"],
      featured: true,
      image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "m3",
      name: "Shoyu Black Garlic Ramen",
      description: "Savory soy broth infused with roasted black garlic Mayu oil, chashu pork, menma, and spring onions.",
      price: "$15.00",
      category: "ramen",
      tags: [],
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "m4",
      name: "Veggie Tofu Ramen",
      description: "Creamy sesame-vegetable broth, seared tofu, king oyster mushrooms, pak choi, and sweet corn.",
      price: "$14.50",
      category: "ramen",
      tags: ["Vegetarian"],
      image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?q=80&w=800&auto=format&fit=crop"
    },

    // IZAKAYA & STARTERS
    {
      id: "m5",
      name: "Pan-Seared Pork Gyoza",
      description: "5 pieces of handmade Japanese dumplings filled with pork & scallion, served with citrus ponzu dip.",
      price: "$8.50",
      category: "starters",
      tags: ["Popular"],
      featured: true,
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "m6",
      name: "Crispy Japanese Karaage",
      description: "Marinated soy-ginger chicken fried golden crispy, served with spicy kewpie mayo and fresh lemon.",
      price: "$9.50",
      category: "starters",
      tags: [],
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "m7",
      name: "Chashu Pork Steamed Bao",
      description: "2 fluffy steamed lotus buns stuffed with braised chashu pork belly, pickled cucumber, and hoisin.",
      price: "$9.00",
      category: "starters",
      tags: [],
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "m8",
      name: "Edamame with Sea Salt",
      description: "Steamed young soybean pods tossed with sea salt flakes and roasted sesame.",
      price: "$5.50",
      category: "starters",
      tags: ["Vegetarian"],
      image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=800&auto=format&fit=crop"
    },

    // BEVERAGES (NO IMAGES FOR BEVERAGES)
    {
      id: "m9",
      name: "Iced Japanese Matcha Green Tea",
      description: "Premium ceremonial grade Kyoto green tea served chilled over ice.",
      price: "$4.50",
      category: "drinks",
      tags: []
    },
    {
      id: "m10",
      name: "Ramune Japanese Soda",
      description: "Traditional marble bottle soda available in original or strawberry flavor.",
      price: "$4.00",
      category: "drinks",
      tags: []
    },
    {
      id: "m11",
      name: "Craft Yuzu Sparkler",
      description: "Refreshing Japanese yuzu citrus juice with sparkling water and fresh mint.",
      price: "$5.00",
      category: "drinks",
      tags: []
    },
    {
      id: "m12",
      name: "Hot Genmaicha Tea",
      description: "Roasted brown rice green tea served hot in an iron teapot.",
      price: "$3.50",
      category: "drinks",
      tags: []
    }
  ],

  // Google Reviews Highlights
  reviews: {
    googleRatingScore: 4.8,
    totalReviewCount: 140,
    ratingSubtext: "Based on 140+ reviews on Google",
    reviewList: [
      {
        id: "r1",
        author: "Kenji M.",
        rating: 5,
        date: "1 week ago",
        comment: "Best Tonkotsu ramen in town! The broth is so rich and flavorful, and the pork gyoza is crispy perfection.",
        source: "Google Reviews",
        avatarInitial: "K"
      },
      {
        id: "r2",
        author: "Sarah T.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Cozy vibe, fast service, and incredible spicy miso ramen. We visit every weekend!",
        source: "Google Reviews",
        avatarInitial: "S"
      }
    ]
  },

  faqs: [],
  gallery: [],
  socialLinks: []
};
