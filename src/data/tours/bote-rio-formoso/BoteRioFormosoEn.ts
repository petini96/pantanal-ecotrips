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
  description: ['A 6km downstream trip in inflatable rafts on one of the main rivers of the region, passing by three waterfalls, two rapids, and a stop for swimming.'],
  shortDescription: 'A 6km downstream trip in inflatable rafts on one of the main rivers of the region, passing by three waterfalls, two rapids, and a stop for swimming.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '12km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL],
  includedItems: ['Life vest', 'Guide accompaniment'],
  keywords: ['rafting', 'formoso river', 'rapids', 'waterfall'],
  categories: [aquaticEn, adventureEn],
  recommendedFor: [familiesEn, groupsEn],
  city: bonito
};

