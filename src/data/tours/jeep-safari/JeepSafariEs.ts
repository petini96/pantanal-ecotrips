import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/jeep-safari-nhecolandia/img1.webp`

export const jeepSafariEs: Tour = {
  id: 'TOUR-JS-01',
  slug: 'jeep-safari-nhecolandia-em-miranda',
  name: 'Safari en Jeep en Nhecolândia',
  description: ['Exploración en un vehículo 4x4 abierto por las vastas llanuras y campos de la región de Nhecolândia, buscando avistar la rica fauna del Pantanal como ciervos, osos hormigueros y jabirús.'],
  shortDescription: 'Exploración en un vehículo 4x4 abierto por las vastas llanuras y campos de la región de Nhecolândia, buscando avistar la rica fauna del Pantanal como ciervos, osos hormigueros y jabirús.',
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

