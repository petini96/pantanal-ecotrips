import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/safari-onca-pintada/img1.webp`

export const jaguarSafariEn: Tour = {
  id: 'TOUR-FSF-JS-01',
  slug: 'safari-onca-pintada-em-miranda',
  name: 'Jaguar Safari',
  description: [
    'A special expedition focused on exploring the areas with the highest probability of spotting the jaguar, the largest feline in the Americas.'
  ],
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Vehicle or boat', 'Specialized guide'],
  keywords: ['jaguar', 'feline', 'big cat'],
  categories: [ecotourismEn, adventureEn],
  recommendedFor: [],
  city: miranda
};