import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { aquaticPt } from '../../categories/aquaticc/AquaticcPt';

const img = `${TOURS_BUCKET_NAME}/canoagem-miranda/img1.jpg`

// PT-BR
export const canoeingPt: Tour = {
  id: 'TOUR-CN-01',
  slug: 'canoagem-em-miranda',
  name: 'Canoagem',
  description: ['Passeio em canoas canadenses para duas pessoas, remando silenciosamente pelas águas e aproximando-se da vida selvagem sem perturbações.'],
  shortDescription: 'Passeio em canoas canadenses para duas pessoas, remando silenciosamente pelas águas e aproximando-se da vida selvagem sem perturbações.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Canoa', 'Remos', 'Colete salva-vidas', 'Guia'],
  keywords: ['canoa', 'remar', 'rio', 'silêncio'],
  categories: [aquaticPt],
  recommendedFor: [],
  city: miranda
};

