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
    'The descent and ascent are carried out through a winch (it is 72 meters), which will require little physical effort to carry out the activity. All visitors\' belongings, such as bags and backpacks, will be transported in the same way.',
    'The arrival will be on a floating platform, where tourists can prepare for the Boat ride, held in the crystal clear water lake and to get to know the geological formations, back to the deck they prepare for the floating or diving activity, using neoprene clothing and shoes in addition to the mask and snorkel already included in the tour.',
    'Visitors must mandatorily attend the CheckPoint of the tour held the day before, at the Abismo office, from 09:00 to 17:00.'
  ],
  shortDescription: 'Radical adventure with rappel descent and snorkeling in an underground lake.',
  mainImage: img,
  durationInHours: 5,
  minAge: 5,
  distanceFromCity: '22km',
  difficulty: DifficultyLevel.HARD,
  environments: [EnvironmentType.CAVE, EnvironmentType.WATER],
  includedItems: ['Electric rappel', 'Boat ride', 'Snorkeling', 'Equipment'],
  keywords: ['rappel', 'cave', 'snorkeling', 'abyss', 'diving'],
  categories: [adventureEn, cavesEn, aquaticEn],
  recommendedFor: [],
  city: bonito
};
