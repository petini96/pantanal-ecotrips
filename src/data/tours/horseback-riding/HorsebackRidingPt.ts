import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/cavalgada/img1.webp`

export const horsebackRidingPt: Tour = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada-em-miranda',
  name: 'Cavalgada',
  description: [
     'Uma cavalgada-em-miranda tradicional em cavalos pantaneiros, mansos e adaptados à região. É a melhor forma de explorar áreas alagadas e sentir-se como um peão local.'
  ],
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Cavalo e sela', 'Capacete', 'Guia'],
  keywords: ['cavalo', 'cavalgada-em-miranda', 'pantaneiro'],
  categories: [ecotourismPt],
  recommendedFor: [],
  city: miranda
};