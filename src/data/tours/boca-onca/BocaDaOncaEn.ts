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
  description: ['A 4km trail walk passing by 11 waterfalls, including Boca da Onça Waterfall, the highest in the state at 156m. Various swimming spots and a view of the Salobra River Canyon.'],
  shortDescription: 'A 4km trail walk passing by 11 waterfalls, including Boca da Onça Waterfall, the highest in the state at 156m. Various swimming spots and a view of the Salobra River Canyon.',
  mainImage: img,
  durationInHours: 8,
  distanceFromCity: '55km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.WATERFALL, EnvironmentType.FOREST, EnvironmentType.RIVER],
  includedItems: ['Lunch', 'Guide accompaniment'],
  keywords: ['boca da onça', 'waterfall', 'trail', 'canyon'],
  categories: [adventureEn, ecotourismEn, aquaticEn],
  recommendedFor: [groupsEn, couplesEn],
  city: bonito
};

