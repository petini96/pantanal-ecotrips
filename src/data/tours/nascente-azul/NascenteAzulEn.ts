import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/nascente-azul/img1.webp`

export const nascenteAzulEn: Tour = {
  id: 'TOUR-NA-01',
  slug: 'nascente-azul',
  name: 'Nascente Azul (Blue Spring)',
  description: [
    'The floating tour begins with a light walk of about 1,000 meters through the riparian forest, exuberant and diversified with fauna and flora, limestone tufas and fig tree woods.',
    'The spring is full of fish and plants that ornament the environment and the reception in front of Lake Capela. It does not have a support boat and for those who will do the floating, the Lago da Capela Resort is already included.',
    'It has a Restaurant and a complex with other activities, sold separately.'
  ],
  shortDescription: 'Snorkeling in calm waters and access to Lago da Capela Resort.',
  mainImage: img,
  durationInHours: 4,
  minAge: 4,
  groupLimit: 10,
  distanceFromCity: '32km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Day use at the resort'],
  keywords: ['snorkeling', 'resort', 'spring', 'fish'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};
