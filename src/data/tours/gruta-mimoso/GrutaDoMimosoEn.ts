import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { cavesEn } from '../../categories/cavess/CavessEn';

const img = `${TOURS_BUCKET_NAME}/gruta-do-mimoso/img1.webp`

export const grutaDoMimosoEn: Tour = {
  id: 'TOUR-GM-01',
  slug: 'gruta-do-mimoso',
  name: 'Gruta do Mimoso',
  description: [
    'The tour begins with a trail and staircase to the entrance of the cave. After training, visitors float in crystal clear waters inside the cave.',
    'Beautiful geological formations and submerged halls make this a unique experience. It also offers diving.'
  ],
  shortDescription: 'Snorkeling inside a cave with blue waters and incredible formations.',
  mainImage: img,
  durationInHours: 2,
  distanceFromCity: '28km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Training'],
  keywords: ['cave', 'snorkeling', 'grotto', 'mimoso'],
  categories: [cavesEn, aquaticEn],
  recommendedFor: [couplesEn, familiesEn],
  city: bonito
};
