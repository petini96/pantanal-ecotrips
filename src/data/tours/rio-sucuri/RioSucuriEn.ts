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
    'The attraction transport will take visitors to the beginning of the trail of approx. 500m, covered in the riparian forest taking the visitor to the springs of the Rio Sucuri.',
    'In the floating for about 1,500m, the visitor will be able to appreciate the beauty of the underwater flora and interaction with several schools of fish.',
    'The tour has a support boat throughout the course. It has a Restaurant'
  ],
  shortDescription: 'Snorkeling in one of the clearest waters in the world.',
  mainImage: img,
  durationInHours: 4,
  minAge: 4,
  groupLimit: 6,
  distanceFromCity: '19km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Support boat'],
  keywords: ['snorkeling', 'crystal clear', 'fish', 'rio sucuri'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};
