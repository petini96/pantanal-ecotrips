import { type Tour } from 'src/model/Tour';
import { DifficultyLevel, EnvironmentType } from 'src/model/Enums';
import { miranda } from '../../regions/Cities';
import { TOURS_BUCKET_NAME } from 'src/utils/environmentUtils';
import { familiesEn } from '../../audiences/families/FamiliesEn';
import { ecotourismEn } from '../../categories/ecotourismm/EcotourismmEn';

const img = `${TOURS_BUCKET_NAME}/safari-fluvial/img1.webp`

export const fluvialSafariEn: Tour = {
  id: 'TOUR-FS-01',
  slug: 'safari-fluvial-em-miranda',
  name: 'Fluvial Safari',
  description: [
     'A daytime boat trip to explore the banks of the Miranda River, ideal for observing birds, caimans, and hopefully, otters and giant otters.'
  ],
  mainImage: img,
  durationInHours: 3,
  distanceFromCity: 'N/A',
  difficulty: DifficultyLevel.EASY,
  environments: [EnvironmentType.RIVER],
  includedItems: ['Boat', 'Life jacket', 'Guide'],
  keywords: ['safari', 'river', 'birds', 'observation'],
  categories: [ecotourismEn],
  recommendedFor: [familiesEn],
  city: miranda
};