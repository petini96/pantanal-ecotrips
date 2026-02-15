import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { bonito } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { couplesEn } from '../../audiences/couples/CouplesEn';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { aquaticEn } from '../../categories/aquaticc/AquaticcEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/aquario-natural/img1.webp`

export const aquarioNaturalEn: Tour = {
  id: 'TOUR-AN-01',
  slug: 'aquario-natural',
  name: 'Natural Aquarium',
  description: [
    'Starting with a walk of approx. 700m in the riparian forest to the source of the Baia Bonita river, where the floating of approx. 800m takes place, appreciating the diversity of fish and underwater plants.',
    'On the way back along the animal trail (approx. 1,000m), visitors can spot birds and wild animals and jump from the zip line at the meeting of the rivers. The tour has a support boat throughout the course.',
    'Where is a restaurant at the attraction, consumption paid separately.'
  ],
  shortDescription: 'Snorkeling in crystal clear waters at the source of the Baia Bonita river, with a trail and rich underwater life.',
  mainImage: img,
  durationInHours: 4,
  distanceFromCity: '8km',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER, EnvironmentType.FOREST],
  includedItems: ['Guide accompaniment', 'Equipment (mask, snorkel, wetsuit)', 'Support boat'],
  keywords: ['snorkeling', 'fish', 'spring', 'trail', 'zipline'],
  categories: [aquaticEn, ecotourismEn],
  recommendedFor: [familiesEn, couplesEn],
  city: bonito
};
