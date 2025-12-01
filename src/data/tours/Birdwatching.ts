import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { ecotourismPt, ecotourismEn, ecotourismEs } from 'src/data/categories/Ecotourismm';
import { miranda } from '../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';

const img = `${TOURS_BUCKET_NAME}/observacao-das-aves/img1.webp`

// PT-BR
export const birdwatchingPt: Tour = {
  id: 'TOUR-FSF-BW-01',
  slug: 'observacao-das-aves-em-miranda',
  name: 'Observação de Aves',
  description: 'Caminhada ao amanhecer, o melhor horário para observar a grande diversidade de aves do Pantanal, como tuiuiús, araras-azuis e tucanos. Essencial para amantes da ornitologia.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  includedItems: ['Guia especializado em aves'],
  keywords: ['aves', 'birdwatching', 'passarinhar', 'araras'],
  categories: [ecotourismPt],
  recommendedFor: [],
  city: miranda
};

// EN-US
export const birdwatchingEn: Tour = {
  id: 'TOUR-FSF-BW-01',
  slug: 'observacao-das-aves-em-miranda',
  name: 'Birdwatching',
  description: 'A walk at dawn, the best time to observe the great diversity of birds in the Pantanal, such as jabirus, hyacinth macaws, and toucans. Essential for ornithology lovers.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  includedItems: ['Specialized birding guide'],
  keywords: ['birds', 'birdwatching', 'macaws'],
  categories: [ecotourismEn],
  recommendedFor: [],
  city: miranda
};

// ES
export const birdwatchingEs: Tour = {
  id: 'TOUR-FSF-BW-01',
  slug: 'observacao-das-aves-em-miranda',
  name: 'Observación de Aves',
  description: 'Caminata al amanecer, el mejor momento para observar la gran diversidad de aves del Pantanal, como jabirús, guacamayos jacintos y tucanes. Esencial para los amantes de la ornitología.',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  includedItems: ['Guía especializado en aves'],
  keywords: ['aves', 'birdwatching', 'pájaros', 'guacamayos'],
  categories: [ecotourismEs],
  recommendedFor: [],
  city: miranda
};