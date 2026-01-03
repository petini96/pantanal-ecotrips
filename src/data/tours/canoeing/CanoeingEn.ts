import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${TOURS_BUCKET_NAME}/canoagem-miranda/img1.jpg`

export const canoeingEn: Tour = {
  id: 'TOUR-CN-01',
  slug: 'canoagem-em-miranda',
  name: 'Canoeing',
  description: [
    'A trip in two-person Canadian canoes, paddling silently through the waters and getting close to wildlife without disturbance.'
  ],
  mainImage: img,
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