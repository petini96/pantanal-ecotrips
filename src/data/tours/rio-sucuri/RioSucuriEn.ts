import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/rio-sucuri/img1.webp`

export const rioSucuriEn: Tour = {
  id: 'TOUR-RS-01',
  slug: 'rio-sucuri',
  name: 'Rio Sucuri',
  description: [
    'The attraction transport will take visitors to the beginning of the trail of approx. 500m in the riparian forest to the springs of the Rio Sucuri.',
    'Floating for about 1,500m, visitors can appreciate the beauty of the underwater flora and interact with various schools of fish.',
    'The tour has a support boat throughout the course. Considered one of the clearest waters in the world.'
  ],
  shortDescription: 'Snorkeling in one of the clearest waters in the world.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '19km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Support boat'],
  keywords: ['snorkeling', 'crystal clear', 'fish', 'rio sucuri'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};
