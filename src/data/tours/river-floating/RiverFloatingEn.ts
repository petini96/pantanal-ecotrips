import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { GENERAL_BUCKET_NAME} from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${GENERAL_BUCKET_NAME}/gallery/jungle-lodge/img4.jpg`

export const riverFloatingEn: Tour = {
  id: 'TOUR-RF-01',
  slug: 'flutuacao-rio-miranda',
  name: 'Floating Down the River',
  description: [
     'A relaxing descent in a small boat or with a "pool noodle" floater down the calm river waters, offering a unique perspective of the vegetation and sounds of nature.'
  ],
  shortDescription: 'A relaxing descent in a small boat or with a "pool noodle" floater down the calm river waters, offering a unique perspective of the vegetation and sounds of nature.',
  mainImage: img,
  durationInHours: 1.5,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Floating equipment', 'Guide'],
  keywords: ['floating', 'river', 'relax'],
  categories: [aquaticEn],
  recommendedFor: [familiesEn],
  city: miranda
};