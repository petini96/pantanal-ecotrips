import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventurePt } from '../../categories/adventuree';
import { ecotourismPt } from '../../categories/ecotourismm';
import { adventureEn } from '../../categories/adventuree';
import { ecotourismEn } from '../../categories/ecotourismm';
import { adventureEs } from '../../categories/adventuree';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/jeep-safari-nhecolandia/img1.webp`

const commonData = {
  id: 'TOUR-JS-01',
  slug: 'jeep-safari-nhecolandia-em-miranda',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS],
  city: miranda
};

export const jeepSafariPt: Tour = {
    ...commonData,
    name: 'Safári de Jeep na Nhecolândia',
    description: ['Exploração em veículo 4x4 aberto pelas vastas planícies e campos da região da Nhecolândia, buscando avistar a rica fauna do Pantanal como cervos, tamanduás e tuiuiús.'],
    shortDescription: 'Exploração em veículo 4x4 aberto pelas vastas planícies e campos da região da Nhecolândia, buscando avistar a rica fauna do Pantanal como cervos, tamanduás e tuiuiús.',
    includedItems: ['Veículo 4x4', 'Guia-motorista'],
    keywords: ['safari', 'jeep', '4x4', 'fauna'],
    categories: [ecotourismPt, adventurePt],
    recommendedFor: []
};

export const jeepSafariEn: Tour = {
    ...commonData,
    name: 'Jeep Safari in Nhecolândia',
    description: ['Exploration in an open 4x4 vehicle through the vast plains and fields of the Nhecolândia region, seeking to spot the rich Pantanal fauna like deer, anteaters, and jabirus.'],
    shortDescription: 'Exploration in an open 4x4 vehicle through the vast plains and fields of the Nhecolândia region, seeking to spot the rich Pantanal fauna like deer, anteaters, and jabirus.',
    includedItems: ['4x4 vehicle', 'Driver-guide'],
    keywords: ['safari', 'jeep', '4x4', 'fauna'],
    categories: [ecotourismEn, adventureEn],
    recommendedFor: []
};

export const jeepSafariEs: Tour = {
    ...commonData,
    name: 'Safari en Jeep en Nhecolândia',
    description: ['Exploración en un vehículo 4x4 abierto por las vastas llanuras y campos de la región de Nhecolândia, buscando avistar la rica fauna del Pantanal como ciervos, osos hormigueros y jabirús.'],
    shortDescription: 'Exploración en un vehículo 4x4 abierto por las vastas llanuras y campos de la región de Nhecolândia, buscando avistar la rica fauna del Pantanal como ciervos, osos hormigueros y jabirús.',
    includedItems: ['Vehículo 4x4', 'Guía-conductor'],
    keywords: ['safari', 'jeep', '4x4', 'fauna'],
    categories: [ecotourismEs, adventureEs],
    recommendedFor: []
};
