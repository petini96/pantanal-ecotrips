import { type GalleryImage } from 'src/components/galerry/MosaicGallery.vue';
import { type ItineraryItem } from './ItineraryItem';
import { type Region } from './Region';
import { type TranslatableTag } from './Tags';
import { type Hotel } from './Hotel';

export interface TourPackage {
  id: string;
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  description: string[];
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
  region: Region;
  galleryImages?: GalleryImage[];
  hotels?: Hotel[]
}