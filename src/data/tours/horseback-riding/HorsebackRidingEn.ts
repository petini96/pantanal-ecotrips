import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/cavalgada/img1.webp`

export const horsebackRidingEn: Tour = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada-em-miranda',
  name: 'Horseback Riding',
  description: ['A traditional ride on Pantanal horses, which are tame and adapted to the region. It is the best way to explore flooded areas and feel like a local cowboy.'],
  shortDescription: 'A traditional ride on Pantanal horses, which are tame and adapted to the region. It is the best way to explore flooded areas and feel like a local cowboy.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Horse and saddle', 'Helmet', 'Guide'],
  keywords: ['horse', 'horseback', 'pantaneiro'],
  categories: [ecotourismEn],
  recommendedFor: [],
  city: miranda
};

