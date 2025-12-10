import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../audiences/families/FamiliesEn';
import { familiesEs } from '../audiences/families/FamiliesEs';
import { familiesPt } from '../audiences/families/FamiliesPt';
import { aquaticEn } from '../categories/aquaticc/AquaticcEn';
import { aquaticEs } from '../categories/aquaticc/AquaticcEs';
import { aquaticPt } from '../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/pesca-piranha/img1.webp`

// PT-BR
export const piranhaFishingPt: Tour = {
  id: 'TOUR-PF-01',
  slug: 'pesca-piranha-em-miranda',
  name: 'Pesca de Piranhas',
  description: 'Uma divertida e tradicional pescaria de piranhas nas águas do Pantanal, usando varas de bambu. O que você pescar pode ser preparado para o jantar!',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Equipamento de pesca', 'Iscas', 'Acompanhamento de guia'],
  keywords: ['pesca', 'piranha', 'rio', 'pantanal'],
  categories: [aquaticPt],
  recommendedFor: [familiesPt],
  city: miranda
};

// EN-US
export const piranhaFishingEn: Tour = {
  id: 'TOUR-PF-01',
  slug: 'pesca-piranha-em-miranda',
  name: 'Piranha Fishing',
  description: 'A fun and traditional piranha fishing activity in the waters of the Pantanal using bamboo rods. What you catch can be prepared for dinner!',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Fishing equipment', 'Bait', 'Guide accompaniment'],
  keywords: ['fishing', 'piranha', 'river', 'pantanal'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: miranda
};

// ES
export const piranhaFishingEs: Tour = {
  id: 'TOUR-PF-01',
  slug: 'pesca-piranha-em-miranda',
  name: 'Pesca de Pirañas',
  description: 'Una divertida y tradicional pesca de pirañas en las aguas del Pantanal, usando cañas de bambú. ¡Lo que pesques puede ser preparado para la cena!',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Equipo de pesca', 'Cebo', 'Acompañamiento de guía'],
  keywords: ['pesca', 'piraña', 'río', 'pantanal'],
  categories: [aquaticEs],
  recommendedFor: [familiesEs],
  city: miranda
};