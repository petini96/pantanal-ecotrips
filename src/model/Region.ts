import { type City } from './City';
import { type TranslatableTag } from './Tags';

export interface Region extends TranslatableTag {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  icon: string;
  cities: City[];
  highlights: string[];
}