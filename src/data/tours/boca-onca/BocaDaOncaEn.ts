import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { groupsEn } from '../../audiences/groups/GroupsEn';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/boca-onca/img3.webp`

export const bocaDaOncaEn: Tour = {
  id: 'TOUR-BDO-01',
  slug: 'boca-da-onca-em-bonito',
  name: 'Boca da Onça Ecotour',
  description: [
    'The walk starts in the riparian forest of the Salobra River and travels 4 km of trail amidst preserved vegetation. On the way, the visitor knows 8 waterfalls and has 4 stops for swimming in natural pools of crystal clear water, in addition to the Boca da Onça Waterfall, with 156 meters high, the highest in the state.',
    'On the way back, the staircase of 886 steps, reveals the most beautiful view of the Salobra River Canyon. Lunch is served at the reception with a varied menu and typical foods.',
    'The reception has two running water pools with fish, whirlpool, natural shower, changing rooms, souvenir shop, bar and restaurant.'
  ],
  shortDescription: '4km trail walk passing 8 waterfalls, including Boca da Onça (highest in MS), with natural pools and complete infrastructure.',
  mainImage: img,
  durationInHours: 8,
  minAge: 0,
  distanceFromCity: '59km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Lunch', 'Guide accompaniment', 'Accident insurance'],
  keywords: ['boca da onça', 'waterfall', 'trail', 'canyon'],
  categories: [adventureEn, ecotourismEn, aquaticEn],
  recommendedFor: [groupsEn, couplesEn],
  city: bonito
};
