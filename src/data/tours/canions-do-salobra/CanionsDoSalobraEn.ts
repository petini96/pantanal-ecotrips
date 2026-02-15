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
    'The Salobra Canyons offer an unforgettable experience of connection with nature, the 1-day expedition along the winding Salobra River is perfect for those seeking adventure and stunning scenery in the Pantanal.',
    'Navigate by motorboat through calm waters, surrounded by rocky walls and lush vegetation, where it is possible to spot birds, fish and other animals of the local fauna.',
    'The tour includes a stop for a refreshing swim in the crystal clear waters of the Salobra River.'
  ],
  shortDescription: 'Adventure expedition (Duck or Trekking) through the wild canyons of the Salobra River.',
  mainImage: img,
  durationInHours: 8,
  minAge: 5,
  distanceFromCity: '62km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.RIVER, EnvironmentType.WATERFALL, EnvironmentType.MOUNTAIN],
  includedItems: ['Equipment', 'Guide', 'Lunch'],
  keywords: ['adventure', 'duck', 'trekking', 'canyon'],
  categories: [adventureEn, ecotourismEn],
  recommendedFor: [],
  city: bonito
};
