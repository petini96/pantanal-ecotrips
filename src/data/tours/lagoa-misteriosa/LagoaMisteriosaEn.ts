import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { adventureEn } from '../../categories/adventuree/AdventureeEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { cavesEn } from '../../categories/cavess/CavessEn';

const img = `${TOURS_BUCKET_NAME}/lagoa-misteriosa/img1.webp`

export const lagoaMisteriosaEn: Tour = {
  id: 'TOUR-LM-01',
  slug: 'lagoa-misteriosa',
  name: 'Lagoa Misteriosa (Mysterious Lagoon)',
  description: [
    'Starts with a small trail of 600m through the forest surrounding the sinkhole, leading visitors to the lookout, from where it is possible to contemplate all the beauty of the Lagoon.',
    'Access is via a staircase of 179 steps. snorkeling, the view of the two blue abysses that form the bottom of the lagoon is impressive.',
    'It is a seasonal tour (usually open from April to early October). It does not have a support boat.'
  ],
  shortDescription: 'Snorkeling in a sinkhole of deep and mysterious blue waters.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '45km',
  difficulty: DifficultyLevel.MODERATE,
  environments: [EnvironmentType.CAVE, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Snorkeling equipment'],
  keywords: ['snorkeling', 'sinkhole', 'depth', 'mystery'],
  categories: [aquaticEn, cavesEn, adventureEn],
  recommendedFor: [couplesEn],
  city: bonito
};
