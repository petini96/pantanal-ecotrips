import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEn } from '../categories/adventuree/AdventureeEn';
import { adventureEs } from '../categories/adventuree/AdventureeEs';
import { adventurePt } from '../categories/adventuree/AdventureePt';
import { ecotourismEn } from '../categories/ecotourismm/EcotourismmEn';
import { ecotourismEs } from '../categories/ecotourismm/EcotourismmEs';
import { ecotourismPt } from '../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/jeep-safari-nhecolandia/img1.webp`

// PT-BR
export const jeepSafariPt: Tour = {
  id: 'TOUR-JS-01',
  slug: 'jeep-safari-nhecolandia-em-miranda',
  name: 'Safári de Jeep na Nhecolândia',
  description: 'Exploração em veículo 4x4 aberto pelas vastas planícies e campos da região da Nhecolândia, buscando avistar a rica fauna do Pantanal como cervos, tamanduás e tuiuiús.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS],
  includedItems: ['Veículo 4x4', 'Guia-motorista'],
  keywords: ['safari', 'jeep', '4x4', 'fauna'],
  categories: [ecotourismPt, adventurePt],
  recommendedFor: [],
  city: miranda
};

// EN-US
export const jeepSafariEn: Tour = {
  id: 'TOUR-JS-01',
  slug: 'jeep-safari-nhecolandia-em-miranda',
  name: 'Jeep Safari in Nhecolândia',
  description: 'Exploration in an open 4x4 vehicle through the vast plains and fields of the Nhecolândia region, seeking to spot the rich Pantanal fauna like deer, anteaters, and jabirus.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS],
  includedItems: ['4x4 vehicle', 'Driver-guide'],
  keywords: ['safari', 'jeep', '4x4', 'fauna'],
  categories: [ecotourismEn, adventureEn],
  recommendedFor: [],
  city: miranda
};

// ES
export const jeepSafariEs: Tour = {
  id: 'TOUR-JS-01',
  slug: 'jeep-safari-nhecolandia-em-miranda',
  name: 'Safari en Jeep en Nhecolândia',
  description: 'Exploración en un vehículo 4x4 abierto por las vastas llanuras y campos de la región de Nhecolândia, buscando avistar la rica fauna del Pantanal como ciervos, osos hormigueros y jabirús.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS],
  includedItems: ['Vehículo 4x4', 'Guía-conductor'],
  keywords: ['safari', 'jeep', '4x4', 'fauna'],
  categories: [ecotourismEs, adventureEs],
  recommendedFor: [],
  city: miranda
};