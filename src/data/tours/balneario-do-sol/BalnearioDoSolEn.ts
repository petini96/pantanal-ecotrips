import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${TOURS_BUCKET_NAME}/balneario-do-sol/img1.webp`

export const balnearioDoSolEn: Tour = {
  id: 'TOUR-BDS-01',
  slug: 'balneario-do-sol',
  name: 'Balneário do Sol',
  description: [
    'The Balneário do Sol offers the possibility of swimming in the pool or the Formoso River itself with various species of fish and beautiful waterfalls being part of the scenery.',
    'It has a volleyball court, sand soccer, zip line, jumping platform and restaurant, as well as kiosks with barbecue grills and restrooms (adapted for wheelchair users).',
    'It is an appropriate place to spend the day and refresh yourself.'
  ],
  shortDescription: 'Complete leisure with waterfalls, barbecue grills and activities for the family.',
  mainImage: img,
  durationInHours: 6,
  minAge: 0,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Entrance and use of infrastructure'],
  keywords: ['resort', 'family', 'barbecue', 'formoso river'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
