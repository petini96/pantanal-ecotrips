import { type Tour } from './Tour';

export interface ItineraryItem {
  day: number;
  title: string;
  descriptionItems: string[];
  tours: Tour[];
  mealsIncluded?: ('breakfast' | 'lunch' | 'dinner')[];
}