import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/jeep-safari-nhecolandia/img1.webp`

export const jeepSafariEn: Tour = {
  id: 'TOUR-JS-01',
  slug: 'jeep-safari-nhecolandia-em-miranda',
  name: 'Jeep Safari in Nhecolândia',
  description: ['Exploration in an open 4x4 vehicle through the vast plains and fields of the Nhecolândia region, seeking to spot the rich Pantanal fauna like deer, anteaters, and jabirus.'],
  shortDescription: 'Exploration in an open 4x4 vehicle through the vast plains and fields of the Nhecolândia region, seeking to spot the rich Pantanal fauna like deer, anteaters, and jabirus.',
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

