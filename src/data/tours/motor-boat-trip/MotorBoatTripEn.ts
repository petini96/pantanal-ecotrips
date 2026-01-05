import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/passeio-de-barco-motor/img1.webp`

export const motorBoatTripEn: Tour = {
  id: 'TOUR-MBT-01',
  slug: 'passeio-de-barco-motor-em-miranda',
  name: 'Motor Boat Trip with Spotlight',
  description: ['Night navigation through the Pantanal rivers, using a spotlight to spot nocturnal animals like caimans, capybaras, and owls.'],
  shortDescription: 'Night navigation through the Pantanal rivers, using a spotlight to spot nocturnal animals like caimans, capybaras, and owls.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Boat', 'Life jacket', 'Specialized guide'],
  keywords: ['spotlighting', 'night', 'caiman', 'boat'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: miranda
};

