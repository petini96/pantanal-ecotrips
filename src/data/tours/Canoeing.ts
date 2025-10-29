import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { aquaticPt, aquaticEn, aquaticEs } from 'src/data/categories/Aquaticc';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

// PT-BR
export const canoeingPt: Tour = {
  id: 'TOUR-CN-01',
  slug: 'canoagem',
  name: 'Canoagem',
  description: 'Passeio em canoas canadenses para duas pessoas, remando silenciosamente pelas águas e aproximando-se da vida selvagem sem perturbações.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-canoeing.jpg`,
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

// EN-US
export const canoeingEn: Tour = {
  id: 'TOUR-CN-01',
  slug: 'canoagem',
  name: 'Canoeing',
  description: 'A trip in two-person Canadian canoes, paddling silently through the waters and getting close to wildlife without disturbance.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-canoeing.jpg`,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Canoe', 'Paddles', 'Life jacket', 'Guide'],
  keywords: ['canoe', 'paddle', 'river', 'silence'],
  categories: [aquaticEn],
  recommendedFor: [],
  city: miranda
};

// ES
export const canoeingEs: Tour = {
  id: 'TOUR-CN-01',
  slug: 'canoagem',
  name: 'Canotaje',
  description: 'Paseo en canoas canadienses para dos personas, remando silenciosamente por las aguas y acercándose a la vida silvestre sin perturbaciones.',
  mainImage: `${TOURS_BUCKET_NAME}/pantanal-canoeing.jpg`,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Canoa', 'Remos', 'Chaleco salvavidas', 'Guía'],
  keywords: ['canoa', 'remar', 'río', 'silencio'],
  categories: [aquaticEs],
  recommendedFor: [],
  city: miranda
};