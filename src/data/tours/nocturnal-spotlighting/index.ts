import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesPt } from '../../audiences/families';
import { familiesEn } from '../../audiences/families';
import { familiesEs } from '../../audiences/families';

import { pantanalPt, pantanalEn, pantanalEs } from "src/data/categories/pantanal";
const img = `${TOURS_BUCKET_NAME}/focagem-notura-animais/img1.webp`

const commonData = {
  id: 'TOUR-FSF-NS-01',
  slug: 'focagem-notura-animais-em-miranda',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  city: miranda
};

export const nocturnalSpotlightingPt: Tour = {
    ...commonData,
    name: 'Focagem Noturna de Animais Silvestres',
    description: ['Safári em veículo aberto após o jantar para observar animais de hábitos noturnos. Com o auxílio de uma potente lanterna, é possível avistar jacarés, corujas, capivaras e até onças.'],
    shortDescription: 'Safári em veículo aberto após o jantar para observar animais de hábitos noturnos. Com o auxílio de uma potente lanterna, é possível avistar jacarés, corujas, capivaras e até onças.',
    includedItems: ['Veículo de safári', 'Lanterna de focagem', 'Guia'],
    keywords: ['focagem', 'noturna', 'safári', 'animais'],
    categories: [pantanalPt],
    recommendedFor: [familiesPt]
};

export const nocturnalSpotlightingEn: Tour = {
    ...commonData,
    name: 'Nocturnal Wildlife Spotlighting',
    description: ['An open vehicle safari after dinner to observe nocturnal animals. With the help of a powerful spotlight, it is possible to see caimans, owls, capybaras, and even jaguars.'],
    shortDescription: 'An open vehicle safari after dinner to observe nocturnal animals. With the help of a powerful spotlight, it is possible to see caimans, owls, capybaras, and even jaguars.',
    includedItems: ['Safari vehicle', 'Spotlight', 'Guide'],
    keywords: ['spotlighting', 'nocturnal', 'safari', 'animals'],
    categories: [pantanalEn],
    recommendedFor: [familiesEn]
};

export const nocturnalSpotlightingEs: Tour = {
    ...commonData,
    name: 'Enfoque Nocturno de Animales Silvestres',
    description: ['Un safari en vehículo abierto después de la cena para observar animales de hábitos nocturnos. Con la ayuda de una potente linterna, es posible avistar caimanes, búhos, capibaras e incluso jaguares.'],
    shortDescription: 'Un safari en vehículo abierto después de la cena para observar animales de hábitos nocturnos. Con la ayuda de una potente linterna, es posible avistar caimanes, búhos, capibaras e incluso jaguares.',
    includedItems: ['Vehículo de safari', 'Linterna de enfoque', 'Guía'],
    keywords: ['enfoque', 'nocturno', 'safari', 'animales'],
    categories: [pantanalEs],
    recommendedFor: [familiesEs]
};
