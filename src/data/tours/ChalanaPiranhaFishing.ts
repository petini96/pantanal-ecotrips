import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { aquaticPt, aquaticEn, aquaticEs } from 'src/data/categories/Aquaticc';
import { ecotourismPt, ecotourismEn, ecotourismEs } from 'src/data/categories/Ecotourismm';
import { familiesPt, familiesEn, familiesEs } from 'src/data/audiences/Families';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

const img = `${TOURS_BUCKET_NAME}/pescaria-piranha/img1.webp`
// PT-BR
export const chalanaPiranhaFishingPt: Tour = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  name: 'Passeio de Chalana com Pescaria de Piranhas',
  description: 'Navegação em barco típico "chalana" pelo Rio Miranda, com uma parada para a tradicional e divertida pescaria de piranhas. Ideal para observação de aves aquáticas.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Barco Chalana', 'Equipamento de pesca', 'Guia'],
  keywords: ['chalana', 'pesca', 'piranha', 'rio miranda'],
  categories: [aquaticPt, ecotourismPt],
  recommendedFor: [familiesPt],
  city: miranda
};

// EN-US
export const chalanaPiranhaFishingEn: Tour = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  name: 'Chalana Boat Trip with Piranha Fishing',
  description: 'Navigation on a typical "chalana" boat along the Miranda River, with a stop for the traditional and fun piranha fishing. Ideal for watching aquatic birds.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Chalana Boat', 'Fishing equipment', 'Guide'],
  keywords: ['chalana', 'fishing', 'piranha', 'miranda river'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn],
  city: miranda
};

// ES
export const chalanaPiranhaFishingEs: Tour = {
  id: 'TOUR-FSF-CPF-01',
  slug: 'pescaria-piranha-em-miranda',
  name: 'Paseo en Chalana con Pesca de Pirañas',
  description: 'Navegación en barco típico "chalana" por el Río Miranda, con una parada para la tradicional y divertida pesca de pirañas. Ideal para la observación de aves acuáticas.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Barco Chalana', 'Equipo de pesca', 'Guía'],
  keywords: ['chalana', 'pesca', 'piraña', 'río miranda'],
  categories: [aquaticEs, ecotourismEs],
  recommendedFor: [familiesEs],
  city: miranda
};