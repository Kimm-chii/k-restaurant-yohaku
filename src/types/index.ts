export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  tags?: string[]; // e.g. ['Vegetarian', 'Gluten Free', 'Chef Special', 'Organic']
  spicyLevel?: number;
  featured?: boolean;
  image?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  source: string; // 'Google Reviews' | 'TripAdvisor'
  avatarInitial?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'tripadvisor' | 'linktree' | 'google';
  label: string;
  url: string;
  description: string;
  iconName: string;
}

export interface HoursOfOperation {
  days: string;
  hours: string;
  kitchenCloses?: string;
}

export interface SiteContent {
  restaurantName: string;
  tagline: string;
  subtitle: string;
  establishedYear: string;
  cuisineType: string;
  michelinNote?: string;
  
  // Contact & Location
  address: {
    street: string;
    cityStateZip: string;
    fullAddress: string;
    googleMapsEmbedUrl?: string;
    googleMapsDirectionsUrl: string;
  };
  phone: string;
  email: string;
  
  // Important External Links
  googleReviewUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  tripAdvisorUrl: string;
  linktreeUrl: string;
  
  // Disclaimers & Notices
  disclaimers: {
    priceNotice: string;
    allergyNotice: string;
    reservationNotice: string;
  };
  
  // Hours
  operatingHours: HoursOfOperation[];
  
  // Hero Content
  hero: {
    badgeText: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    heroImage: string;
  };
  
  // Story / About Content
  about: {
    title: string;
    subtitle: string;
    storyParagraphs: string[];
    chefQuote: string;
    chefTitle: string;
    values: {
      title: string;
      description: string;
    }[];
    images: {
      src: string;
      alt: string;
      caption?: string;
    }[];
  };
  
  // Menu Categories & Items
  menuCategories: {
    id: string;
    label: string;
    description: string;
  }[];
  menuItems: MenuItem[];
  
  // Gallery / Highlights
  gallery: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    category: 'Ambiance' | 'Culinary' | 'Drinks' | 'Craft';
  }[];
  
  // Reviews & Google Rating
  reviews: {
    googleRatingScore: number;
    totalReviewCount: number;
    ratingSubtext: string;
    reviewList: ReviewItem[];
  };
  
  // FAQs
  faqs: FAQItem[];
  
  // Social Hub Links
  socialLinks: SocialLink[];
}
