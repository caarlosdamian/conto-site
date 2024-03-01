import { freeTier, teamTier, enterpriceTier } from '../assets';

export type Tier = {
  tier: string;
  tier_subtitle: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
};

export type Testimonial = {
  testimonial: string;
  author: string;
  stars: number;
  featured: boolean;
  position: string;
  company: string;
  img: string;
};

export const headerLinks = [
  {
    id: 'header_plans',
    path: '#plans',
  },
  {
    id: 'header_docs',
    path: '#docs',
  },
  {
    id: 'header_contact',
    path: '#plans',
  },
];

export const plansInfo: Tier[] = [
  {
    tier: 'plans_tier_title_free',
    tier_subtitle: 'plans_tier_subtitle_free',
    price: 0,
    description: 'plans_tier_description_free',
    features: [
      'plans_tier_features_free_one',
      'plans_tier_features_free_two',
      'plans_tier_features_free_three',
    ],
    imageUrl: freeTier,
    imageAlt: 'plans_tier_imgalt_free',
    backgroundColor: '#2D3748',
  },
  {
    tier: 'plans_tier_title_team',
    tier_subtitle: 'plans_tier_subtitle_team',
    price: 20, // Suponiendo que el precio es 100, ajusta según sea necesario
    description: 'plans_tier_description_team',
    features: [
      'plans_tier_features_team_one',
      'plans_tier_features_team_two',
      'plans_tier_features_team_three',
    ],
    imageUrl: teamTier,
    imageAlt: 'plans_tier_imgalt_free',
    backgroundColor: '#6B8AEB',
  },
  {
    tier: 'plans_tier_title_enterprise',
    tier_subtitle: 'plans_tier_subtitle_enterprise',
    price: 30,
    description: 'plans_tier_description_enterprise',
    features: [
      'plans_tier_features_enterprise_one',
      'plans_tier_features_enterprise_two',
      'plans_tier_features_enterprise_three',
    ],
    imageUrl: enterpriceTier,
    imageAlt: 'plans_tier_imgalt_enterprise',
    backgroundColor: '#2454B0',
  },
];

export const testimonialInfo: Testimonial[] = [
  {
    testimonial: 'testimonials_one_testimonial',
    author: 'Samantha Lee',
    stars: 4,
    featured: false,
    position: 'testimonials_one_position',
    company: 'GreenTech Solutions',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    testimonial: 'testimonials_two_testimonial',
    author: 'Raj Patel',
    stars: 5,
    featured: true,
    position: 'testimonials_two_position',
    company: 'Dynamic Logistics',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   
  },
  {
    testimonial: 'testimonials_three_testimonial',
    author: 'Maria Gomez',
    stars: 5,
    featured: false,
    position: 'testimonials_three_position',
    company: 'Creative Designs Ltd.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
