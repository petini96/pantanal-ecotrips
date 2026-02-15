import { type City } from './City';
import { type TranslatableTag } from './Tags';

export interface Region extends TranslatableTag {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  description: string[];
  coverImage: string;
  galleryImages: string[];
  icon: string;
  cities: City[];
  highlights: string[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  details: {
    bestTime: string;
    climate: string;
    access: string;
  };
  gastronomy: string[];
  tips: string[];
  howToGetThere?: {
    description: string[];
    transportOptions: {
      type: 'plane' | 'car' | 'bus';
      title: string;
      description: string;
      icon: string;
    }[];
  };
}