import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismEn } from '../categories/ecotourismm/EcotourismmEn';
import { ecotourismEs } from '../categories/ecotourismm/EcotourismmEs';
import { ecotourismPt } from '../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/cavalgada/img1.webp`

// PT-BR
export const horsebackRidingPt: Tour = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada-em-miranda',
  name: 'Cavalgada',
  description: 'Uma cavalgada-em-miranda tradicional em cavalos pantaneiros, mansos e adaptados à região. É a melhor forma de explorar áreas alagadas e sentir-se como um peão local.',
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

// EN-US
export const horsebackRidingEn: Tour = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada-em-miranda',
  name: 'Horseback Riding',
  description: 'A traditional ride on Pantanal horses, which are tame and adapted to the region. It is the best way to explore flooded areas and feel like a local cowboy.',
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

// ES
export const horsebackRidingEs: Tour = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada-em-miranda',
  name: 'Cabalgata',
  description: 'Una cabalgata tradicional en caballos pantaneros, mansos y adaptados a la región. Es la mejor manera de explorar áreas inundadas y sentirse como un peón local.',
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