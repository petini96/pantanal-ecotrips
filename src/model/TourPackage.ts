import { type ItineraryItem } from './ItineraryItem';
import { type TranslatableTag } from './Tags';

export interface TourPackage {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  durationInDays: number;
  durationInNights: number;
  minPeople?: number;
  itinerary: ItineraryItem[];
  included: string[];
  notIncluded: string[];
  shouldIBring: string[];
  observation?: string;
  packageCategories: TranslatableTag[];
  packageRecommendedFor: TranslatableTag[];
}