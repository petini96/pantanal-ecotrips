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
    'In the Tupi-Guarani language Ceita Corê means “Land of my children”. Interpretive trail through walkways and suspension bridges make the group appreciate the sounds and refresh themselves in waterfalls and natural pools, a 4km route in the riparian forest of the Chapeninha river, with a stop for bathing in the waterfall.',
    'And visitation to the exotic spring of crystal clear waters, which stimulates the imagination, as it is considered one of the deepest caves in the world, with a flow rate of 1300 liters of water per second. Mandatory use of sneakers.'
  ],
  shortDescription: 'Trail with waterfalls and visit to the mysterious source of the Chapeninha River.',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '36km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER, EnvironmentType.FARM],
  includedItems: ['Guide accompaniment', 'Lunch', 'Use of infrastructure'],
  keywords: ['waterfalls', 'trail', 'spring', 'farm'],
  categories: [ecotourismEn, aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
