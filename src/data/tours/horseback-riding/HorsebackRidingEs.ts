import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/cavalgada/img1.webp`

export const horsebackRidingEs: Tour = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada-em-miranda',
  name: 'Cabalgata',
  description: [
     'Una cabalgata tradicional en caballos pantaneros, mansos y adaptados a la región. Es la mejor manera de explorar áreas inundadas y sentirse como un peón local.'
  ],
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Caballo y silla', 'Casco', 'Guía'],
  keywords: ['caballo', 'cabalgata', 'pantaneiro'],
  categories: [ecotourismEs],
  recommendedFor: [],
  city: miranda
};