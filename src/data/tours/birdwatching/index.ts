import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismPt } from '../../categories/ecotourismm';
import { ecotourismEn } from '../../categories/ecotourismm';
import { ecotourismEs } from '../../categories/ecotourismm';

const img = `${TOURS_BUCKET_NAME}/observacao-das-aves/img1.webp`

const commonData = {
  id: 'TOUR-FSF-BW-01',
  slug: 'observacao-das-aves-em-miranda',
  mainImage: img,
  durationInHours: 2.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.FIELDS],
  city: miranda
};

// PT-BR
export const birdwatchingPt: Tour = {
    ...commonData,
    name: 'Observação de Aves',
    description: ['Caminhada ao amanhecer, o melhor horário para observar a grande diversidade de aves do Pantanal, como tuiuiús, araras-azuis e tucanos. Essencial para amantes da ornitologia.'],
    shortDescription: 'Caminhada ao amanhecer, o melhor horário para observar a grande diversidade de aves do Pantanal, como tuiuiús, araras-azuis e tucanos. Essencial para amantes da ornitologia.',
    includedItems: ['Guia especializado em aves'],
    keywords: ['aves', 'birdwatching', 'passarinhar', 'araras'],
    categories: [ecotourismPt],
    recommendedFor: []
};

// EN-US
export const birdwatchingEn: Tour = {
    ...commonData,
    name: 'Birdwatching',
    description: [
        'A walk at dawn, the best time to observe the great diversity of birds in the Pantanal, such as jabirus, hyacinth macaws, and toucans. Essential for ornithology lovers.'
    ],
    shortDescription: 'A walk at dawn, the best time to observe the great diversity of birds in the Pantanal, such as jabirus, hyacinth macaws, and toucans. Essential for ornithology lovers.',
    includedItems: ['Specialized birding guide'],
    keywords: ['birds', 'birdwatching', 'macaws'],
    categories: [ecotourismEn],
    recommendedFor: []
};

// ES
export const birdwatchingEs: Tour = {
    ...commonData,
    name: 'Observación de Aves',
    description: ['Caminata al amanecer, el mejor momento para observar la gran diversidad de aves del Pantanal, como jabirús, guacamayos jacintos y tucanes. Esencial para los amantes de la ornitología.'],
    shortDescription: 'Caminata al amanecer, el mejor momento para observar la gran diversidad de aves del Pantanal, como jabirús, guacamayos jacintos y tucanes. Esencial para los amantes de la ornitología.',
    includedItems: ['Guía especializado en aves'],
    keywords: ['aves', 'birdwatching', 'pájaros', 'guacamayos'],
    categories: [ecotourismEs],
    recommendedFor: []
};
