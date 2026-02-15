import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/barra-do-sucuri/img1.webp`

export const barraDoSucuriEn: Tour = {
  id: 'TOUR-BS-01',
  slug: 'barra-do-sucuri',
  name: 'Barra do Sucuri',
  description: [
    'The tour begins going up the Sucuri River in a delightful electric boat ride of approx. 1,300m getting to know the local fauna and flora.',
    'The return happens floating with the fish and underwater vegetation, ending at the meeting of the waters of the Sucuri River with the Formoso River. The tour has a support boat throughout the course.',
    'There is a restaurant at Refúgio da Barra (resort next to Barra do Sucuri), staying at the resort is not included.'
  ],
  shortDescription: 'Electric boat trip up the Sucuri River and snorkeling down in crystal clear water.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '17km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Support boat'],
  keywords: ['snorkeling', 'sucuri river', 'electric boat', 'crystal clear waters'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};
