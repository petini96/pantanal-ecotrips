import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${TOURS_BUCKET_NAME}/ceita-core/img1.webp`

export const ceitaCoreEn: Tour = {
  id: 'TOUR-CC-01',
  slug: 'ceita-core',
  name: 'Ceita Corê',
  description: [
    'Interpretive trail through walkways and suspension bridges, with stops for swimming in waterfalls and natural pools of the Chapeninha River.',
    'Visit to the source of the Chapeninha River, where there is a flooded cave explored to a depth of 155m.',
    'Farm with typical lunch and leisure infrastructure.'
  ],
  shortDescription: 'Trail with waterfalls and visit to the mysterious source of the Chapeninha River.',
  mainImage: img,
  durationInHours: 6,
  distanceFromCity: '36km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Guide accompaniment', 'Lunch', 'Use of infrastructure'],
  keywords: ['waterfalls', 'trail', 'spring', 'farm'],
  categories: [ecotourismEn, aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
