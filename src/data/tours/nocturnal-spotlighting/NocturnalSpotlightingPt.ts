import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families/FamiliesPt';
import { ecotourismPt } from '../../categories/ecotourismm/EcotourismmPt';

const img = `${TOURS_BUCKET_NAME}/focagem-notura-animais/img1.webp`

export const nocturnalSpotlightingPt: Tour = {
  id: 'TOUR-FSF-NS-01',
  slug: 'focagem-notura-animais-em-miranda',
  name: 'Focagem Noturna de Animais Silvestres',
  description: 'Safári em veículo aberto após o jantar para observar animais de hábitos noturnos. Com o auxílio de uma potente lanterna, é possível avistar jacarés, corujas, capivaras e até onças.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Veículo de safári', 'Lanterna de focagem', 'Guia'],
  keywords: ['focagem', 'noturna', 'safári', 'animais'],
  categories: [ecotourismPt],
  recommendedFor: [familiesPt],
  city: miranda
};