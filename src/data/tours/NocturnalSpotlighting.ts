import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismPt, ecotourismEn, ecotourismEs } from 'src/data/categories/Ecotourismm';
import { familiesPt, familiesEn, familiesEs } from 'src/data/audiences/Families';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

const img = `${TOURS_BUCKET_NAME}/focagem-notura-animais/img1.webp`
// PT-BR
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

// EN-US
export const nocturnalSpotlightingEn: Tour = {
  id: 'TOUR-FSF-NS-01',
  slug: 'focagem-notura-animais-em-miranda',
  name: 'Nocturnal Wildlife Spotlighting',
  description: 'An open vehicle safari after dinner to observe nocturnal animals. With the help of a powerful spotlight, it is possible to see caimans, owls, capybaras, and even jaguars.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Safari vehicle', 'Spotlight', 'Guide'],
  keywords: ['spotlighting', 'nocturnal', 'safari', 'animals'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: miranda
};

// ES
export const nocturnalSpotlightingEs: Tour = {
  id: 'TOUR-FSF-NS-01',
  slug: 'focagem-notura-animais-em-miranda',
  name: 'Enfoque Nocturno de Animales Silvestres',
  description: 'Un safari en vehículo abierto después de la cena para observar animales de hábitos nocturnos. Con la ayuda de una potente linterna, es posible avistar caimanes, búhos, capibaras e incluso jaguares.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FIELDS, EnvironmentType.FOREST],
  includedItems: ['Vehículo de safari', 'Linterna de enfoque', 'Guía'],
  keywords: ['enfoque', 'nocturno', 'safari', 'animales'],
  categories: [ecotourismEs],
  recommendedFor: [familiesEs],
  city: miranda
};