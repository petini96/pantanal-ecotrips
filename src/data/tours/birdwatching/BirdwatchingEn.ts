import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/observacao-das-aves/img1.webp`

// EN-US
export const birdwatchingEn: Tour = {
  id: 'TOUR-FSF-BW-01',
  slug: 'observacao-das-aves-em-miranda',
  name: 'Birdwatching',
  description: [
    'A walk at dawn, the best time to observe the great diversity of birds in the Pantanal, such as jabirus, hyacinth macaws, and toucans. Essential for ornithology lovers.'
  ],
  shortDescription: 'A walk at dawn, the best time to observe the great diversity of birds in the Pantanal, such as jabirus, hyacinth macaws, and toucans. Essential for ornithology lovers.',
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