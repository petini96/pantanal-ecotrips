import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismPt } from '../../categories/ecotourismm';
import { ecotourismEn } from '../../categories/ecotourismm';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/cavalgada/img1.webp`

const commonData = {
  id: 'TOUR-HR-01',
  slug: 'cavalgada-em-miranda',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  city: miranda
};

export const horsebackRidingPt: Tour = {
    ...commonData,
    name: 'Cavalgada',
    description: ['Uma cavalgada-em-miranda tradicional em cavalos pantaneiros, mansos e adaptados à região. É a melhor forma de explorar áreas alagadas e sentir-se como um peão local.'],
    shortDescription: 'Uma cavalgada-em-miranda tradicional em cavalos pantaneiros, mansos e adaptados à região. É a melhor forma de explorar áreas alagadas e sentir-se como um peão local.',
    includedItems: ['Cavalo e sela', 'Capacete', 'Guia'],
    keywords: ['cavalo', 'cavalgada-em-miranda', 'pantaneiro'],
    categories: [ecotourismPt],
    recommendedFor: []
};

export const horsebackRidingEn: Tour = {
    ...commonData,
    name: 'Horseback Riding',
    description: ['A traditional ride on Pantanal horses, which are tame and adapted to the region. It is the best way to explore flooded areas and feel like a local cowboy.'],
    shortDescription: 'A traditional ride on Pantanal horses, which are tame and adapted to the region. It is the best way to explore flooded areas and feel like a local cowboy.',
    includedItems: ['Horse and saddle', 'Helmet', 'Guide'],
    keywords: ['horse', 'horseback', 'pantaneiro'],
    categories: [ecotourismEn],
    recommendedFor: []
};

export const horsebackRidingEs: Tour = {
    ...commonData,
    name: 'Cabalgata',
    description: ['Una cabalgata tradicional en caballos pantaneros, mansos y adaptados a la región. Es la mejor manera de explorar áreas inundadas y sentirse como un peón local.'],
    shortDescription: 'Una cabalgata tradicional en caballos pantaneros, mansos y adaptados a la región. Es la mejor manera de explorar áreas inundadas y sentirse como un peón local.',
    includedItems: ['Caballo y silla', 'Casco', 'Guía'],
    keywords: ['caballo', 'cabalgata', 'pantaneiro'],
    categories: [ecotourismEs],
    recommendedFor: []
};
