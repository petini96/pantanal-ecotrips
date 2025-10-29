import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismPt, ecotourismEn, ecotourismEs } from 'src/data/categories/Ecotourismm';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

// PT-BR
export const horsebackRidingPt: Tour = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada',
  name: 'Cavalgada',
  description: 'Uma cavalgada tradicional em cavalos pantaneiros, mansos e adaptados à região. É a melhor forma de explorar áreas alagadas e sentir-se como um peão local.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-horseback-riding.webp`,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Cavalo e sela', 'Capacete', 'Guia'],
  keywords: ['cavalo', 'cavalgada', 'pantaneiro'],
  categories: [ecotourismPt],
  recommendedFor: [],
  city: miranda
};

// EN-US
export const horsebackRidingEn: Tour = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada',
  name: 'Horseback Riding',
  description: 'A traditional ride on Pantanal horses, which are tame and adapted to the region. It is the best way to explore flooded areas and feel like a local cowboy.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-horseback-riding.webp`,
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

// ES
export const horsebackRidingEs: Tour = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada',
  name: 'Cabalgata',
  description: 'Una cabalgata tradicional en caballos pantaneros, mansos y adaptados a la región. Es la mejor manera de explorar áreas inundadas y sentirse como un peón local.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-horseback-riding.webp`,
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