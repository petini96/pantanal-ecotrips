import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

import { trailsWaterfallsPt, trailsWaterfallsEn, trailsWaterfallsEs } from "src/data/categories/trails-waterfalls";
import { pantanalPt, pantanalEn, pantanalEs } from "src/data/categories/pantanal";
const img = `${TOURS_BUCKET_NAME}/caminhada-ecologica/img1.webp`

const commonData = {
  id: 'TOUR-EW-01',
  slug: 'caminhada-ecologica-em-miranda',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  city: miranda
};

// PT-BR
export const ecologicalWalkPt: Tour = {
    ...commonData,
    name: 'Caminhada Ecológica (Selva e Campos)',
    description: ['Uma trilha interpretativa a pé por diferentes ambientes do Pantanal, como capões de mata e campos abertos, aprendendo sobre a flora e pequenos animais.'],
    shortDescription: 'Uma trilha interpretativa a pé por diferentes ambientes do Pantanal, como capões de mata e campos abertos, aprendendo sobre a flora e pequenos animais.',
    includedItems: ['Acompanhamento de guia'],
    keywords: ['caminhada', 'trilha', 'ecológica', 'flora'],
    categories: [trailsWaterfallsPt, pantanalPt],
    recommendedFor: []
};

export const ecologicalWalkEn: Tour = {
    ...commonData,
    name: 'Ecological Walk (Jungle and Fields)',
    description: ['An interpretive walking trail through different Pantanal environments, such as forest patches and open fields, learning about the flora and small animals.'],
    shortDescription: 'An interpretive walking trail through different Pantanal environments, such as forest patches and open fields, learning about the flora and small animals.',
    includedItems: ['Guide accompaniment'],
    keywords: ['walk', 'trail', 'ecological', 'flora'],
    categories: [trailsWaterfallsEn, pantanalEn],
    recommendedFor: []
};

export const ecologicalWalkEs: Tour = {
    ...commonData,
    name: 'Caminata Ecológica (Selva y Campos)',
    description: ['Un sendero interpretativo a pie por diferentes entornos del Pantanal, como zonas boscosas y campos abiertos, aprendiendo sobre la flora y pequeños animales.'],
    shortDescription: 'Un sendero interpretativo a pie por diferentes entornos del Pantanal, como zonas boscosas y campos abiertos, aprendiendo sobre la flora y pequeños animales.',
    includedItems: ['Acompañamiento de guía'],
    keywords: ['caminata', 'sendero', 'ecológica', 'flora'],
    categories: [trailsWaterfallsEs, pantanalEs],
    recommendedFor: []
};
