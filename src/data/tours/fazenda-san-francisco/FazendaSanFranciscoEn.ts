import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';

const img = `${TOURS_BUCKET_NAME}/fazenda-san-francisco/img1.webp`

export const fazendaSanFranciscoEn: Tour = {
  id: 'TOUR-FSF-01',
  slug: 'fazenda-san-francisco',
  name: 'Fazenda San Francisco (Pantanal)',
  description: [
    'Day-use in the Pantanal. Includes Photographic Safari in an open vehicle for flora and fauna observation, and Chalana (barge) ride with piranha fishing.',
    'Great opportunity to see alligators, capybaras, birds and, with luck, the jaguar.',
    'Pantanal lunch included.'
  ],
  shortDescription: 'A day in the Pantanal with Photographic Safari, Chalana and typical lunch.',
  mainImage: img,
  durationInHours: 10,
  distanceFromCity: '162km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Safari', 'Chalana', 'Lunch', 'Guide'],
  keywords: ['pantanal', 'safari', 'chalana', 'animals'],
  categories: [ecotourismEn, adventureEn],
  recommendedFor: [familiesEn],
  city: miranda
};
