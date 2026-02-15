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
    'Arvorismo Cabanas is a course 300 meters long and ranging in height from 4 to 15 meters. The visitor goes through 20 different activities, and two zip lines, the last being an aquatic zip line on the Formoso River.'
  ],
  shortDescription: 'Tree climbing course with 300m and 20 stations, including zip lines and aquatic zip line on the Formoso River.',
  mainImage: img,
  durationInHours: 3,
  minAge: 6,
  distanceFromCity: '6km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Safety equipment (harness, helmet)', 'Training', 'Guide'],
  keywords: ['tree climbing', 'zip line', 'adventure', 'rio formoso'],
  categories: [adventureEn],
  recommendedFor: [familiesEn, groupsEn],
  city: bonito
};
