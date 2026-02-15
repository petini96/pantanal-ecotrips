import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';
import { cavesEn } from '../../categories/cavess/CavessEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';

const img = `${TOURS_BUCKET_NAME}/abismo-anhumas/img1.webp`

export const abismoAnhumasEn: Tour = {
  id: 'TOUR-AA-01',
  slug: 'abismo-anhumas',
  name: 'Abismo Anhumas',
  description: [
    'A true journey to the center of the earth. The adventure begins with an electric rappel of 72m through a crack in the rock to a lake of crystal clear water.',
    'Down there, it is possible to take a boat ride and snorkeling (or scuba diving for certified divers) to observe the gigantic submerged formations (cones).',
    'Requires a check-point the day before.'
  ],
  shortDescription: 'Radical adventure with rappel descent and snorkeling in an underground lake.',
  mainImage: img,
  durationInHours: 5,
  distanceFromCity: '22km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Electric rappel', 'Boat ride', 'Snorkeling', 'Equipment'],
  keywords: ['rappel', 'cave', 'snorkeling', 'abyss', 'diving'],
  categories: [adventureEn, cavesEn, aquaticEn],
  recommendedFor: [],
  city: bonito
};
