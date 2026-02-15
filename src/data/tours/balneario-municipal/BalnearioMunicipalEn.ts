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
    'In a privileged stretch of the Rio Formoso, amidst crystal clear waters that allow a view of fish of varied colors and sizes.',
    'The Municipal Resort has parking, volleyball and sand soccer courts, snack bars and restaurants, as well as kiosks with barbecue grills and restrooms (adapted for wheelchair users).',
    'It is an appropriate place to spend the day and refresh yourself.'
  ],
  shortDescription: 'River bath with many fish and leisure infrastructure close to the city.',
  mainImage: img,
  durationInHours: 4,
  minAge: 0,
  distanceFromCity: '7km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Entrance'],
  keywords: ['resort', 'fish', 'rio formoso', 'leisure'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
