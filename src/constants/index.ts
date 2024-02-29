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
