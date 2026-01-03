import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/caminhada-ecologica/img1.webp`

// PT-BR
export const ecologicalWalkPt: Tour = {
  id: 'TOUR-EW-01',
  slug: 'caminhada-ecologica-em-miranda',
  name: 'Caminhada Ecológica (Selva e Campos)',
  description: [
     'Uma trilha interpretativa a pé por diferentes ambientes do Pantanal, como capões de mata e campos abertos, aprendendo sobre a flora e pequenos animais.'
  ],
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  includedItems: ['Acompanhamento de guia'],
  keywords: ['caminhada', 'trilha', 'ecológica', 'flora'],
  categories: [ecotourismPt],
  recommendedFor: [],
  city: miranda
};