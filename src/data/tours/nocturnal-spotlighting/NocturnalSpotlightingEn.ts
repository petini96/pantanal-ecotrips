import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/focagem-notura-animais/img1.webp`

export const nocturnalSpotlightingEn: Tour = {
  id: 'TOUR-FSF-NS-01',
  slug: 'focagem-notura-animais-em-miranda',
  name: 'Nocturnal Wildlife Spotlighting',
  description: ['An open vehicle safari after dinner to observe nocturnal animals. With the help of a powerful spotlight, it is possible to see caimans, owls, capybaras, and even jaguars.'],
  shortDescription: 'An open vehicle safari after dinner to observe nocturnal animals. With the help of a powerful spotlight, it is possible to see caimans, owls, capybaras, and even jaguars.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Safari vehicle', 'Spotlight', 'Guide'],
  keywords: ['spotlighting', 'nocturnal', 'safari', 'animals'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: miranda
};

