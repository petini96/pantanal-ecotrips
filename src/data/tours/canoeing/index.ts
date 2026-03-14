import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { floatingPt, floatingEn, floatingEs } from "src/data/categories/floating";
import { resortsPt, resortsEn, resortsEs } from "src/data/categories/resorts";
const img = `${TOURS_BUCKET_NAME}/canoagem-miranda/img1.jpg`

const commonData = {
  id: 'TOUR-CN-01',
  slug: 'canoagem-em-miranda',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.RIVER],
  city: miranda
};

// PT-BR
export const canoeingPt: Tour = {
    ...commonData,
    name: 'Canoagem',
    description: ['Passeio em canoas canadenses para duas pessoas, remando silenciosamente pelas águas e aproximando-se da vida selvagem sem perturbações.'],
    shortDescription: 'Passeio em canoas canadenses para duas pessoas, remando silenciosamente pelas águas e aproximando-se da vida selvagem sem perturbações.',
    includedItems: ['Canoa', 'Remos', 'Colete salva-vidas', 'Guia'],
    keywords: ['canoa', 'remar', 'rio', 'silêncio'],
    categories: [floatingPt, resortsPt],
    recommendedFor: []
};

export const canoeingEn: Tour = {
    ...commonData,
    name: 'Canoeing',
    description: ['A trip in two-person Canadian canoes, paddling silently through the waters and getting close to wildlife without disturbance.'],
    shortDescription: 'A trip in two-person Canadian canoes, paddling silently through the waters and getting close to wildlife without disturbance.',
    includedItems: ['Canoe', 'Paddles', 'Life jacket', 'Guide'],
    keywords: ['canoe', 'paddle', 'river', 'silence'],
    categories: [floatingEn, resortsEn],
    recommendedFor: []
};

export const canoeingEs: Tour = {
    ...commonData,
    name: 'Canotaje',
    description: ['Paseo en canoas canadienses para dos personas, remando silenciosamente por las aguas y acercándose a la vida silvestre sin perturbaciones.'],
    shortDescription: 'Paseo en canoas canadienses para dos personas, remando silenciosamente por las aguas y acercándose a la vida silvestre sin perturbaciones.',
    includedItems: ['Canoa', 'Remos', 'Chaleco salvavidas', 'Guía'],
    keywords: ['canoa', 'remar', 'río', 'silencio'],
    categories: [floatingEs, resortsEs],
    recommendedFor: []
};
