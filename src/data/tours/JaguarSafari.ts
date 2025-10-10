import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismPt, ecotourismEn, ecotourismEs } from 'src/data/categories/Ecotourismm';
import { adventurePt, adventureEn, adventureEs } from 'src/data/categories/Adventuree';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

// PT-BR
export const jaguarSafariPt: Tour = {
  id: 'TOUR-FSF-JS-01',
  slug: 'safari-fluvial',
  name: 'Safári de Onça-Pintada',
  description: 'Uma expedição especial focada em percorrer as áreas com maior probabilidade de avistamento da onça-pintada, o maior felino das Américas.',
  mainImage: `${TOURS_BUCKET_NAME}/fsf-jaguar-safari.webp`,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Veículo ou barco', 'Guia especializado'],
  keywords: ['onça', 'onça-pintada', 'jaguar', 'felino'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [],
  city: miranda
};

// EN-US
export const jaguarSafariEn: Tour = {
  id: 'TOUR-FSF-JS-01',
  slug: 'safari-fluvial',
  name: 'Jaguar Safari',
  description: 'A special expedition focused on exploring the areas with the highest probability of spotting the jaguar, the largest feline in the Americas.',
  mainImage: `${TOURS_BUCKET_NAME}/fsf-jaguar-safari.webp`,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Vehicle or boat', 'Specialized guide'],
  keywords: ['jaguar', 'feline', 'big cat'],
  categories: [ecotourismEn, adventureEn],
  recommendedFor: [],
  city: miranda
};

// ES
export const jaguarSafariEs: Tour = {
  id: 'TOUR-FSF-JS-01',
  slug: 'safari-fluvial',
  name: 'Safari de Jaguar',
  description: 'Una expedición especial enfocada en-US recorrer las áreas con la mayor probabilidad de avistar al jaguar, el felino más grande de las Américas.',
  mainImage: `${TOURS_BUCKET_NAME}/fsf-jaguar-safari.webp`,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Vehículo o bote', 'Guía especializado'],
  keywords: ['jaguar', 'felino'],
  categories: [ecotourismEs, adventureEs],
  recommendedFor: [],
  city: miranda
};