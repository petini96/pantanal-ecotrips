import { type City } from './City';
import { type DifficultyLevel, type EnvironmentType } from './Enums';
import { type TranslatableTag } from './Tags';

export interface Tour {
  id: string;
  slug: string;
  name: string;
  description: string;
  mainImage: string;
  durationInHours: number;
  distanceFromCity?: string;
  difficulty: DifficultyLevel;
  environments: EnvironmentType[];
  includedItems: string[];
  keywords: string[];
  categories: TranslatableTag[];
  recommendedFor: TranslatableTag[];
  city: City;
}