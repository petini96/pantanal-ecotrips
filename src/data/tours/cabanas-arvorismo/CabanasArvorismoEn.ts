import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { groupsEn } from '../../audiences/groups/GroupsEn';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';

const img = `${TOURS_BUCKET_NAME}/cabanas-arvorismo/img1.jpg`

export const cabanasArvorismoEn: Tour = {
  id: 'TOUR-CA-01',
  slug: 'cabanas-arvorismo-em-bonito',
  name: 'Cabanas Treetop Circuit',
  description: [
    'A 300m course with 20 stations and 2 zip lines, at heights from 4m to 15m. The final one is an aquatic zip line over the Formoso River.'
  ],
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: '6.1km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Safety equipment (harness, helmet)', 'Training'],
  keywords: ['treetop', 'zip line', 'adventure', 'formoso river'],
  categories: [adventureEn],
  recommendedFor: [familiesEn, groupsEn],
  city: bonito
};