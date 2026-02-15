import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { GENERAL_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { groupsEn } from '../../audiences/groups/GroupsEn';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img49.jpg`

export const boteRioFormosoEn: Tour = {
  id: 'TOUR-BRF-01',
  slug: 'bote-rio-formoso-em-bonito',
  name: 'Rafting on the Formoso River',
  description: [
    'The dinghy tour is carried out in rubber boats for up to 12 people, on a 6 km route along the Rio Formoso, passing through 3 waterfalls and 2 rapids. On the river banks, birds and wild animals can be seen.'
  ],
  shortDescription: 'Descent of 6km in inflatable boats along one of the main rivers of the region, passing through waterfalls and rapids.',
  mainImage: img,
  durationInHours: 4,
  minAge: 5,
  groupLimit: 12,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  includedItems: ['Life jacket', 'Guide accompaniment'],
  keywords: ['dinghy', 'rio formoso', 'rapids', 'waterfall'],
  categories: [aquaticEn, adventureEn],
  recommendedFor: [familiesEn, groupsEn],
  city: bonito
};
