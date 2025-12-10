import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEs } from '../../categories/adventuree/AdventureeEs';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/safari-onca-pintada/img1.webp`
 
export const jaguarSafariEs: Tour = {
  id: 'TOUR-FSF-JS-01',
  slug: 'safari-onca-pintada-em-miranda',
  name: 'Safari de Jaguar',
  description: 'Una expedición especial enfocada en recorrer las áreas con la mayor probabilidad de avistar al jaguar, el felino más grande de las Américas.',
  mainImage: img,
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