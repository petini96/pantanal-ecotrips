import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismPt, ecotourismEn, ecotourismEs } from 'src/data/categories/Ecotourismm';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

const img = `${TOURS_BUCKET_NAME}/caminhada-ecologica/img1.webp`

// PT-BR
export const ecologicalWalkPt: Tour = {
  id: 'TOUR-EW-01',
  slug: 'caminhada-ecologica',
  name: 'Caminhada Ecológica (Selva e Campos)',
  description: 'Uma trilha interpretativa a pé por diferentes ambientes do Pantanal, como capões de mata e campos abertos, aprendendo sobre a flora e pequenos animais.',
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

// EN-US
export const ecologicalWalkEn: Tour = {
  id: 'TOUR-EW-01',
  slug: 'caminhada-ecologica',
  name: 'Ecological Walk (Jungle and Fields)',
  description: 'An interpretive walking trail through different Pantanal environments, such as forest patches and open fields, learning about the flora and small animals.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.MEDIUM,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  includedItems: ['Guide accompaniment'],
  keywords: ['walk', 'trail', 'ecological', 'flora'],
  categories: [ecotourismEn],
  recommendedFor: [],
  city: miranda
};

// ES
export const ecologicalWalkEs: Tour = {
  id: 'TOUR-EW-01',
  slug: 'caminhada-ecologica',
  name: 'Caminata Ecológica (Selva y Campos)',
  description: 'Un sendero interpretativo a pie por diferentes entornos del Pantanal, como zonas boscosas y campos abiertos, aprendiendo sobre la flora y pequeños animales.',
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