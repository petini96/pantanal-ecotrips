import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/canions-do-salobra/img1.webp`

export const canionsDoSalobraEn: Tour = {
  id: 'TOUR-CS-01',
  slug: 'canions-do-salobra',
  name: 'Canyons of Salobra',
  description: [
    'Adventure expedition along the Salobra River. Can be done by Duck Kayak or Acquatrekking (water trail).',
    'Wild and breathtaking scenery, with stops for swimming and waterfalls.',
    'Ideal for those seeking deep contact with untouched nature.'
  ],
  shortDescription: 'Adventure expedition (Duck or Trekking) through the wild canyons of the Salobra River.',
  mainImage: img,
  durationInHours: 8,
  distanceFromCity: '92km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL, EnvironmentType.MOUNTAIN],
  includedItems: ['Equipment', 'Guide', 'Lunch'],
  keywords: ['adventure', 'duck', 'trekking', 'canyon'],
  categories: [adventureEn, ecotourismEn],
  recommendedFor: [],
  city: bonito
};
