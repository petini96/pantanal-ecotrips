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
    'Large leisure area on the banks of the Formoso River with waterfalls, natural pools and complete infrastructure.',
    'Offers kiosks with barbecue grills, sports courts, zipline and trampoline.',
    'Great for families to spend the whole day. Wild animals like monkeys and birds are frequent in the area.'
  ],
  shortDescription: 'Complete leisure with waterfalls, barbecue grills and activities for the family.',
  mainImage: img,
  durationInHours: 6,
  distanceFromCity: '10km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Entrance and use of infrastructure'],
  keywords: ['resort', 'family', 'barbecue', 'formoso river'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: bonito
};
