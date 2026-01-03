import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { aquaticEs } from '../../categories/aquaticc/AquaticcEs';

const img = `${TOURS_BUCKET_NAME}/canoagem-miranda/img1.jpg`

export const canoeingEs: Tour = {
  id: 'TOUR-CN-01',
  slug: 'canoagem-em-miranda',
  name: 'Canotaje',
  description: [
    'Paseo en canoas canadienses para dos personas, remando silenciosamente por las aguas y acercándose a la vida silvestre sin perturbaciones.'
  ],
  mainImage: img,
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