import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${TOURS_BUCKET_NAME}/balneario-municipal/img1.webp`

export const balnearioMunicipalEn: Tour = {
  id: 'TOUR-MUN-01',
  slug: 'balneario-municipal',
  name: 'Balneário Municipal (Municipal Resort)',
  description: [
    'The public resort of Bonito offers swimming in the crystal clear waters of the Formoso River, with a large quantity of fish.',
    'It has infrastructure with snack bars, barbecue grills, volleyball courts and parking.',
    'Place easy to access and very frequented by locals and tourists.'
  ],
  shortDescription: 'River swimming with lots of fish and leisure infrastructure near the city.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Entrance'],
  keywords: ['resort', 'fish', 'formoso river', 'leisure'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
