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
    'After being equipped, the group will start the self-guided trail of 300 meters. The group will have a deck where they will receive instructions on the equipment they will use in the floating and also practical training, where they will perform the activity, thus enabling total adaptation to the environment.',
    'After the training, the group will descend a staircase with 78 steps (which may change according to the cave\'s water level), proceeding to the internal area of the cave and starting the floating where they can contemplate the entire Gruta do Mimoso and its beautiful geological formations.'
  ],
  shortDescription: 'Snorkeling inside a cave with blue waters and incredible formations.',
  mainImage: img,
  durationInHours: 2,
  minAge: 8,
  groupLimit: 10,
  distanceFromCity: '28km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Guide accompaniment', 'Snorkeling equipment', 'Training'],
  keywords: ['cave', 'snorkeling', 'grotto', 'mimoso'],
  categories: [cavesEn, aquaticEn],
  recommendedFor: [couplesEn, familiesEn],
  city: bonito
};
