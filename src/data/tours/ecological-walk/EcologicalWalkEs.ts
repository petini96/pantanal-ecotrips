import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismEs } from '../../categories/ecotourismm/EcotourismmEs';

const img = `${TOURS_BUCKET_NAME}/caminhada-ecologica/img1.webp`

export const ecologicalWalkEs: Tour = {
  id: 'TOUR-EW-01',
  slug: 'caminhada-ecologica-em-miranda',
  name: 'Caminata Ecológica (Selva y Campos)',
  description: ['Un sendero interpretativo a pie por diferentes entornos del Pantanal, como zonas boscosas y campos abiertos, aprendiendo sobre la flora y pequeños animales.'],
  shortDescription: 'Un sendero interpretativo a pie por diferentes entornos del Pantanal, como zonas boscosas y campos abiertos, aprendiendo sobre la flora y pequeños animales.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  includedItems: ['Acompañamiento de guía'],
  keywords: ['caminata', 'sendero', 'ecológica', 'flora'],
  categories: [ecotourismEs],
  recommendedFor: [],
  city: miranda
};

