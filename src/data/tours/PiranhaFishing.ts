import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { aquaticPt, aquaticEn, aquaticEs } from 'src/data/categories/Aquaticc';
import { familiesPt, familiesEn, familiesEs } from 'src/data/audiences/Families';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

// PT-BR
export const piranhaFishingPt: Tour = {
  id: 'TOUR-PF-01',
  slug: 'pesca-piranha-2',
  name: 'Pesca de Piranhas',
  description: 'Uma divertida e tradicional pescaria de piranhas nas águas do Pantanal, usando varas de bambu. O que você pescar pode ser preparado para o jantar!',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-piranha-fishing.jpg`,
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
  slug: 'pesca-piranha-2',
  name: 'Piranha Fishing',
  description: 'A fun and traditional piranha fishing activity in the waters of the Pantanal using bamboo rods. What you catch can be prepared for dinner!',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-piranha-fishing.jpg`,
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
  slug: 'pesca-piranha-2',
  name: 'Pesca de Pirañas',
  description: 'Una divertida y tradicional pesca de pirañas en-US las aguas del Pantanal, usando cañas de bambú. ¡Lo que pesques puede ser preparado para la cena!',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-piranha-fishing.jpg`,
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